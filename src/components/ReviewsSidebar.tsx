"use client";

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ReviewsSidebar.module.css';
import { googleReviews } from '@/data/reviews';
import StarRating from './StarRating';

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=PFP+Services+Melun+avis#lrd=0x47e5fa2b234ef9fd:0x6f699042c8d28e75,1";

interface ReviewsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReviewsSidebar({ isOpen, onClose }: ReviewsSidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} aria-hidden="true" onClick={onClose} />
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} ref={sidebarRef}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span style={{ color: '#4285F4' }}>G</span> Avis Clients
                    </div>
                    <button onClick={onClose} className={styles.closeBtn} aria-label="Fermer">
                        ✕
                    </button>
                </div>

                <div className={styles.reviewsList}>
                    {googleReviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.author}>
                                    <div className={styles.authorIcon}>{review.author.charAt(0)}</div>
                                    {review.author}
                                </div>
                                <span className={styles.date}>{review.date}</span>
                            </div>
                            <div className={styles.stars}>
                                <StarRating rating={review.rating} size={14} />
                            </div>
                            <p className={styles.text}>{review.text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: '0.9rem', marginBottom: '10px' }}
                    >
                        Voir tous les avis Google
                    </a>
                    <a
                        href="https://g.page/r/CdERc9GXbKp-EBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ width: '100%', fontSize: '0.9rem' }}
                    >
                        Écrire un avis
                    </a>
                </div>
            </div>
        </>,
        document.body
    );
}
