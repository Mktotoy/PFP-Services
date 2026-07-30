import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Démoussage & Nettoyage Toiture 77 | PFP Services",
    alternates: { canonical: '/services/demoussage' },
    description: "Expert en démoussage et nettoyage de toiture en Seine-et-Marne. Traitement anti-mousse, hydrofuge et nettoyage basse pression pour tuiles et ardoises.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Démoussage de Toiture",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Nettoyage de toiture, démoussage et traitement hydrofuge pour prolonger la durée de vie de votre couverture."
        }
    ]
};

export default function DemoussagePage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Services', url: 'https://pfp-services.fr/services' },
                    { name: 'Démoussage', url: 'https://pfp-services.fr/services/demoussage' },
                ]}
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nettoyage & démoussage toiture</h1>
                    <p className={styles.subtitle}>
                        Un toit propre, c'est une maison saine et durable.<br />
                        Redonnez de l'éclat à votre couverture et protégez-la contre les infiltrations.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/contact" className="btn btn-primary">Devis Gratuit</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Pourquoi démousser sa toiture ?</h2>
                        <img
                            src="/images/services/demoussage/camion-pfp-services-devant-maison.jpg"
                            alt="Camion PFP Services devant une maison à traiter"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

                        <p>
                            Avec le temps, les toitures subissent les assauts des intempéries, de l'humidité et de la pollution. Ces conditions favorisent l'apparition de mousses, algues, lichens, champignons.
                        </p>
                        <p><strong>Outre leur aspect inesthétique, un mauvais entretien de sa toiture peut provoquer :</strong></p>

                        <ul className={styles.list}>
                            <li>Des infiltrations d'eau.</li>
                            <li>Des dégradations de tuiles ou ardoises (éclatement par le gel).</li>
                            <li>Une perte d'étanchéité globale.</li>
                            <li>Des défauts d'isolation thermique.</li>
                            <li>Des dommages sur la charpente et les murs porteurs.</li>
                        </ul>

                        <div style={{ background: '#fef3c7', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #d97706', margin: '20px 0' }}>
                            Un bon entretien de votre toiture permet d'éviter des travaux de réparation lourds et coûteux, comme le remplacement total de votre couverture.
                        </div>

                        <h2 className={styles.heading}>Nos techniques de nettoyage</h2>
                        <p>Nous procédons en différentes étapes pour une rénovation complète :</p>

                        <ul className={styles.list}>
                            <li>Brossage manuel des mousses</li>
                            <li>Application d'un fongicide professionnel biocide pré-nettoyage</li>
                            <li>Pas d'utilisation de produits chlorés</li>
                            <li>Nettoyage basse ou moyenne pression selon la toiture</li>
                            <li>Application d'un hydrofuge professionnel post-traitement</li>
                            <li>Protection de l'environnement</li>
                        </ul>

                        <p>
                            Chaque toiture étant différente, nous adaptons nos méthodes et produits en fonction de la nature de la tuile (ardoise, tuiles de pays, tuiles plates, tuiles mécaniques ondulées…), de la quantité de mousse et lichens présents et de l'accessibilité.
                        </p>

                        <img
                            src="/images/services/demoussage/toiture-avant-apres-nettoyage.jpg"
                            alt="Toiture avant et après nettoyage et démoussage"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

                        <h2 className={styles.heading}>Gouttières, Façades & Panneaux Photovoltaïques</h2>
                        <p>
                            En complément du démoussage de toiture, nous intervenons sur l'ensemble de l'enveloppe de votre bâtiment :
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Gouttières</strong> : nettoyage toutes hauteurs et tous diamètres avec inspection caméra. Aspiration professionnelle des feuilles, branches, terre et débris, sans appui d'échelle sur la gouttière pour une sécurité maximale.</li>
                            <li><strong>Panneaux photovoltaïques</strong> : nettoyage à la brosse professionnelle dédiée, à l'eau déminéralisée avec rinçage, pour préserver le rendement des panneaux.</li>
                            <li><strong>Façades</strong> : traitement professionnel contre les algues rouges, algues vertes et traces noires.</li>
                        </ul>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Pourquoi nous choisir ?</h3>
                            <ul className={styles.checkList}>
                                <li>Intervention sécurisée (harnais, nacelle)</li>
                                <li>Produits professionnels certifiés</li>
                                <li>Respect de vos matériaux (pas de Karcher haute pression agressif)</li>
                                <li>Nettoyage de fin de chantier inclus (gouttières, sol)</li>
                            </ul>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Toiture</h3>
                            <p className={styles.price}>Sur Devis</p>
                            <p className={styles.priceNote}>Selon surface (m²) et état.</p>

                            <p style={{ marginTop: '15px' }}>
                                Chaque toiture est différente. Nous réalisons un diagnostic gratuit pour évaluer :
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.9rem', margin: '10px 0 10px 20px' }}>
                                <li>La surface à traiter</li>
                                <li>La difficulté d'accès</li>
                                <li>Le type de tuile/ardoise</li>
                            </ul>

                            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                Demander mon devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
