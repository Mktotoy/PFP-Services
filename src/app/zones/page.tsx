import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Zones d'intervention 77-91-89-45 | PFP Services",
    alternates: { canonical: '/zones' },
    description: "Intervention rapide pour dératisation et lutte anti-nuisibles en Seine-et-Marne, Essonne, Yonne et Loiret. Devis gratuit, déplacement sous 24h.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Zone d'intervention PFP Services",
    "geo": {
        "@type": "GeoShape",
        "region": ["Seine-et-Marne", "Essonne", "Yonne", "Loiret"]
    },
    "containsPlace": [
        { "@type": "City", "name": "Melun" },
        { "@type": "City", "name": "Fontainebleau" },
        { "@type": "City", "name": "Montereau-Fault-Yonne" },
        { "@type": "City", "name": "Nemours" }
    ]
};

type Departement = {
    code: string;
    slug: string;
    name: string;
    cities: string;
};

/*
 * Departements uniquement. Fontainebleau est une ville, pas un departement :
 * sa carte a ete retiree de cette grille sur demande du client. La page
 * /zones/fontainebleau existe toujours et reste dans le sitemap, mais elle n'a
 * plus aucun lien entrant depuis le site ; le flechage des zones sera repris
 * ulterieurement.
 * Villes reprises des metadonnees de chaque page de zone (source interne).
 */
const DEPARTEMENTS: Departement[] = [
    { code: '77', slug: '77-seine-et-marne', name: 'Seine-et-Marne', cities: 'Melun, Meaux, Chelles' },
    { code: '91', slug: '91-essonne', name: 'Essonne', cities: 'Évry, Corbeil-Essonnes, Étampes' },
    { code: '89', slug: '89-yonne', name: 'Yonne', cities: 'Sens, Auxerre' },
    { code: '45', slug: '45-loiret', name: 'Loiret', cities: 'Montargis, Gien' },
];

export default function ZonesPage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nos zones d&rsquo;intervention</h1>
                    <p className={styles.subtitle}>
                        Sud Seine-et-Marne (77), Essonne (91), Yonne (89) et Loiret (45)
                    </p>
                </div>
            </div>

            <section className="container section">
                <div className={styles.intro}>
                    <p>
                        Nous intervenons rapidement pour toute opération de démoussage, nettoyage de toiture,
                        dératisation, désinsectisation ou traitement anti-nuisibles, à domicile ou en entreprise.
                    </p>
                    <p>
                        Basés en Seine-et-Marne, nous couvrons un large secteur incluant l&rsquo;ensemble des
                        départements voisins tels que l&rsquo;Essonne, le Loiret et l&rsquo;Yonne.
                    </p>
                </div>

                <div className={styles.grid}>
                    {DEPARTEMENTS.map((dept) => (
                        <Link
                            key={dept.slug}
                            href={`/zones/${dept.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.deptCode}>{dept.code}</span>
                                <div className={styles.cardTitles}>
                                    <h2 className={styles.deptName}>{dept.name}</h2>
                                    <p className={styles.deptCities}>{dept.cities}</p>
                                </div>
                            </div>
                            <span className={styles.cardAction}>
                                En savoir +
                                <span className={styles.cardArrow} aria-hidden="true">&rarr;</span>
                            </span>
                        </Link>
                    ))}
                </div>

                <div className={styles.callToAction}>
                    <h3>Vous habitez encore plus loin ?</h3>
                    <p>Nous intervenons quand même !</p>
                    <Link href="/contact" className={`btn btn-secondary ${styles.ctaButton}`}>
                        Contactez-nous
                    </Link>
                </div>
            </section>
        </main>
    );
}
