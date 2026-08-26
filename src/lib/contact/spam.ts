/**
 * Filtrage anti-spam du formulaire de devis.
 *
 * Le mail produit part de contact@ vers contact@, donc en interne au locataire :
 * Exchange Online Protection ne l'inspecte pratiquement pas. Le filtrage doit
 * donc avoir lieu ici, pas dans la messagerie.
 *
 * Aucune couche n'est infaillible prise isolement ; c'est leur cumul qui tient.
 */

import type { ContactPayload } from './validate';

/** Duree minimale de remplissage plausible pour un humain. */
const MIN_FILL_MS = 3_000;
/** Au-dela, le formulaire a ete laisse ouvert : on ne rejette pas pour autant. */
const MAX_FILL_MS = 12 * 60 * 60 * 1000;

const SCORE_LIMIT = 4;

const SPAM_TERMS = [
    'seo', 'backlink', 'referencement naturel', 'crypto', 'bitcoin', 'forex',
    'casino', 'viagra', 'loan', 'investment opportunity', 'binary option',
    'guest post', 'link building', 'rank higher', 'dear sir or madam',
];

export type SpamVerdict =
    | { spam: false }
    | { spam: true; reason: string };

/**
 * Champ piege : invisible pour l'humain, present dans le HTML. Un robot qui
 * remplit tous les champs qu'il trouve se signale de lui-meme.
 */
export function checkHoneypot(value: unknown): SpamVerdict {
    if (typeof value === 'string' && value.trim().length > 0) {
        return { spam: true, reason: 'honeypot' };
    }
    return { spam: false };
}

/**
 * Controle de duree. L'horodatage vient du client, donc il est falsifiable :
 * cette couche ecarte les robots naifs, pas un attaquant motive.
 */
export function checkTiming(startedAt: unknown, now: number): SpamVerdict {
    const started = typeof startedAt === 'number' ? startedAt : Number(startedAt);

    if (!Number.isFinite(started) || started <= 0) {
        return { spam: true, reason: 'timing-absent' };
    }

    const elapsed = now - started;

    if (elapsed < MIN_FILL_MS) {
        return { spam: true, reason: `timing-trop-rapide:${elapsed}ms` };
    }

    if (elapsed > MAX_FILL_MS) {
        return { spam: true, reason: 'timing-perime' };
    }

    return { spam: false };
}

function countLinks(text: string): number {
    return (text.match(/https?:\/\/|www\.|\[url|<a\s/gi) ?? []).length;
}

/** Proportion de caracteres hors alphabet latin, chiffres et ponctuation courante. */
function nonLatinRatio(text: string): number {
    const letters = text.replace(/[^\p{L}]/gu, '');
    if (letters.length < 20) return 0;
    const nonLatin = letters.replace(/[\p{Script=Latin}]/gu, '');
    return nonLatin.length / letters.length;
}

/**
 * Score de contenu. Une demande de devis de couverture ne contient pas cinq
 * liens ni un bloc en cyrillique ; chaque signal ajoute des points.
 */
export function scoreContent(payload: ContactPayload): SpamVerdict {
    const haystack = `${payload.name} ${payload.message}`.toLowerCase();
    const signals: string[] = [];
    let score = 0;

    const links = countLinks(payload.message);
    if (links >= 1) {
        score += links >= 3 ? 4 : 2;
        signals.push(`liens:${links}`);
    }

    const terms = SPAM_TERMS.filter((term) => haystack.includes(term));
    if (terms.length > 0) {
        score += terms.length * 2;
        signals.push(`termes:${terms.join(',')}`);
    }

    if (nonLatinRatio(payload.message) > 0.3) {
        score += 4;
        signals.push('alphabet-non-latin');
    }

    if (/\[url|\[\/url|<a\s+href/i.test(payload.message)) {
        score += 3;
        signals.push('balises-lien');
    }

    // Un nom qui contient une URL n'est pas un nom.
    if (countLinks(payload.name) > 0) {
        score += 4;
        signals.push('lien-dans-nom');
    }

    if (score >= SCORE_LIMIT) {
        return { spam: true, reason: `contenu(${score}):${signals.join('|')}` };
    }

    return { spam: false };
}
