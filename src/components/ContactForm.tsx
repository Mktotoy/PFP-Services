'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'success' | 'error';

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const phone = String(data.get('phone') || '').trim();
        const message = String(data.get('message') || '').trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !phone || !message) {
            setError('Merci de remplir tous les champs.');
            setStatus('error');
            return;
        }
        if (!emailRegex.test(email)) {
            setError('Merci de renseigner une adresse email valide.');
            setStatus('error');
            return;
        }

        // Pas de backend d'envoi configuré pour le moment : formulaire visuel
        // avec validation. Utiliser le mail ou le téléphone pour un contact direct.
        setError('');
        setStatus('success');
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--spacing-lg)' }}>
            <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-light, #ccc)' }}
            />
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-light, #ccc)' }}
            />
            <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                required
                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-light, #ccc)' }}
            />
            <textarea
                name="message"
                placeholder="Votre message"
                required
                rows={4}
                style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-light, #ccc)', resize: 'vertical' }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem', fontSize: '1rem' }}>
                Envoyer ma demande
            </button>
            {status === 'success' && (
                <p style={{ color: 'green', margin: 0 }}>
                    Merci, votre demande a bien été prise en compte. Pour une réponse plus rapide, n&apos;hésitez pas à nous appeler ou nous écrire directement.
                </p>
            )}
            {status === 'error' && (
                <p style={{ color: 'red', margin: 0 }}>{error}</p>
            )}
        </form>
    );
}
