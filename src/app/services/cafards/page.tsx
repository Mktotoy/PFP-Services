import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Destruction Cafards & Blattes 77 | PFP Services",
    alternates: { canonical: '/services/cafards' },
    description: "Éradication de cafards et blattes en Seine-et-Marne (Melun, Fontainebleau). Intervention rapide, contrats annuels pour pros et particuliers. Devis gratuit.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Désinsectisation Cafards et Blattes",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Traitement curatif et préventif contre les cafards et blattes pour particuliers et professionnels."
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quels sont les dangers des cafards pour la santé ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les cafards peuvent transmettre de nombreuses maladies comme la salmonellose, la dysenterie, la tuberculose ou encore gastro-entérite. Ils sont aussi vecteurs d'allergies et d'asthme."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien coûte une intervention contre les cafards ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nos interventions débutent à partir de 145€ TTC. Le prix varie selon la surface à traiter et le degré d'infestation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Proposez-vous des contrats pour les restaurants ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, nous proposons des contrats annuels curatifs et préventifs adaptés aux professionnels (restaurateurs, hôteliers, syndics) pour garantir une hygiène irréprochable."
                    }
                }
            ]
        }
    ]
};


export default function CafardsPage() {
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
                    { name: 'Cafards', url: 'https://pfp-services.fr/services/cafards' },
                ]}
            />

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Désinsectisation : Cafards & Blattes</h1>
                    <p className={styles.subtitle}>
                        Débarrassez-vous définitivement des cafards avec PFP Services.<br />
                        Intervention rapide et discrète à partir de <strong>145€</strong>.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Urgence 7j/7 : 06 29 95 32 62</a>
                        <Link href="/contact" className="btn btn-secondary">Devis Gratuit</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Les Cafards & Blattes</h2>
                        <p>
                            La plupart des cafards sont ailés et de couleur noirâtre ou brunâtre.
                            Ils possèdent un long corps aplati de forme ovale et de longues antennes.
                            Leur taille varie de <strong>1 à 5 cm</strong> selon les espèces.
                        </p>
                        <p>
                            Ils se nichent souvent derrière vos meubles, dans les tuyaux d’évacuation, et prolifèrent particulièrement dans les cuisines où ils trouvent chaleur et nourriture.
                        </p>

                        <div className={styles.alertBox}>
                            <strong>Attention :</strong> L'infestation peut être très rapide. Une seule femelle peut engendrer des milliers de descendants en une année.
                        </div>

                        <div className={styles.imagePlaceholder}>
                            <span>Photo: Cafard / Blatte (Identification)</span>
                        </div>

                        <h2 className={styles.heading}>Risques & Nuisances</h2>
                        <p>
                            Les cafards sont un danger notable pour l'hygiène et la santé. Ils souillent les plans de travail et contaminent les denrées alimentaires.
                        </p>
                        <h3>Maladies transmissibles :</h3>
                        <ul className={styles.list}>
                            <li>Intoxication alimentaire (Salmonellose)</li>
                            <li>Dysenterie & Gastro-entérite</li>
                            <li>Tuberculose & Ténia</li>
                            <li>Allergies respiratoires, Eczéma, Asthme</li>
                        </ul>

                        <div className={styles.faqSection}>
                            <h2 className={styles.heading}>Questions Fréquentes (FAQ)</h2>
                            <details className={styles.faqItem}>
                                <summary>Pourquoi faire appel à un professionnel ?</summary>
                                <p>Les produits du commerce sont souvent inefficaces sur les œufs. Nos produits professionnels (gels biocides) permettent une éradication totale de la colonie par effet domino.</p>
                            </details>
                            <details className={styles.faqItem}>
                                <summary>Comment se déroule l'intervention ?</summary>
                                <p>Nous appliquons un gel appât discret et sans odeur aux endroits stratégiques. Il n'est généralement pas nécessaire de quitter les lieux.</p>
                            </details>
                            <details className={styles.faqItem}>
                                <summary>Proposez-vous des contrats annuels ?</summary>
                                <p>Oui, pour les entreprises, collectivités et restaurateurs, nous proposons des contrats incluant passages préventifs et curatifs.</p>
                            </details>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos Techniques d'Intervention</h3>
                            <p>
                                Nous utilisons différents procédés pour éliminer durablement ces nuisibles :
                            </p>
                            <ul className={styles.checkList}>
                                <li>Diagnostic du degré d'infestation.</li>
                                <li>Traitement par gel biocide (puissant attractif).</li>
                                <li>Pulvérisation d'insecticide (si forte infestation).</li>
                                <li>Suivi post-intervention pour valider l'éradication.</li>
                            </ul>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                                <em>Selon le degré d’infestation, plusieurs passages peuvent être nécessaires.</em>
                            </p>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Désinsectisation</h3>
                            <p className={styles.price}>Intervention à partir de 145€*</p>
                            <p className={styles.priceNote}>*En fonction du degré d’infestation et de la surface à traiter.</p>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px', marginTop: '10px' }}>
                                <strong style={{ color: 'var(--secondary)' }}>Contrats Annuels</strong> disponibles pour Pros & Restaurateurs.
                            </div>

                            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                Demander un devis
                            </Link>
                        </div>

                        <div className={styles.imagePlaceholder} style={{ height: '300px' }}>
                            <span>Photo: Application de gel anti-cafards</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
