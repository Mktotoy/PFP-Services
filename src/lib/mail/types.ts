/**
 * Contrat commun à tous les fournisseurs d'envoi.
 *
 * L'objectif est que le choix du fournisseur (Microsoft Graph, Resend, autre)
 * reste une ligne de configuration et n'oblige jamais à toucher au formulaire
 * ni à la route API.
 */

export type MailMessage = {
    /** Adresse d'expédition. Doit appartenir au domaine, jamais celle du visiteur. */
    from: string;
    to: string;
    subject: string;
    /** Version texte, toujours renseignée : certains clients n'affichent que celle-ci. */
    text: string;
    html: string;
    /** Adresse du visiteur : répondre au mail répond directement au client. */
    replyTo?: string;
};

export interface MailProvider {
    /** Nom court, utilisé dans les journaux pour savoir qui a envoyé quoi. */
    readonly name: string;
    send(message: MailMessage): Promise<void>;
}

/**
 * Erreur d'envoi. `configuration` distingue les deux cas qui n'appellent pas
 * la même réaction : une variable d'environnement manquante se corrige au
 * déploiement, un refus du fournisseur se diagnostique dans ses journaux.
 */
export class MailError extends Error {
    readonly configuration: boolean;

    constructor(message: string, options: { configuration?: boolean; cause?: unknown } = {}) {
        super(message, { cause: options.cause });
        this.name = 'MailError';
        this.configuration = options.configuration ?? false;
    }
}

/** Lit une variable obligatoire et échoue explicitement si elle manque. */
export function requireEnv(key: string): string {
    const value = process.env[key];

    if (!value || !value.trim()) {
        throw new MailError(
            `Variable d'environnement ${key} absente ou vide.`,
            { configuration: true },
        );
    }

    return value.trim();
}
