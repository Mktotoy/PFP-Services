"use client";

import { useState, useEffect } from 'react';
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
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <ReviewsSidebar isOpen={isReviewsOpen} onClose={() => setIsReviewsOpen(false)} />

            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <GoogleReviewsBadge onClick={() => setIsReviewsOpen(true)} />
                    </div>
                    <h1 className={styles.title}>
                        Vous avez besoin d'un service de{' '}
                        <span className={`${styles.highlight} ${styles.carousel} ${isAnimating ? styles.carouselOut : styles.carouselIn}`}>
                            {services[currentIndex]}
                        </span>
                        <br />
                        dans le 77 ou alentours ?
                    </h1>
                    <p className={styles.subtitle}>
                        Rats, Souris, Guêpes, Frelons... Ne laissez pas les nuisibles envahir votre quotidien.<br />
                        <strong>PFP Services</strong> intervient rapidement à Melun, Fontainebleau et tout le département.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Demander un devis gratuit
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
