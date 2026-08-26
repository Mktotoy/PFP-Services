/**
 * Mise en forme du mail recapitulatif envoye a contact@.
 *
 * Regle non negociable : l'expediteur est toujours une adresse du domaine.
 * Mettre l'adresse du visiteur en expediteur ferait echouer SPF (le domaine
 * publie -all) et DMARC. Le visiteur va en replyTo, ce qui permet de repondre
 * directement depuis Outlook.
 */

import type { ContactPayload } from './validate';
import type { MailMessage } from '../mail/types';

const ESCAPES: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (char) => ESCAPES[char] ?? char);
}

function toParagraphs(message: string): string {
    return message
        .split(/\n{2,}/)
        .map((block) => `<p style="margin:0 0 12px">${escapeHtml(block).replace(/\n/g, '<br />')}</p>`)
        .join('');
}

export type BuildOptions = {
    payload: ContactPayload;
    sender: string;
    recipient: string;
    receivedAt: Date;
};

export function buildContactMail({ payload, sender, recipient, receivedAt }: BuildOptions): MailMessage {
    const stamp = receivedAt.toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Paris',
    });

    // Prefixe stable : permet une regle Outlook et le tri d'une vague de spam.
    const subject = `[Site] Demande de devis : ${payload.name}`;

    const text = [
        'Nouvelle demande de devis envoyee depuis le site pfp-services.fr.',
        '',
        `Nom       : ${payload.name}`,
        `Email     : ${payload.email}`,
        `Telephone : ${payload.phone}`,
        `Recue le  : ${stamp}`,
        '',
        'Message :',
        payload.message,
        '',
        'Repondre a ce mail ecrit directement au client.',
    ].join('\n');

    const html = `
<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#1c221e">
  <p style="margin:0 0 16px"><strong>Nouvelle demande de devis</strong> envoyée depuis le site.</p>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:18px">
    <tr><td style="padding:4px 16px 4px 0;color:#59635c">Nom</td><td style="padding:4px 0"><strong>${escapeHtml(payload.name)}</strong></td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#59635c">Email</td><td style="padding:4px 0"><a href="mailto:${encodeURI(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#59635c">Téléphone</td><td style="padding:4px 0"><a href="tel:${encodeURI(payload.phone.replace(/\s/g, ''))}">${escapeHtml(payload.phone)}</a></td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#59635c">Reçue le</td><td style="padding:4px 0">${escapeHtml(stamp)}</td></tr>
  </table>
  <div style="border-left:3px solid #046d17;padding:2px 0 2px 14px;margin-bottom:18px">
    ${toParagraphs(payload.message)}
  </div>
  <p style="margin:0;color:#59635c;font-size:13px">Répondre à ce message écrit directement au client.</p>
</div>`.trim();

    return {
        from: sender,
        to: recipient,
        subject,
        text,
        html,
        replyTo: payload.email,
    };
}
