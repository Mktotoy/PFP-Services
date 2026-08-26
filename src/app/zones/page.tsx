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
                    {/* Seine-et-Marne */}
                    <Link href="/zones/77-seine-et-marne" className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.deptCode}>77</span>
                            <h2>Seine-et-Marne</h2>
                        </div>
                    </Link>

                    {/* Essonne */}
                    <Link href="/zones/91-essonne" className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}>
                            <span className={styles.deptCode}>91</span>
                            <h2>Essonne</h2>
                        </div>
                    </Link>

                    {/* Yonne */}
                    <Link href="/zones/89-yonne" className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #b45309, #d97706)' }}>
                            <span className={styles.deptCode}>89</span>
                            <h2>Yonne</h2>
                        </div>
                    </Link>

                    {/* Loiret */}
                    <Link href="/zones/fontainebleau" className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #7c2d12, #ea580c)' }}>
                            <span className={styles.deptCode}>77300</span>
                            <h2>Fontainebleau</h2>
                        </div>
                    </Link>

                    <Link href="/zones/45-loiret" className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #047857, #10b981)' }}>
                            <span className={styles.deptCode}>45</span>
                            <h2>Loiret</h2>
                        </div>
                    </Link>
                </div>

                <div className={styles.callToAction}>
                    <h3>Vous habitez encore plus loin ?</h3>
                    <p>Nous intervenons quand même !</p>
                    <Link href="/contact" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                        Contactez-nous
                    </Link>
                </div>
            </section>
        </main>
    );
}
