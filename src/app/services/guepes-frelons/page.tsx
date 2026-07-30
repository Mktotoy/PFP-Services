import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { Info } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Nids Guêpes & Frelons 77 | PFP Services",
    alternates: { canonical: '/services/guepes-frelons' },
    description: "Intervention rapide pour nids de guêpes et frelons asiatiques en Seine-et-Marne (Melun, Fontainebleau). Apiculteurs certifiés pour la sauvegarde des abeilles.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Destruction Nids de Guêpes et Frelons",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
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
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Services', url: 'https://pfp-services.fr/services' },
                    { name: 'Guêpes & Frelons', url: 'https://pfp-services.fr/services/guepes-frelons' },
                ]}
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
                                Facilement identifiable par sa taille et son bruit de vol, il fait trois fois la taille d'une abeille classique.
                                C'est un insecte carnivore qui mange principalement des mouches et qui est donc bénéfique pour l'environnement.
                                Comme le nid de frelons asiatiques, son nid est construit d'écorces et de résineux, sauf que l'entrée se trouve sous le nid.
                                Il peut tout de même représenter un danger s'il est proche de l'habitation : n'hésitez pas à nous contacter pour vous en débarrasser.
                            </p>
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
                            <h3 style={{display:'flex', alignItems:'center', gap:'8px'}}><Info size={20} /> Abeilles & Bourdons : Espèces Protégées</h3>
                            <p>
                                <strong>Attention :</strong> Les abeilles et les bourdons ne sont pas considérés comme des nuisibles et sont même essentiels à l'environnement.
                                Ils mangent du nectar et collectent du pollen pour nourrir leurs compagnons.
                                <br />
                                En tant qu'anciens apiculteurs et adhérents au <strong><a href="https://www.apiculture77.fr/gdsa/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GDSA 77</a></strong>, entièrement dédiés à la protection de cette espèce, nous avons conçu un rucher à Samoreau (77).
                                <strong>Nous récupérons les essaims</strong> gratuitement dans la plupart des cas, avec tout le matériel nécessaire (ruchettes, enfumoir, cadres de ruches...), pour les réinstaller en ruche.
                            </p>
                        </div>

                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos Techniques d'Intervention</h3>
                            <p style={{ marginBottom: '10px' }}>
                                Spécialisés dans le traitement des hyménoptères (frelons, guêpes, bourdons), nous intervenons dans tous les milieux, dans un délai de <strong>48 heures</strong>. Référencés au FREDON Île-de-France et certifiés biocides, nous utilisons des produits comme le pyrèthre naturel.
                            </p>
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
