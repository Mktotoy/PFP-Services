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
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Pourquoi démousser sa toiture ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La mousse rend les tuiles poreuses et retient l'humidité, ce qui peut causer des fissures en cas de gel (gélifraction) et des infiltrations d'eau à long terme."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand faut-il nettoyer sa toiture ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il est recommandé de faire un contrôle et un entretien une fois par an. Le traitement hydrofuge permet ensuite d'espacer les nettoyages de plusieurs années."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle technique utilisez-vous ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nous utilisons un grattage manuel pour le gros de la mousse, suivi d'un nettoyage basse pression pour ne pas abîmer le support, et finissons par l'application d'un fongicide et d'un hydrofuge."
                    }
                }
            ]
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
                    <h1 className={styles.title}>Nettoyage & Démoussage Toiture</h1>
                    <p className={styles.subtitle}>
                        Un toit propre, c'est une maison saine et durable.<br />
                        Redonnez de l'éclat à votre couverture et protégez-la contre les infiltrations.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Devis Gratuit : 06 29 95 32 62</a>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Pourquoi démousser sa toiture ?</h2>
                        <img
                            src="/images/services/demoussage/toiture-mousse.jpg"
                            alt="Toiture envahie par la mousse"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

                        <p>
                            Avec le temps, les toitures subissent les assauts des intempéries, de l'humidité et de la pollution. Ces conditions favorisent l'apparition de mousses, algues, lichens, voire champignons.
                        </p>
                        <p><strong>Outre leur aspect inesthétique, ces végétations peuvent provoquer :</strong></p>

                        <ul className={styles.list}>
                            <li>Des infiltrations d'eau (les tuiles deviennent poreuses).</li>
                            <li>Des dégradations de tuiles ou ardoises (éclatement par le gel).</li>
                            <li>Une perte d'étanchéité globale.</li>
                            <li>Des défauts d'isolation thermique.</li>
                            <li>Des dommages sur la charpente et les murs porteurs.</li>
                        </ul>

                        <div style={{ background: '#fef3c7', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #d97706', margin: '20px 0' }}>
                            <strong>Important :</strong> Un démoussage régulier préserve l'intégrité de votre toiture et permet d'éviter des travaux de réparation lourds et coûteux (remplacement de couverture).
                        </div>

                        <h2 className={styles.heading}>Nos techniques de nettoyage</h2>
                        <p>
                            Pour éviter l'apparition de mousses qui peuvent endommager durablement les matériaux de couverture (tuiles, ardoises, fibrociment), nous recommandons un contrôle annuel.
                        </p>
                        <p>Nous procédons en différentes étapes pour une rénovation complète :</p>

                        <ol style={{ marginLeft: '20px', marginBottom: '20px', lineHeight: '1.8' }}>
                            <li><strong>Brossage mécanique</strong> des tuiles pour éliminer l'accumulation de mousse.</li>
                            <li>Enlèvement soigneux des résidus de mousse et nettoyage des gouttières.</li>
                            <li><strong>Nettoyage basse pression</strong> pour éliminer les derniers débris et lichens sans abîmer le support.</li>
                            <li>Pulvérisation d'un <strong>fongicide professionnel</strong> (traitement curatif).</li>
                            <li>Application d'un <strong>traitement hydrofuge</strong> (imprégnateur) pour protéger durablement la toiture.</li>
                        </ol>

                        <img
                            src="/images/services/demoussage/toiture-nettoyage.jpg"
                            alt="Nettoyage de toiture en cours"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

                        <h2 className={styles.heading}>Le Traitement Hydrofuge</h2>
                        <p>
                            Une fois la mousse éliminée, l'application d'un traitement hydrofuge permet de repousser l'eau (effet perlant), limiter les infiltrations, ralentir le retour des végétaux et renforcer l'étanchéité de la toiture.
                        </p>
                        <p>
                            Cette opération est essentielle si vous souhaitez <strong>espacer les interventions</strong> et améliorer la résistance de vos matériaux face au gel, à la pluie ou à la pollution.
                        </p>

                        <div className={styles.faqSection}>
                            <h2 className={styles.heading} style={{ fontSize: '1.5rem', marginTop: 0 }}>Questions Fréquentes</h2>
                            <details className={styles.faqItem}>
                                <summary>Mon toit est noir, est-ce de la saleté ou un champignon ?</summary>
                                <p>C'est souvent un mélange de pollution et d'algues microscopiques. Un nettoyage simple ne suffit pas toujours, un traitement biocide est nécessaire pour tuer les racines.</p>
                            </details>
                            <details className={styles.faqItem}>
                                <summary>L'hydrofuge colore-t-il les tuiles ?</summary>
                                <p>Il existe des hydrofuges incolores qui préservent l'aspect naturel, et des hydrofuges colorés si vous souhaitez raviver la couleur de vos tuiles ternies.</p>
                            </details>
                        </div>
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
