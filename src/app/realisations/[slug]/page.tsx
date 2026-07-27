import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, CalendarDays } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import styles from '../realisations.module.css';
import Link from 'next/link';
import { BeforeAfter } from '@/components/blocks/BeforeAfter';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Cas Client Non Trouvé" };

    return {
        title: `${study.title} | Cas Client PFP Services`,
        description: study.summary,
    };
}

export default async function RealisationDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <section className={styles.detailHeader}>
                <div className="container">
                    <span className={styles.badge}>{study.category}</span>
                    <h1 className={styles.title} style={{ color: 'white', marginTop: '1rem' }}>{study.title}</h1>
                    <div className={styles.meta}>
                        <span style={{display:'inline-flex', alignItems:'center', gap:'4px'}}><MapPin size={14} /> {study.location}</span>
                        <span style={{display:'inline-flex', alignItems:'center', gap:'4px'}}><CalendarDays size={14} /> {study.date}</span>
                    </div>
                </div>
            </section>

            <div className={`container ${styles.detailContainer}`}>
                <div className={styles.detailContent}>
                    <section className={styles.section}>
                        <h2>Le Challenge</h2>
                        <p>{study.challenge}</p>
                    </section>

                    {study.beforeImage && study.afterImage && (
                        <section className={styles.section}>
                            <h2>Résultat Visuel</h2>
                            <BeforeAfter 
                                beforeImg={study.beforeImage} 
                                afterImg={study.afterImage} 
                                altText={study.title}
                                city={study.location}
                            />
                        </section>
                    )}

                    <section className={styles.section}>
                        <h2>Notre Intervention</h2>
                        <p>{study.solution}</p>
                        
                        <h2>Le Résultat</h2>
                        <p>{study.result}</p>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.linkingBox}>
                        <h4>Expertise Associée</h4>
                        <p>Besoin d'une intervention similaire ? Consultez nos services dédiés :</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {study.category === 'Toiture' && (
                                <>
                                    <Link href="/services/demoussage" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                                        Nos Solutions Hydrofuge
                                    </Link>
                                    <Link href="/zones/77-seine-et-marne" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                                        Interventions dans le 77
                                    </Link>
                                </>
                            )}
                            {study.category === 'Insectes' && (
                                <>
                                    <Link href="/services/guepes-frelons" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                                        Destruction de Nids
                                    </Link>
                                    <Link href="/zones/77-seine-et-marne" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                                        Dératiseur Seine-et-Marne
                                    </Link>
                                </>
                            )}
                            {study.category === 'Ramonage' && (
                                <Link href="/services/ramonage" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                                    Service de Ramonage
                                </Link>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
