'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FieldName = 'name' | 'email' | 'phone' | 'message';

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [error, setError] = useState('');
    const [faultyField, setFaultyField] = useState<FieldName | null>(null);
    const startedAt = useRef<number>(0);
    const feedbackRef = useRef<HTMLParagraphElement>(null);

    // Horodatage pose au montage : sert au controle de duree cote serveur.
    useEffect(() => {
        startedAt.current = Date.now();
    }, []);

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            feedbackRef.current?.focus();
        }
    }, [status]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === 'sending') return;

        const form = event.currentTarget;
        const data = new FormData(form);

        setStatus('sending');
        setError('');
        setFaultyField(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    phone: data.get('phone'),
                    message: data.get('message'),
                    company: data.get('company'),
                    startedAt: startedAt.current,
                }),
            });

            const payload = await response.json().catch(() => null);

            if (response.ok && payload?.ok) {
                setStatus('success');
                form.reset();
                startedAt.current = Date.now();
                return;
            }

            setError(payload?.error ?? "L'envoi n'a pas abouti. Merci de nous appeler au 06 29 95 32 62.");
            setFaultyField((payload?.field as FieldName) ?? null);
            setStatus('error');
        } catch {
            // Coupure reseau : ne jamais annoncer un succes qu'on ne peut pas constater.
            setError('La connexion a été interrompue. Merci de réessayer, ou de nous appeler au 06 29 95 32 62.');
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.success} role="status">
                <p className={styles.successTitle}>Votre demande est bien partie.</p>
                <p>
                    Nous vous répondons sous 48 heures. Pour une intervention urgente,
                    appelez directement le <a href="tel:0629953262">06 29 95 32 62</a>.
                </p>
                <button type="button" className={styles.again} onClick={() => setStatus('idle')}>
                    Envoyer une autre demande
                </button>
            </div>
        );
    }

    const invalid = (field: FieldName) => (faultyField === field ? true : undefined);

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <label className={styles.label} htmlFor="nom">Votre nom</label>
            <input className={styles.input} id="nom" name="name" type="text"
                autoComplete="name" required aria-invalid={invalid('name')} />

            <label className={styles.label} htmlFor="email">Votre email</label>
            <input className={styles.input} id="email" name="email" type="email"
                autoComplete="email" required aria-invalid={invalid('email')} />

            <label className={styles.label} htmlFor="telephone">Votre téléphone</label>
            <input className={styles.input} id="telephone" name="phone" type="tel"
                autoComplete="tel" required aria-invalid={invalid('phone')} />

            <label className={styles.label} htmlFor="message">Votre message</label>
            <textarea className={styles.textarea} id="message" name="message" rows={5}
                required aria-invalid={invalid('message')} />

            {/* Champ piege : invisible a l'ecran, rempli par les robots. */}
            <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="company">Ne pas remplir ce champ</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </button>

            <p ref={feedbackRef} tabIndex={-1} role="alert" className={status === 'error' ? styles.error : styles.hidden}>
                {error}
            </p>

            <p className={styles.note}>
                Les informations saisies (nom, email, téléphone, message) servent uniquement à traiter
                votre demande et à vous répondre. Détail dans nos{' '}
                <Link href="/mentions-legales#donnees-personnelles">mentions légales</Link>.
            </p>
        </form>
    );
}
