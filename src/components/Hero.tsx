"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import GoogleReviewsBadge from './GoogleReviewsBadge';
import ReviewsSidebar from './ReviewsSidebar';

export default function Hero() {
    const [isReviewsOpen, setIsReviewsOpen] = useState(false);

    return (
        <section className={styles.hero}>
            <ReviewsSidebar isOpen={isReviewsOpen} onClose={() => setIsReviewsOpen(false)} />

            {/* Background overlay */}
            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <GoogleReviewsBadge onClick={() => setIsReviewsOpen(true)} />
                    </div>
                    <h1 className={styles.title}>
                        Vous avez besoin d'un service de <span className={styles.highlight}>Dératisation</span> <br />
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
