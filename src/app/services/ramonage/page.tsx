import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Ramonage & Débistrage 77 (Seine-et-Marne) | PFP Services",
    alternates: { canonical: '/services/ramonage' },
    description: "Ramonage certifié cheminée, poêle, insert et chaudière. Débistrage et entretien dans le 77. Attestation assurance fournie.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Ramonage & Débistrage",
            "provider": { "@id": "https://deratisation-77.com/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Ramonage de cheminée, poêle à bois et insert. Débistrage mécanique et certificat de ramonage agréé assurances.",
            "offers": {
                "@type": "Offer",
                "price": "55",
                "priceCurrency": "EUR"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Le certificat de ramonage est-il obligatoire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, les assurances exigent un certificat de ramonage annuel (voire biannuel selon les règlements sanitaires départementaux) pour vous couvrir en cas d'incendie."
                    }
                }
            ]
        }
    ]
};

export default function RamonagePage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Ramonage & Débistrage</h1>
                    <p className={styles.subtitle}>
                        Entretien de vos conduits de cheminée, poêles et chaudières.<br />
                        <strong>Sécurité - Économies - Conformité Assurances</strong>
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Prendre RDV : 06 29 95 32 62</a>
                        <Link href="/contact" className="btn btn-secondary">Demander un Devis</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Qu'est-ce que le Ramonage ?</h2>
                        <p>
                            Le ramonage permet de réaliser des <strong>économies</strong> sur des combustibles, d'avoir un <strong>meilleur confort thermique</strong>,
                            et de réduire la pollution. Cette pratique nous protège contre tout danger d'intoxication et d'explosion !
                        </p>
                        <div className={styles.alertBox}>
                            <AlertTriangle size={18} style={{display:'inline', verticalAlign:'-3px', marginRight:'4px'}} /> <strong>Danger :</strong> Outre l’incendie du conduit de cheminée, le risque principal du défaut de ramonage reste <strong>l’intoxication au monoxyde de carbone</strong>, inodore et mortel.
                        </div>

                        <h3 className={styles.subHeading}>Fréquence obligatoire</h3>
                        <ul className={styles.list}>
                            <li><strong>2 fois par an</strong> pour les installations au <strong>bois, charbon et fuel</strong> (dont une fois pendant la période de chauffe).</li>
                            <li><strong>1 fois par an</strong> pour les installations au <strong>gaz</strong>.</li>
                        </ul>
                        <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Le nombre de ramonages est fixé par le Règlement Sanitaire Départemental.</p>

                        <h2 className={styles.heading} style={{ marginTop: '2rem' }}>Le Débistrage</h2>
                        <p>
                            Le débistrage est une action mécanique qui consiste à enlever par martèlement le goudron durci (bistre) à l’aide de masselottes rotatives.
                            Le <strong>bistre</strong> est très inflammable et sa présence est la cause principale des feux de cheminée.
                        </p>

                        <h2 className={styles.heading} style={{ marginTop: '2rem' }}>Législation & Assurances</h2>
                        <p>
                            Un ramonage efficace vous permet d'obtenir un meilleur tirage en période de chauffe, mais évite surtout
                            l'intoxication au monoxyde de carbone, <strong>responsable chaque année de 90 décès et 5 000 intoxications</strong>.
                        </p>
                        <p>
                            Bien entendu, il prévient les risques d'incendies qui ne sont pas pris en charge par votre assurance dès lors
                            que vous êtes en défaut d'entretien. Une <strong>amende de troisième classe d'un montant de 450 euros</strong> peut
                            également vous être attribuée.
                        </p>
                        <p>
                            À la fin de la prestation, nous vous délivrerons un certificat en bonne et due forme.
                        </p>

                        <div className={styles.faqBox}>
                            <h3>Questions Fréquentes</h3>
                            <details>
                                <summary>Quelle est la meilleure période de l'année pour ramoner ma cheminée ?</summary>
                                <p>Le printemps est la période préférée pour le nettoyage de son conduit, car la période de chauffage est généralement juste terminée. Son installation peut également être maintenue en été. En revanche, il est conseillé de ne pas attendre l'automne, car les ramoneurs sont davantage sollicités en raison du retour du froid.</p>
                            </details>
                            <details>
                                <summary>Ai-je un justificatif à remettre à mon assurance ?</summary>
                                <p>Oui, en cas de sinistre, ce certificat de ramonage peut servir d'attestation pour votre compagnie d'assurance. Seuls les ramoneurs qualifiés sont autorisés à délivrer des certificats de ramonage.</p>
                            </details>
                            <details>
                                <summary>Comment préparer votre venue ?</summary>
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li>Retirez toutes les cendres, les bûches et les agrafes du foyer.</li>
                                    <li>Évitez d'allumer un feu au moins 1 jour (24h) avant le passage du ramoneur.</li>
                                    <li>Dégagez l'accès autour du générateur pour permettre l'intervention.</li>
                                </ul>
                            </details>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.pricingBox}>
                            <h3>Nos Tarifs TTC</h3>
                            <div className={styles.priceItem}>
                                <span>Chaudière</span>
                                <span className={styles.priceValue}>55€</span>
                            </div>
                            <div className={styles.priceItem}>
                                <span style={{ lineHeight: 1.2 }}>Poêle à bois,<br />Inserts & Cheminées</span>
                                <span className={styles.priceValue}>77€</span>
                            </div>
                            <div className={styles.priceItem}>
                                <span>Foyer ouvert</span>
                                <span className={styles.priceValue}>95€</span>
                            </div>
                            <div className={styles.priceItem}>
                                <span>Débistrage</span>
                                <span className={styles.priceValue}>dès 250€</span>
                            </div>
                        </div>

                        <div className={styles.techniqueBox}>
                            <h3>Nos Techniques</h3>
                            <ul className={styles.checkList}>
                                <li>Ramonage rotatif (par le bas)</li>
                                <li>Ramonage mécanique (par le haut)</li>
                                <li>Nettoyage intégral du générateur</li>
                                <li>Inspection & Débistrage</li>
                                <li>Contrôle de conformité</li>
                            </ul>
                        </div>

                        <img
                            src="/images/services/ramonage/ramonage-poele-allume.jpg"
                            alt="Poêle à bois après ramonage"
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', marginTop: '1rem' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
