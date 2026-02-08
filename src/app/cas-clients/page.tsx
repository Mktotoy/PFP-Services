import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';
import { caseStudies } from '@/data/caseStudies';

export const metadata: Metadata = {
    title: "Nos Réalisations & Cas Clients | PFP Services 77",
    description: "Découvrez nos interventions en photos et nos études de cas : dératisation, destruction de nids de frelons et ramonage en Seine-et-Marne.",
};

export default function CasClientsPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nos Cas Clients</h1>
                    <p className={styles.subtitle}>
                        Plongez au cœur de nos interventions. Découvrez comment nous résolvons
                        les problèmes de nuisibles de nos clients au quotidien.
                    </p>
                </div>
            </section>

            <section className="container section" style={{ paddingBottom: '4rem' }}>
                <div className={styles.grid}>
                    {caseStudies.map((study) => (
                        <Link href={`/cas-clients/${study.slug}`} key={study.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={study.mainImage} alt={study.title} />
                                <span className={styles.categoryBadge}>{study.category}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span>📍 {study.location}</span>
                                    <span>🗓️ {study.date}</span>
                                </div>
                                <h2 className={styles.cardTitle}>{study.title}</h2>
                                <p className={styles.summary}>{study.summary}</p>
                                <span className={styles.link}>Lire l'étude complète →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
