import { Metadata } from 'next';
import styles from './page.module.css';
import ServiceZoneCheck from '@/components/ServiceZoneCheck';
import InteractiveMap from '@/components/InteractiveMap';

export const metadata: Metadata = {
    title: "Zones d'Intervention | Dératisation 77, 91, 89, 45",
    alternates: { canonical: '/zones' },
    description: "Intervention rapide pour dératisation et nuisibles en Seine-et-Marne (Melun, Fontainebleau), Essonne, Yonne et Loiret.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Zone d'Intervention PFP Services",
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
                    <h1 className={styles.title}>Nos Zones d'Intervention</h1>
                    <p className={styles.subtitle}>
                        Sud Seine-et-Marne (77), Essonne (91), Yonne (89) et Loiret (45)
                    </p>
                </div>
            </div>

            <section className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
                    <div>
                        <ServiceZoneCheck />
                    </div>
                    <div>
                        <InteractiveMap />
                    </div>
                </div>

            </section>

            <section className="container section">
                <div className={styles.intro}>
                    <p>
                        Nous intervenons rapidement pour toute opération de <strong>dératisation</strong>,
                        <strong> désinsectisation</strong> ou traitement anti-nuisibles à domicile ou en entreprise.
                    </p>
                    <p>
                        Basés en Seine-et-Marne, nous couvrons un large secteur incluant les départements voisins
                        de l’Essonne, du Loiret et de l’Yonne.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Seine-et-Marne */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.deptCode}>77</span>
                            <h2>Seine-et-Marne</h2>
                        </div>
                        <div className={styles.cities}>
                            <span className={styles.city}>Melun</span>
                            <span className={styles.city}>Fontainebleau</span>
                            <span className={styles.city}>Montereau-Fault-Yonne</span>
                            <span className={styles.city}>Nemours</span>
                            <span className={styles.city}>Meaux</span>
                            <span className={styles.city}>Chelles</span>
                            <span className={styles.city}>Pontault-Combault</span>
                            <span className={styles.city}>Nangis</span>
                            <span className={styles.city}>Rozay-en-Brie</span>
                            <span className={styles.city}>Torcy</span>
                            <span className={styles.city}>Barbizon</span>
                            <span className={styles.city}>Cély</span>
                            <span className={styles.city}>Dammarie-les-Lys</span>
                        </div>
                    </div>

                    {/* Essonne */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}>
                            <span className={styles.deptCode}>91</span>
                            <h2>Essonne</h2>
                        </div>
                        <div className={styles.cities}>
                            <span className={styles.city}>Milly-la-Forêt</span>
                            <span className={styles.city}>La Ferté-Alais</span>
                            <span className={styles.city}>Dourdan</span>
                            <span className={styles.city}>Étampes</span>
                            <span className={styles.city}>Mennecy</span>
                        </div>
                    </div>

                    {/* Yonne */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #b45309, #d97706)' }}>
                            <span className={styles.deptCode}>89</span>
                            <h2>Yonne</h2>
                        </div>
                        <div className={styles.cities}>
                            <span className={styles.city}>Pont-sur-Yonne</span>
                            <span className={styles.city}>Courtenay</span>
                            <span className={styles.city}>Sens</span>
                            <span className={styles.city}>Villeneuve-sur-Yonne</span>
                        </div>
                    </div>

                    {/* Loiret */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader} style={{ background: 'linear-gradient(135deg, #047857, #10b981)' }}>
                            <span className={styles.deptCode}>45</span>
                            <h2>Loiret</h2>
                        </div>
                        <div className={styles.cities}>
                            <span className={styles.city}>Corbeilles-en-Gâtinais</span>
                            <span className={styles.city}>Bellegarde</span>
                            <span className={styles.city}>Montargis</span>
                            <span className={styles.city}>Ferrières-en-Gâtinais</span>
                        </div>
                    </div>
                </div>

                <div className={styles.callToAction}>
                    <h3>Votre ville n'est pas dans la liste ?</h3>
                    <p>Nous intervenons probablement quand même si vous êtes dans un rayon proche.</p>
                    <a href="tel:0629953262" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Vérifier mon éligibilité : 06 29 95 32 62
                    </a>
                </div>
            </section>
        </main>
    );
}
