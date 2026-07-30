import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import styles from './realisations.module.css';

export const metadata: Metadata = {
    title: "Nos Réalisations | Dératisation & Démoussage 77 | PFP Services",
    alternates: { canonical: '/realisations' },
    description: "Découvrez nos dernières interventions en Seine-et-Marne : nettoyage de toiture, destruction de nids de frelons, dératisation. Preuve de notre savoir-faire.",
};

const FRENCH_MONTHS: Record<string, string> = {
    'Janvier': '01', 'Février': '02', 'Mars': '03', 'Avril': '04',
    'Mai': '05', 'Juin': '06', 'Juillet': '07', 'Août': '08',
    'Septembre': '09', 'Octobre': '10', 'Novembre': '11', 'Décembre': '12',
};

function parseFrenchDate(date: string): string | null {
    const [month, year] = date.split(' ');
    const mm = FRENCH_MONTHS[month];
    if (!mm || !year) return null;
    return `${year}-${mm}-01`;
}

const parsedDates = caseStudies
    .map((study) => parseFrenchDate(study.date))
    .filter((d): d is string => d !== null)
    .sort();

const latestDate = parsedDates[parsedDates.length - 1] ?? undefined;
const earliestDate = parsedDates[0] ?? undefined;

const realisationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://pfp-services.fr/realisations#collectionpage",
    url: "https://pfp-services.fr/realisations",
    name: "Nos Réalisations",
    isPartOf: { "@id": "https://pfp-services.fr/#organization" },
    ...(earliestDate ? { datePublished: earliestDate } : {}),
    ...(latestDate ? { dateModified: latestDate } : {}),
};

export default function RealisationsListingPage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realisationsJsonLd) }}
            />
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
