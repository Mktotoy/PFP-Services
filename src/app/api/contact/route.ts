/**
 * Reception des demandes de devis.
 *
 * Ordre des controles : les plus economiques d'abord, l'envoi en dernier.
 * Aucune reponse de succes n'est renvoyee tant que le fournisseur n'a pas
 * accepte le message.
 */

import { NextResponse } from 'next/server';
import { validateContact } from '@/lib/contact/validate';
import { checkHoneypot, checkTiming, scoreContent } from '@/lib/contact/spam';
import { checkRateLimit, clientIp } from '@/lib/contact/rateLimit';
import { buildContactMail } from '@/lib/contact/message';
import { createContactSubmission, updateContactSubmission } from '@/lib/contact/submissions';
import { MailError, mailboxes, resolveProvider } from '@/lib/mail';

export const runtime = 'nodejs';
/** Aucune mise en cache : chaque soumission doit atteindre le serveur. */
export const dynamic = 'force-dynamic';

const GENERIC_FAILURE =
    "L'envoi n'a pas abouti. Merci de nous appeler au 06 29 95 32 62, "
    + 'ou de nous écrire à contact@pfp-services.fr.';

/**
 * Les rejets anti-spam renvoient un succes apparent : signaler au robot ce qui
 * l'a trahi lui apprend a le contourner. Le message est journalise cote serveur.
 */
function silentAccept(reason: string, ip: string) {
    console.warn(`[contact] rejet anti-spam (${reason}) depuis ${ip}`);
    return NextResponse.json({ ok: true }, { status: 200 });
}

export async function POST(request: Request) {
    const ip = clientIp(request.headers);
    const userAgent = request.headers.get('user-agent');
    let submissionId: string | null = null;

    const markSubmission = async (update: Parameters<typeof updateContactSubmission>[1]) => {
        if (!submissionId) return;

        try {
            await updateContactSubmission(submissionId, update);
        } catch (error) {
            // La persistance ne doit pas empecher une demande legitime d'etre
            // transmise, mais sa panne doit rester visible dans les logs.
            console.error('[contact] échec de mise à jour BDD :', error);
        }
    };

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        try {
            submissionId = await createContactSubmission({ body: {}, ip, userAgent });
            await markSubmission({ status: 'invalid', reason: 'json-invalide' });
        } catch (error) {
            console.error('[contact] échec d’enregistrement BDD :', error);
        }
        return NextResponse.json(
            { ok: false, error: 'Requête illisible.' },
            { status: 400 },
        );
    }

    // Enregistrement avant tous les filtres : les soumissions spam restent
    // disponibles pour analyse sans jamais être envoyées à O365.
    try {
        submissionId = await createContactSubmission({ body, ip, userAgent });
    } catch (error) {
        console.error('[contact] échec d’enregistrement BDD :', error);
    }

    const honeypot = checkHoneypot(body.company);
    if (honeypot.spam) {
        await markSubmission({ status: 'spam', reason: honeypot.reason });
        return silentAccept(honeypot.reason, ip);
    }

    const timing = checkTiming(body.startedAt, Date.now());
    if (timing.spam) {
        await markSubmission({ status: 'spam', reason: timing.reason });
        return silentAccept(timing.reason, ip);
    }

    const validation = validateContact(body);
    if (!validation.ok) {
        // Volontairement avant la limite de debit : une faute de frappe sur son
        // email ne doit pas consommer le quota d'un visiteur legitime. Rejeter
        // une saisie invalide ne coute qu'un peu de calcul, aucun mail n'est emis.
        await markSubmission({ status: 'invalid', reason: `validation:${validation.field}` });
        return NextResponse.json(
            { ok: false, error: validation.reason, field: validation.field },
            { status: 422 },
        );
    }

    const content = scoreContent(validation.value);
    if (content.spam) {
        await markSubmission({ status: 'spam', reason: content.reason });
        return silentAccept(content.reason, ip);
    }

    // Dernier verrou avant la seule operation couteuse, l'envoi lui-meme.
    const limit = checkRateLimit(ip);
    if (!limit.allowed) {
        await markSubmission({ status: 'rate_limited', reason: 'limite-debit' });
        return NextResponse.json(
            {
                ok: false,
                error: 'Trop de demandes envoyées depuis cette connexion. Merci de réessayer plus tard, ou de nous appeler au 06 29 95 32 62.',
            },
            { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } },
        );
    }

    await markSubmission({ status: 'sending' });

    let providerName: string | undefined;
    try {
        const provider = resolveProvider();
        providerName = provider.name;
        const { sender, recipient } = mailboxes();

        await provider.send(
            buildContactMail({
                payload: validation.value,
                sender,
                recipient,
                receivedAt: new Date(),
            }),
        );

        await markSubmission({
            status: 'sent',
            provider: provider.name,
            sentAt: new Date(),
        });
        console.info(`[contact] demande transmise via ${provider.name} pour ${validation.value.email}`);
        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (error) {
        await markSubmission({
            status: 'failed',
            provider: providerName,
            errorMessage: error instanceof Error ? error.message : 'erreur-inconnue',
        });
        if (error instanceof MailError && error.configuration) {
            // Panne de configuration : secret expire, consentement manquant,
            // domaine non verifie. A rendre bruyant, sinon elle passe inapercue.
            console.error(`[contact] CONFIGURATION D'ENVOI INVALIDE : ${error.message}`);
        } else {
            console.error('[contact] échec de l’envoi :', error);
        }

        return NextResponse.json({ ok: false, error: GENERIC_FAILURE }, { status: 502 });
    }
}

/** Toute autre methode est refusee explicitement. */
export async function GET() {
    return NextResponse.json({ ok: false, error: 'Méthode non autorisée.' }, { status: 405 });
}
