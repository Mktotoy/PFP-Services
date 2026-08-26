/**
 * Envoi via Resend.
 *
 * Alternative sans dependance au locataire Microsoft. Prerequis : le domaine
 * pfp-services.fr doit etre verifie dans Resend, ce qui suppose d'ajouter les
 * enregistrements DNS fournis chez OVH.
 *
 * A noter : le mail n'apparait pas dans les Elements envoyes de contact@,
 * puisqu'il ne transite pas par la messagerie Microsoft.
 */

import { MailError, requireEnv, type MailMessage, type MailProvider } from './types';

const ENDPOINT = 'https://api.resend.com/emails';

export const resendProvider: MailProvider = {
    name: 'resend',

    async send(message: MailMessage): Promise<void> {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${requireEnv('RESEND_API_KEY')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: message.from,
                to: [message.to],
                subject: message.subject,
                text: message.text,
                html: message.html,
                reply_to: message.replyTo,
            }),
        });

        if (response.ok) return;

        const detail = await response.text().catch(() => '');

        // 403 et 422 signalent presque toujours un domaine non verifie.
        const configuration = response.status === 401
            || response.status === 403
            || response.status === 422;

        throw new MailError(
            `Resend a refusé l'envoi (HTTP ${response.status}) : ${detail.slice(0, 300)}`,
            { configuration },
        );
    },
};
