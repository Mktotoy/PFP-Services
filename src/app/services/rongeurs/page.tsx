import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Dératisation Rats & Souris 77 | PFP Services",
    description: "Extermination de rats, souris et mulots en Seine-et-Marne (Melun, Fontainebleau). Intervention rapide et discrète. Devis gratuit.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Dératisation",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Extermination professionnelle de rats, souris et mulots.",
            "offers": {
                "@type": "Offer",
                "price": "145",
                "priceCurrency": "EUR"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quels types de rongeurs traitez-vous ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nous traitons principalement les rats d'égout, les souris domestiques, les mulots et les rats noirs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Les produits utilisés sont-ils dangereux pour mes animaux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nous utilisons des boîtes sécurisées (postes d'appâtage) fermées à clé, inaccessibles aux enfants et aux animaux domestiques."
                    }
                }
            ]
        }
    ]
};

export default function RongeursPage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Dératisation : Rats, Souris et Mulots</h1>
                    <p className={styles.subtitle}>
                        Nous vous venons en aide face à l'invasion de rongeurs.<br />
                        Intervention rapide à partir de <strong>145€</strong>.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Appeler le 06 29 95 32 62</a>
                        <Link href="/contact" className="btn btn-secondary">Devis Gratuit</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Les Rongeurs</h2>
                        <p>
                            Qu'il s'agisse de souris ou de rats, ils vivent généralement dans des endroits humides. Ils creusent des passages dans les souterrains, les égouts et les abords immédiats des habitations.
                        </p>
                        <p>
                            Les rats ont tendance à vivre dans les parties supérieures des bâtiments telles que les charpentes ou les plafonds des maisons/appartements. Cependant, le rat peut nicher n'importe où. Il se glisse aisément dans des faux plafonds, des doubles cloisons, dans des tiroirs, dans les combles, etc…
                        </p>

                        <img
                            src="/images/services/rongeurs/rongeurs-infestation.jpg"
                            alt="Infestation de rongeurs"
                            className={styles.contentImage}
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', display: 'block' }}
                        />

                        <h2 className={styles.heading}>Les Nuisances</h2>
                        <p>
                            Ces nuisibles peuvent ronger des câbles, des raccords de gaz, des fils électriques provoquant ainsi des pannes, des courts-circuits, un incendie ou même une explosion due à une fuite de gaz.
                        </p>
                        <p>
                            Ces rongeurs peuvent transmettre plusieurs maladies qui peuvent nuire à la santé de l'homme et des animaux domestiques. Voici quelques exemples de ces maladies :
                        </p>
                        <ul className={styles.list}>
                            <li>Le tétanos</li>
                            <li>La pasteurellose (infections par plaies à travers des morsures)</li>
                            <li>La leptospirose (transmise à travers l'urine)</li>
                            <li>Le typhus murin</li>
                            <li>La salmonellose</li>
                            <li>Les fièvres hémorragiques (qui se transmettent à travers les puces de rats)</li>
                        </ul>

                        <img
                            src="/images/services/rongeurs/rongeurs-excrements.jpg"
                            alt="Traces de rongeurs"
                            className={styles.contentImage}
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos Techniques d'Intervention</h3>
                            <p>
                                Avant l'intervention, notre technicien se rend sur les lieux pour inspecter la zone infestée par les rongeurs. Cet examen leur permettra de mettre en place les traitements les plus adaptés pour lutter efficacement et judicieusement contre ces nuisibles. Voici quelques exemples des méthodes préventives que nous utilisons :
                            </p>
                            <ul className={styles.checkList}>
                                <li>Dispositif chimique</li>
                                <li>Postes sécurisés</li>
                                <li>Systèmes de piégeage par des moyens naturels</li>
                                <li>Appâts non toxiques</li>
                            </ul>
                            <p>
                                Notre tarif tient compte du degré d'infestation et de la surface à traiter.
                            </p>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Dératisation</h3>
                            <p className={styles.price}>À partir de 145€ TTC*</p>
                            <p className={styles.priceNote}>*Suivant degré d'infestation et surface à traiter.</p>
                            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                                Nous proposons des contrats annuels curatifs et préventifs pour toutes demandes : particuliers, entreprises, collectivités, restaurateurs...
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Obtenir un prix exact
                            </Link>
                        </div>

                        <img
                            src="/images/team/tenue-pro.jpg"
                            alt="Technicien PFP Services"
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
