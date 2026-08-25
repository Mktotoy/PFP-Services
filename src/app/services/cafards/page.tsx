import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceContact } from '@/components/blocks/ServiceContact';
import { ServiceDevis } from '@/components/blocks/ServiceDevis';
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

            <ServiceHero
                title="Désinsectisation : cafards et blattes"
                subtitle={<>Débarrassez-vous définitivement des cafards avec PFP Services.<br />Intervention rapide et discrète.</>}
                image="/images/services/cafards/cafard-sur-pain-1.png"
            />

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Les cafards et blattes</h2>
                        <p>
                            La plupart des cafards sont ailés et de couleur noirâtre ou brunâtre.
                            Ils possèdent un long corps aplati de forme ovale et de longues antennes.
                            Leur taille varie de <strong>1 à 5 cm</strong> selon les espèces.
                        </p>
                        <p>
                            Ils se nichent souvent derrière vos meubles, dans les tuyaux d’évacuation, et prolifèrent particulièrement dans les cuisines où ils trouvent chaleur et nourriture.
                        </p>

                        <div className={styles.alertBox}>
                            <strong>Attention :</strong> L'infestation peut être très rapide. Une seule femelle peut engendrer des milliers de descendants très rapidement !
                        </div>

                        <img
                            src="/images/services/cafards/banniere-cafard-large.png"
                            alt="Cafard, identification"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

                        <h2 className={styles.heading}>Risques et nuisances</h2>
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
                            <h2 className={styles.heading}>Questions fréquentes (FAQ)</h2>
                            <details className={styles.faqItem}>
                                <summary>Pourquoi faire appel à un professionnel ?</summary>
                                <p>Les produits du commerce sont souvent inefficaces sur les œufs. Nos produits professionnels (gels biocides) permettent une éradication totale de la colonie par effet domino.</p>
                            </details>
                            <details className={styles.faqItem}>
                                <summary>Proposez-vous des contrats annuels ?</summary>
                                <p>Oui, pour les entreprises, collectivités et restaurateurs, nous proposons des contrats incluant passages préventifs et curatifs.</p>
                            </details>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos techniques d'intervention</h3>
                            <p>
                                Nous utilisons différents procédés pour éliminer durablement ces nuisibles :
                            </p>
                            <ul className={styles.checkList}>
                                <li>Diagnostic et mise en place d'un programme de désinsectisation adapté à la situation, avec protocole avant / pendant et après le traitement</li>
                                <li>Plusieurs passages à prévoir avant le contrôle final.</li>
                            </ul>
                        </div>

                        <ServiceContact />

                        <ServiceDevis
                            title="Tarifs désinsectisation"
                            note="Selon la surface et le niveau d'infestation."
                            intro="Chaque logement est différent. Nous évaluons gratuitement :"
                            criteria={["La surface à traiter", "Le niveau d'infestation", "Le nombre de passages nécessaires"]}
                        />

                        <img
                            src="/images/services/cafards/cafard-technicien-pulverisation.png"
                            alt="Technicien PFP Services en intervention anti-cafards"
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
