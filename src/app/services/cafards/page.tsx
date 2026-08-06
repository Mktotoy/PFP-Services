import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { ServiceHero } from '@/components/blocks/ServiceHero';
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
                title="Désinsectisation : Cafards & Blattes"
                subtitle={<>Débarrassez-vous définitivement des cafards avec PFP Services.<br />Intervention rapide et discrète.</>}
                image="/images/services/cafards/cafard-blanc-identification.png"
            />

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
                            <strong>Attention :</strong> L'infestation peut être très rapide. Une seule femelle peut engendrer des milliers de descendants très rapidement !
                        </div>

                        <img
                            src="/images/services/cafards/cafards-essaim-mur.png"
                            alt="Infestation de cafards sur un mur"
                            className={styles.contentImage}
                            style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                        />

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
                                <summary>Proposez-vous des contrats annuels ?</summary>
                                <p>Oui, pour les entreprises, collectivités et restaurateurs, nous proposons des contrats incluant passages préventifs et curatifs.</p>
                            </details>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>nos techniques d'intervention</h3>
                            <p>
                                Nous utilisons différents procédés pour éliminer durablement ces nuisibles :
                            </p>
                            <ul className={styles.checkList}>
                                <li>Diagnostic et mise en place d'un programme de désinsectisation adapté à la situation, avec protocole avant / pendant et après le traitement</li>
                                <li>Plusieurs passages à prévoir avant le contrôle final.</li>
                            </ul>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Nous Contacter</h3>
                            <p>
                                Réponse la plus rapide : contactez-nous directement par téléphone, SMS ou WhatsApp.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--spacing-sm)' }}>
                                <a
                                    href="tel:0629953262"
                                    className="btn btn-primary"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                                >
                                    <Phone size={20} /> Appeler le 06 29 95 32 62
                                </a>
                                <a
                                    href="sms:0629953262"
                                    className="btn btn-outline"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                                >
                                    <MessageSquare size={20} /> Envoyer un SMS
                                </a>
                                <a
                                    href="https://wa.me/33629953262"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', borderColor: '#25D366', color: '#25D366' }}
                                >
                                    <MessageCircle size={20} /> WhatsApp
                                </a>
                            </div>

                            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                Demander un devis
                            </Link>
                        </div>

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
