/**
 * Limitation de debit par adresse IP.
 *
 * Volontairement en memoire : le site tourne sur une instance unique et le
 * volume attendu est de quelques demandes par semaine. Consequence assumee,
 * le compteur repart de zero a chaque redeploiement. Si le site passe un jour
 * sur plusieurs instances, il faudra un stockage partage.
 */

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
/** Garde-fou memoire : au-dela, on purge les entrees expirees. */
const MAX_TRACKED_IPS = 5_000;

const hits = new Map<string, number[]>();

function purge(now: number): void {
    for (const [ip, timestamps] of hits) {
        const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
        if (fresh.length === 0) {
            hits.delete(ip);
        } else {
            hits.set(ip, fresh);
        }
    }
}

export type RateLimitResult = {
    allowed: boolean;
    remaining: number;
    retryAfterSeconds: number;
};

export function checkRateLimit(ip: string, now: number = Date.now()): RateLimitResult {
    if (hits.size > MAX_TRACKED_IPS) purge(now);

    const previous = hits.get(ip) ?? [];
    const recent = previous.filter((t) => now - t < WINDOW_MS);

    if (recent.length >= MAX_PER_WINDOW) {
        const oldest = Math.min(...recent);
        const retryAfterSeconds = Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000));
        hits.set(ip, recent);
        return { allowed: false, remaining: 0, retryAfterSeconds };
    }

    recent.push(now);
    hits.set(ip, recent);

    return {
        allowed: true,
        remaining: MAX_PER_WINDOW - recent.length,
        retryAfterSeconds: 0,
    };
}

/**
 * Adresse du client. Derriere le proxy Replit, l'adresse reelle se trouve en
 * tete de x-forwarded-for ; la connexion directe donne toujours celle du proxy.
 */
export function clientIp(headers: Headers): string {
    const forwarded = headers.get('x-forwarded-for');
    if (forwarded) {
        const first = forwarded.split(',')[0]?.trim();
        if (first) return first;
    }
    return headers.get('x-real-ip')?.trim() || 'inconnue';
}

/** Reservee aux tests : remet le compteur a zero. */
export function resetRateLimit(): void {
    hits.clear();
}
