"use client";

import { useState, useEffect } from 'react';
import { BadgeCheck, Leaf } from 'lucide-react';
import Link from 'next/link';
import styles from './Hero.module.css';
import GoogleReviewsBadge from './GoogleReviewsBadge';
import ReviewsSidebar from './ReviewsSidebar';

const services = [
    "Dératisation",
    "Désinsectisation",
    "Démoussage",
    "Ramonage",
    "Anti-Nuisibles",
    "Anti-Frelons",
];

export default function Hero() {
    const [isReviewsOpen, setIsReviewsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % services.length);
                setIsAnimating(false);
            }, 400);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <ReviewsSidebar isOpen={isReviewsOpen} onClose={() => setIsReviewsOpen(false)} />

            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}><BadgeCheck size={16} /></span>
                            <span>Certifié Ramonage</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustIcon}><Leaf size={16} /></span>
                            <span>Certibiocide</span>
                        </div>
                        <GoogleReviewsBadge onClick={() => setIsReviewsOpen(true)} />
                    </div>
                    <h1 className={styles.title}>
                        Expert en{' '}
                        <span className={`${styles.highlight} ${styles.carousel} ${isAnimating ? styles.carouselOut : styles.carouselIn}`}>
                            {services[currentIndex]}
                        </span>
                        <br />
                        dans le 77, 91 & Sud Ile-de-France
                    </h1>
                    <p className={styles.subtitle}>
                        Démoussage de toiture, Hydrofuge & Dératisation professionnelle.<br />
                        <strong>PFP Services</strong> : l'expertise au service de votre habitat et de votre santé.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Nos Services Toiture
                        </Link>
                        <Link href="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', marginLeft: '1rem', color: 'white', border: '2px solid white' }}>
                            Nos Services Nuisibles
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
