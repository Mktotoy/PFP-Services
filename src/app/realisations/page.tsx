import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import styles from './realisations.module.css';

export const metadata: Metadata = {
    title: "Nos Réalisations | Dératisation & Démoussage 77 | PFP Services",
    alternates: { canonical: '/realisations' },
    description: "Découvrez nos dernières interventions en Seine-et-Marne : nettoyage de toiture, destruction de nids de frelons, dératisation. La preuve de notre savoir-faire en images.",
};

export default function RealisationsListingPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nos Dernières Interventions</h1>
                    <p className={styles.subtitle}>
                        Retrouvez en images nos travaux de démoussage, dératisation et désinsectisation dans le 77.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    {caseStudies.map((study) => (
                        <div key={study.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={study.mainImage} alt={study.title} className={styles.image} />
                                <span className={styles.badge}>{study.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.location}>{study.location}</span>
                                <h3>{study.title}</h3>
                                <p>{study.summary}</p>
                                <Link href={`/realisations/${study.slug}`} className="btn btn-outline" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', marginTop: 'auto' }}>
                                    Voir le cas client
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
