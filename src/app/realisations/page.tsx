import { Metadata } from 'next';
import Link from 'next/link';
import { realisationsSections } from '@/data/services-realisations';
import { BeforeAfter } from '@/components/blocks/BeforeAfter';
import styles from './realisations.module.css';

export const metadata: Metadata = {
    title: "Nos Réalisations | Dératisation & Démoussage 77 | PFP Services",
    description: "Découvrez nos dernières interventions en Seine-et-Marne, regroupées par service : nettoyage de toiture, destruction de nids de frelons, ramonage, rongeurs, chenilles et taupes.",
};

export default function RealisationsListingPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nos Dernières Interventions</h1>
                    <p className={styles.subtitle}>
                        Retrouvez en images nos travaux de démoussage, dératisation et désinsectisation dans le 77, classés par service.
                    </p>
                </div>
            </section>

            {realisationsSections.map((sectionData) => (
                <section key={sectionData.slug} className={`container section ${styles.serviceSection}`}>
                    <div className={styles.serviceHeader}>
                        <h2>{sectionData.title}</h2>
                        <p>{sectionData.intro}</p>
                        {sectionData.serviceHref && (
                            <Link href={sectionData.serviceHref} className="btn btn-outline" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                Voir la prestation
                            </Link>
                        )}
                    </div>

                    {sectionData.beforeAfter?.map((pair, index) => (
                        <div key={index} className={styles.beforeAfterWrapper}>
                            <BeforeAfter
                                beforeImg={pair.beforeImg}
                                afterImg={pair.afterImg}
                                altText={pair.altText}
                                city={pair.city}
                            />
                        </div>
                    ))}

                    {sectionData.example && (
                        <div className={styles.exampleBox}>
                            <span className={styles.exampleMeta}>{sectionData.example.location} · {sectionData.example.date}</span>
                            <p>{sectionData.example.text}</p>
                        </div>
                    )}

                    <div className={styles.photoGrid}>
                        {sectionData.photos.map((photo) => (
                            <div key={photo.src} className={styles.photoCard}>
                                <img src={photo.src} alt={photo.alt} className={styles.photoImage} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}
