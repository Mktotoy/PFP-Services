import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Destruction Nids Guêpes & Frelons 77 | Récupération Essaims Abeilles",
    description: "Intervention rapide pour nids de guêpes et frelons asiatiques en Seine-et-Marne (Melun, Fontainebleau). Apiculteurs certifiés pour la sauvegarde des abeilles.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Destruction Nids de Guêpes et Frelons",
            "provider": { "@id": "https://deratisation-77.com/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Destruction et enlèvement de nids de guêpes et frelons asiatiques. Récupération d'essaims d'abeilles.",
            "offers": {
                "@type": "Offer",
                "price": "90",
                "priceCurrency": "EUR"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Est-ce dangereux d'intervenir soi-même ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, très dangereux. Les guêpes et frelons attaquent en groupe s'ils se sentent menacés, causant de multiples piqûres pouvant être mortelles en cas d'allergie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Récupérez-vous les abeilles ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, nous sommes apiculteurs certifiés. Nous ne détruisons pas les abeilles, nous récupérons l'essaim pour le replacer en ruche."
                    }
                }
            ]
        }
    ]
};

export default function GuepesFrelonsPage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Guêpes, Frelons & Abeilles</h1>
                    <p className={styles.subtitle}>
                        Destruction de nids de guêpes et frelons en toute sécurité.<br />
                        Récupération d'essaims d'abeilles par des apiculteurs certifiés.<br />
                        Intervention à partir de <strong>90€</strong>.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Urgence Nid : 06 29 95 32 62</a>
                        <Link href="/contact" className="btn btn-secondary">Devis Gratuit</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Comment les différencier ?</h2>
                        <p>
                            Il est crucial de bien identifier l'insecte avant d'intervenir. Si vous avez un doute, ne prenez pas de risque et contactez-nous pour une identification.
                        </p>

                        <div className={styles.insectCard}>
                            <h3>Le Frelon Asiatique</h3>
                            <p>
                                Noir au thorax, pattes jaunes. <strong>Très invasif et dangereux</strong> pour les abeilles et l'homme.
                                Il construit souvent ses nids en hauteur (arbres) mais aussi sous les toits ou dans les haies.
                                <strong>Intervention nécessaire et urgente.</strong>
                            </p>
                            <img src="/images/services/guepes-frelons/frelons-arbre.jpg" alt="Nid de frelons asiatiques" style={{ width: '100%', borderRadius: 'var(--radius-sm)', marginTop: '10px' }} />
                        </div>

                        <div className={styles.insectCard}>
                            <h3>Le Frelon Européen</h3>
                            <p>
                                Plus gros, corps jaune et roux. Moins agressif que l'asiatique, il peut tout de même représenter un danger s'il est proche de l'habitation.
                                Utile à l'écosystème, nous privilégions la dissuasion ou le déplacement si possible, sinon l'élimination en cas de danger immédiat.
                            </p>
                            {/* Pas d'image spécifique Frelon Européen téléchargée, on laisse sans ou générique */}
                        </div>

                        <div className={styles.insectCard}>
                            <h3>Les Guêpes</h3>
                            <p>
                                Rayées jaune et noir, taille fine. Agressives si on s'approche du nid (sous les tuiles, dans le sol, caissons de volets).
                                Leur piqûre est douloureuse et allergisante.
                            </p>
                            <img src="/images/services/guepes-frelons/frelons-combles.jpg" alt="Nid sous toiture" style={{ width: '100%', borderRadius: 'var(--radius-sm)', marginTop: '10px' }} />
                        </div>

                        <div className={styles.beeBox}>
                            <h3>🐝 Abeilles & Bourdons : Espèces Protégées</h3>
                            <p>
                                <strong>Attention :</strong> Les abeilles et bourdons sont essentiels à notre biodiversité et protégés.
                                <br />
                                En tant qu'anciens apiculteurs et adhérents au <strong><a href="https://www.apiculture77.fr/gdsa/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GDSA 77</a></strong>, nous ne détruisons PAS les nids d'abeilles.
                                <strong>Nous récupérons les essaims</strong> pour les réinstaller en ruche.
                            </p>
                        </div>

                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos Techniques d'Intervention</h3>
                            <ul className={styles.checkList}>
                                <li>
                                    <strong>Poudrage sous pression :</strong> Idéal pour les nids sous toiture ou dans les murs. Le produit est injecté au coeur du nid.
                                </li>
                                <li>
                                    <strong>Pulvérisation :</strong> Pour les nids apparents et accessibles.
                                </li>
                                <li>
                                    <strong>Perche télescopique :</strong> Nous intervenons jusqu'à grande hauteur sans nacelle si possible.
                                </li>
                                <li>
                                    <strong>Équipement de protection :</strong> Combinaisons intégrales professionnelles pour une sécurité totale.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Destruction Nids</h3>
                            <p className={styles.price}>À partir de 90€ TTC*</p>
                            <p className={styles.priceNote}>*Prix variable selon la hauteur, l'accessibilité et le type de nid.</p>
                            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                Demander un tarif
                            </Link>
                        </div>

                        <img src="/images/services/guepes-frelons/frelons-intervention.jpg" alt="Intervention Frelon" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                    </div>
                </div>
            </section>
        </main>
    );
}
