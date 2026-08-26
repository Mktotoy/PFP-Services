/**
 * Selection du fournisseur d'envoi.
 *
 * Changer de fournisseur se fait par la variable MAIL_PROVIDER, sans toucher
 * ni au formulaire ni a la route API.
 *
 * Regle centrale de ce fichier : ne JAMAIS faire semblant d'avoir envoye.
 * Le formulaire precedent affichait une confirmation sans rien emettre, et
 * c'est exactement le defaut qu'on corrige ici. Une configuration incomplete
 * doit produire une erreur visible, pas un succes silencieux.
 */

import { MailError, requireEnv, type MailMessage, type MailProvider } from './types';
import { graphProvider } from './graph';
import { resendProvider } from './resend';

/**
 * Fournisseur de developpement : ecrit le mail dans la console au lieu de
 * l'emettre. Refuse de fonctionner en production, sans quoi il redeviendrait
 * le faux succes qu'on vient de supprimer.
 */
const consoleProvider: MailProvider = {
    name: 'console',

    async send(message: MailMessage): Promise<void> {
        if (process.env.NODE_ENV === 'production') {
            throw new MailError(
                "MAIL_PROVIDER=console est interdit en production : aucun mail ne serait envoyé.",
                { configuration: true },
            );
        }

        console.info(
            `[mail:console] ${message.subject}\n`
            + `  de       : ${message.from}\n`
            + `  a        : ${message.to}\n`
            + `  repondre : ${message.replyTo ?? '(aucun)'}\n`
            + `${message.text}\n`,
        );
    },
};

const PROVIDERS: Record<string, MailProvider> = {
    graph: graphProvider,
    resend: resendProvider,
    console: consoleProvider,
};

export function resolveProvider(): MailProvider {
    const requested = (process.env.MAIL_PROVIDER ?? '').trim().toLowerCase();

    if (!requested) {
        throw new MailError(
            `MAIL_PROVIDER n'est pas défini. Valeurs acceptées : ${Object.keys(PROVIDERS).join(', ')}.`,
            { configuration: true },
        );
    }

    const provider = PROVIDERS[requested];

    if (!provider) {
        throw new MailError(
            `MAIL_PROVIDER="${requested}" inconnu. Valeurs acceptées : ${Object.keys(PROVIDERS).join(', ')}.`,
            { configuration: true },
        );
    }

    return provider;
}

/** Adresses d'expedition et de reception, lues au moment de l'envoi. */
export function mailboxes(): { sender: string; recipient: string } {
    const sender = requireEnv('CONTACT_SENDER');
    return {
        sender,
        recipient: (process.env.CONTACT_RECIPIENT ?? '').trim() || sender,
    };
}

export { MailError };
export type { MailMessage, MailProvider };
