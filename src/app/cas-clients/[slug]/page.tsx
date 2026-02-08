import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from '../page.module.css'; // Reusing styles from parent or keep separate
import { caseStudies } from '@/data/caseStudies';

// Need to define generateStaticParams for static export if needed, 
// but for now standard dynamic route is fine.

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const study = caseStudies.find(s => s.slug === params.slug);
    if (!study) return { title: 'Cas Client Non Trouvé' };

    return {
        title: `${study.title} | Cas Client PFP Services`,
        description: study.summary,
    };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const study = caseStudies.find(s => s.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <div className={styles.detailContainer}>
                <Link href="/cas-clients" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '20px', display: 'inline-block' }}>
                    ← Retour aux réalisations
                </Link>

                <header className={styles.detailHeader}>
                    <div className={styles.detailMeta}>
                        <span>{study.category}</span>
                        <span>•</span>
                        <span>{study.location}</span>
                        <span>•</span>
                        <span>{study.date}</span>
                    </div>
                    <h1 className={styles.detailTitle}>{study.title}</h1>
                </header>

                <img
                    src={study.mainImage}
                    alt={study.title}
                    style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '40px', boxShadow: 'var(--shadow-lg)' }}
                />

                <div className={styles.text}>
                    <h2 className={styles.sectionTitle}>Le Problème</h2>
                    <p>{study.challenge}</p>

                    <h2 className={styles.sectionTitle}>La Solution PFP Services</h2>
                    <p>{study.solution}</p>

                    {study.beforeImage && study.afterImage && (
                        <div className={styles.comparison}>
                            <div className={styles.compImage}>
                                <img src={study.beforeImage} alt="Avant intervention" />
                                <span className={styles.label}>AVANT</span>
                            </div>
                            <div className={styles.compImage}>
                                <img src={study.afterImage} alt="Après intervention" />
                                <span className={styles.label}>APRÈS</span>
                            </div>
                        </div>
                    )}

                    <h2 className={styles.sectionTitle}>Le Résultat</h2>
                    <p>{study.result}</p>
                </div>

                <div style={{ marginTop: '60px', padding: '30px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '15px' }}>Vous rencontrez un problème similaire ?</h3>
                    <Link href="/contact" className="btn btn-primary">
                        Demander un devis gratuit
                    </Link>
                </div>
            </div>
        </main>
    );
}
