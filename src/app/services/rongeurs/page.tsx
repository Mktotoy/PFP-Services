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
            "provider": { "@id": "https://deratisation-77.com/#organization" },
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
                            Qu'il s'agisse de <strong>mulots</strong>, de <strong>souris</strong> ou de <strong>rats d’égouts</strong>, ces nuisibles vivent communément dans des lieux humides ou cachés.
                            Ils creusent des galeries dans les sous-sols, les égouts ou les abords immédiats des habitations.
                        </p>
                        <p>
                            Le rat préfère souvent les parties hautes des bâtiments (charpentes) ou les espaces entre planchers et plafonds.
                            La souris, quant à elle, peut nicher partout : faux-plafonds, doubles cloisons, tiroirs, greniers...
                        </p>

                        <img
                            src="/images/services/rongeurs/rongeurs-infestation.jpg"
                            alt="Infestation de rongeurs"
                            className={styles.contentImage}
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', display: 'block' }}
                        />

                        <h2 className={styles.heading}>Les Nuisances & Dangers</h2>
                        <p>
                            Une infestation de rongeurs n'est pas à prendre à la légère. Ils <strong>consomment et souillent</strong> ce qu’ils ne mangent pas
                            et s’attaquent aux matériaux isolants, câbles, gaines et fils électriques.
                        </p>
                        <ul className={styles.list}>
                            <li>Risques d'incendies (courts-circuits).</li>
                            <li>Dégâts matériels importants (isolation, cloisons).</li>
                            <li>Transmission de maladies (leptospirose, salmonellose...).</li>
                            <li>Bruits nocturnes et odeurs désagréables.</li>
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
                                Spécialistes de la dératisation dans le 77, nous utilisons des méthodes professionnelles et sécurisées :
                            </p>
                            <ul className={styles.checkList}>
                                <li>Diagnostic complet du lieu d'infestation.</li>
                                <li>Mise en place de postes d'appâtage sécurisés (boîtes verrouillées).</li>
                                <li>Utilisation de produits raticides professionnels (anticoagulants de nouvelle génération).</li>
                                <li>Rebouchage des points d'entrée (si possible).</li>
                                <li>Conseils de prévention pour éviter toute récidive.</li>
                            </ul>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Dératisation</h3>
                            <p className={styles.price}>À partir de 145€ TTC*</p>
                            <p className={styles.priceNote}>*Le prix varie selon la surface et le niveau d'infestation.</p>
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
