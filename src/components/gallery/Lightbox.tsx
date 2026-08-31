'use client';

import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.css';
import type { GalleryImage } from './galleryData';

type LightboxProps = {
    images: GalleryImage[];
    index: number;
    categoryLabel: string;
    onClose: () => void;
    onNavigate: (index: number) => void;
};

/** Distance minimale d'un glissement pour valoir changement de photo. */
const SWIPE_MIN_PX = 45;

export default function Lightbox({
    images,
    index,
    categoryLabel,
    onClose,
    onNavigate,
}: LightboxProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const touchStartX = useRef<number | null>(null);

    const image = images[index];
    const total = images.length;

    const goTo = useCallback(
        (next: number) => onNavigate((next + total) % total),
        [onNavigate, total],
    );

    // Navigation clavier. Le piege de focus est gere ici aussi : sans lui, la
    // tabulation sortirait du dialogue vers la page restee derriere.
    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') { onClose(); return; }
            if (event.key === 'ArrowRight') { goTo(index + 1); return; }
            if (event.key === 'ArrowLeft') { goTo(index - 1); return; }
            if (event.key !== 'Tab') return;

            const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button');
            if (!focusables?.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [goTo, index, onClose]);

    // Bloque le defilement de la page derriere le visualiseur.
    useEffect(() => {
        const precedent = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        return () => { document.body.style.overflow = precedent; };
    }, []);

    if (!image) return null;

    return createPortal(
        <div
            className={styles.backdrop}
            onClick={onClose}
            onTouchStart={(e) => { touchStartX.current = e.touches[0]?.clientX ?? null; }}
            onTouchEnd={(e) => {
                const depart = touchStartX.current;
                const arrivee = e.changedTouches[0]?.clientX;
                touchStartX.current = null;
                if (depart === null || arrivee === undefined) return;
                const delta = arrivee - depart;
                if (Math.abs(delta) < SWIPE_MIN_PX) return;
                goTo(index + (delta < 0 ? 1 : -1));
            }}
        >
            <div
                ref={dialogRef}
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-label={`Photo ${index + 1} sur ${total} : ${image.alt}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Barre haute : la fermeture est isolee au-dessus de la photo,
                    elle ne recouvre donc jamais l'image. */}
                <div className={styles.topBar}>
                    <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Fermer">
                        <X size={20} />
                    </button>
                </div>

                {/* key force le remplacement du noeud : sans lui, le navigateur
                    garde la photo precedente affichee pendant le chargement. */}
                <img key={image.src} src={image.src} alt={image.alt} className={styles.image} />

                {/* Barre basse : navigation et reperes, hors du cadre de la photo. */}
                <div className={styles.bottomBar}>
                    <button type="button" className={styles.nav} onClick={() => goTo(index - 1)}
                        disabled={total < 2} aria-label="Photo précédente">
                        <ChevronLeft size={24} />
                    </button>

                    <span className={styles.meta}>
                        <span className={styles.category}>{categoryLabel}</span>
                        <span className={styles.counter}>{index + 1} / {total}</span>
                    </span>

                    <button type="button" className={styles.nav} onClick={() => goTo(index + 1)}
                        disabled={total < 2} aria-label="Photo suivante">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
