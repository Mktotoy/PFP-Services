/**
 * Envoi via Microsoft Graph, en authentification applicative.
 *
 * Prerequis cote locataire, sans lesquels l'envoi echoue :
 *   1. une inscription d'application DEDIEE au site, distincte des outils d'admin ;
 *   2. la permission Graph Mail.Send en autorisation d'APPLICATION, avec
 *      consentement administrateur accorde ;
 *   3. une ApplicationAccessPolicy en RestrictAccess limitant l'application a la
 *      seule boite expeditrice. Sans elle, Mail.Send autorise l'envoi au nom de
 *      n'importe quelle boite du locataire.
 *
 * Le script de mise en place et son controle : AIVault/scripts/pfp-mailflow/.
 */

import { MailError, requireEnv, type MailMessage, type MailProvider } from './types';

const GRAPH_BASE = 'https://graph.microsoft.com/v1.0';
/** Marge avant expiration : on renouvelle sans attendre la seconde limite. */
const TOKEN_MARGIN_MS = 60_000;

let cachedToken: { value: string; expiresAt: number } | null = null;

async function fetchToken(): Promise<string> {
    const now = Date.now();
    if (cachedToken && cachedToken.expiresAt > now + TOKEN_MARGIN_MS) {
        return cachedToken.value;
    }

    const tenantId = requireEnv('GRAPH_TENANT_ID');
    const body = new URLSearchParams({
        client_id: requireEnv('GRAPH_CLIENT_ID'),
        client_secret: requireEnv('GRAPH_CLIENT_SECRET'),
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
    });

    const response = await fetch(
        `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
        { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body },
    );

    const payload = await response.json().catch(() => null);

    if (!response.ok || !payload?.access_token) {
        const detail = payload?.error_description ?? `HTTP ${response.status}`;
        // Un secret expire tombe ici : c'est la panne la plus probable a terme.
        throw new MailError(`Jeton Graph refusé : ${detail}`, { configuration: true });
    }

    cachedToken = {
        value: payload.access_token,
        expiresAt: now + Number(payload.expires_in ?? 3600) * 1000,
    };

    return cachedToken.value;
}

function toRecipient(address: string) {
    return { emailAddress: { address } };
}

export const graphProvider: MailProvider = {
    name: 'microsoft-graph',

    async send(message: MailMessage): Promise<void> {
        const token = await fetchToken();

        const response = await fetch(
            `${GRAPH_BASE}/users/${encodeURIComponent(message.from)}/sendMail`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: {
                        subject: message.subject,
                        body: { contentType: 'HTML', content: message.html },
                        toRecipients: [toRecipient(message.to)],
                        replyTo: message.replyTo ? [toRecipient(message.replyTo)] : undefined,
                    },
                    // Trace consultable dans les Elements envoyes de la boite.
                    saveToSentItems: true,
                }),
            },
        );

        if (response.status === 202) return;

        const detail = await response.text().catch(() => '');

        if (response.status === 403) {
            throw new MailError(
                `Graph refuse l'envoi depuis ${message.from} (403). `
                + "Verifier le consentement administrateur sur Mail.Send et le perimetre "
                + `de l'ApplicationAccessPolicy. Detail : ${detail.slice(0, 300)}`,
                { configuration: true },
            );
        }

        throw new MailError(
            `Graph a refusé l'envoi (HTTP ${response.status}) : ${detail.slice(0, 300)}`,
        );
    },
};
