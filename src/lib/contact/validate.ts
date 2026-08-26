/**
 * Validation serveur de la demande de devis.
 *
 * Tout est rejoue ici : la validation du navigateur sert le confort de saisie,
 * elle ne protege de rien puisqu'elle se contourne trivialement.
 */

export type ContactPayload = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export type ValidationResult =
    | { ok: true; value: ContactPayload }
    | { ok: false; field: string; reason: string };

/** Plafonds de longueur : au-dela, c'est du remplissage automatique. */
const LIMITS = {
    name: { min: 2, max: 80 },
    email: { min: 5, max: 160 },
    phone: { min: 6, max: 30 },
    message: { min: 10, max: 4000 },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
const PHONE_RE = /^[+0-9][0-9\s.\-()]{5,29}$/;

/** Caracteres de controle, hors retour a la ligne et tabulation. */
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;
/** Idem, retours a la ligne compris : pour tout champ devant tenir sur une ligne. */
const CONTROL_AND_BREAKS = /[\x00-\x1F\x7F]/g;

function readLine(source: Record<string, unknown>, key: string): string {
    const raw = source[key];
    if (typeof raw !== 'string') return '';
    // Un retour a la ligne dans un champ mono-ligne est le vecteur classique
    // d'injection d'en-tetes SMTP : on le retire au lieu de le rejeter.
    return raw.replace(CONTROL_AND_BREAKS, '').trim();
}

function readText(source: Record<string, unknown>, key: string): string {
    const raw = source[key];
    if (typeof raw !== 'string') return '';
    return raw.replace(CONTROL_CHARS, '').trim();
}

export function validateContact(source: Record<string, unknown>): ValidationResult {
    const name = readLine(source, 'name');
    const email = readLine(source, 'email').toLowerCase();
    const phone = readLine(source, 'phone');
    const message = readText(source, 'message');

    if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
        return { ok: false, field: 'name', reason: 'Merci d’indiquer votre nom.' };
    }

    if (email.length < LIMITS.email.min || email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
        return { ok: false, field: 'email', reason: 'Cette adresse email ne semble pas valide.' };
    }

    if (phone.length < LIMITS.phone.min || phone.length > LIMITS.phone.max || !PHONE_RE.test(phone)) {
        return { ok: false, field: 'phone', reason: 'Merci d’indiquer un numéro de téléphone joignable.' };
    }

    if (message.length < LIMITS.message.min) {
        return { ok: false, field: 'message', reason: 'Merci de décrire votre besoin en quelques mots.' };
    }

    if (message.length > LIMITS.message.max) {
        return { ok: false, field: 'message', reason: 'Votre message est trop long, merci de le résumer.' };
    }

    return { ok: true, value: { name, email, phone, message } };
}
