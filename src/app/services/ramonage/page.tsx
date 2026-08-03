import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { ShieldCheck } from 'lucide-react';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Ramonage & Débistrage 77 (Seine-et-Marne) | PFP Services",
    alternates: { canonical: '/services/ramonage' },
    description: "Ramonage certifié cheminée, poêle et insert. Débistrage et entretien dans le 77. Certificat de conformité fourni pour votre assurance.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Ramonage & Débistrage",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
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
                    "name": "Quelle est la meilleure période de l'année pour ramoner ma cheminée ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le printemps est la période préférée pour le nettoyage de son conduit, car la période de chauffage est généralement juste terminée. Son installation peut également être maintenue en été. En revanche, il est conseillé de ne pas attendre l'automne, car les ramoneurs sont davantage sollicités en raison du retour du froid."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le certificat de ramonage est-il obligatoire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, les assurances exigent un certificat de ramonage annuel (voire biannuel selon les règlements sanitaires départementaux) pour vous couvrir en cas d'incendie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ai-je un justificatif à remettre à mon assurance ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, en cas de sinistre, ce certificat de ramonage peut servir d'attestation pour votre compagnie d'assurance. Seuls les ramoneurs qualifiés sont autorisés à délivrer des certificats de ramonage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment préparer votre venue ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Retirez toutes les cendres, les bûches et les agrafes du foyer. Évitez d'allumer un feu au moins 1 jour (24h) avant le passage du ramoneur. Dégagez l'accès autour du générateur pour permettre l'intervention."
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
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Services', url: 'https://pfp-services.fr/services' },
                    { name: 'Ramonage', url: 'https://pfp-services.fr/services/ramonage' },
                ]}
            />
            <ServiceHero
                title="Ramonage & Débistrage"
                subtitle={<>Entretien de vos conduits de cheminée, poêles et inserts.<br /><strong>Sécurité - Conformité Assurances</strong></>}
                image="/images/services/ramonage/ramonage-poele-allume.jpg"
            />

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h3 className={styles.subHeading}>Fréquence conseillée</h3>
                        <ul className={styles.list}>
                            <li><strong>2 fois par an</strong> pour les installations au <strong>bois et charbon</strong> (dont une fois pendant la période de chauffe).</li>
                            <li><strong>1 fois par an</strong> pour les installations au <strong>gaz</strong>.</li>
                        </ul>
                        <p>
                            Il est obligatoire de faire ramoner son conduit une fois par an. PFP Services conseille toutefois d'en
                            effectuer deux, surtout si le conduit a beaucoup servi sur la saison de chauffe.
                        </p>
                        <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Le nombre de ramonages est fixé par le Règlement Sanitaire Départemental.</p>

                        <h2 className={styles.heading} style={{ marginTop: '2rem' }}>Le Débistrage</h2>
                        <p>
                            Le débistrage est une action mécanique qui consiste à enlever par martèlement le goudron durci (bistre) à l'aide de masselottes rotatives.
                            Le <strong>bistre</strong> est très inflammable et sa présence est la cause principale des feux de cheminée.
                        </p>

                        <h2 className={styles.heading} style={{ marginTop: '2rem' }}>Notre technique d'intervention</h2>
                        <div className={styles.techniqueGrid}>
                            <div>
                                <p>
                                    Experts dans notre domaine d'intervention, nos prestations sont adaptées à chaque requête et cas
                                    rencontrés par nos clients. Voici les différentes actions que nous effectuons au quotidien :
                                </p>
                                <ul className={styles.checkList}>
                                    <li>Le ramonage rotatif effectué par le bas pour tous les types de diamètre de conduits existants</li>
                                    <li>Le ramonage intégral de conduit de fumées et de conduit de raccordement</li>
                                    <li>Le nettoyage intégral de l'intérieur du générateur</li>
                                    <li>Le débistrage pour tous les types de diamètre de conduits tubés existants</li>
                                </ul>
                                <p>
                                    Enfin, nous mettons en place un protocole de détection et de signalement des non-conformités
                                    apparentes (distances de sécurité, raccordement, etc.) qui peuvent être à l'origine de dangers
                                    graves et imminents dans l'intérêt des clients.
                                </p>
                            </div>
                            <img
                                src="/images/services/ramonage/ramonage-technique-conduit-inox.jpg"
                                alt="Conduit de cheminée en inox après intervention de ramonage PFP Services"
                                className={styles.techniqueImage}
                            />
                        </div>

                        <div className={styles.certifBox}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ShieldCheck size={20} /> Certificat de conformité
                            </h3>
                            <p>
                                Nous délivrons sur place un <strong>certificat de conformité</strong> en cas de besoin pour votre assurance.
                            </p>
                        </div>

                        <div className={styles.faqBox}>
                            <h3>Questions Fréquentes</h3>
                            <details>
                                <summary>Quelle est la meilleure période de l'année pour ramoner ma cheminée ?</summary>
                                <p>Le printemps est la période préférée pour le nettoyage de son conduit, car la période de chauffage est généralement juste terminée. Son installation peut également être maintenue en été. En revanche, il est conseillé de ne pas attendre l'automne, car les ramoneurs sont davantage sollicités en raison du retour du froid.</p>
                            </details>
                            <details>
                                <summary>Le certificat de ramonage est-il obligatoire ?</summary>
                                <p>Oui, les assurances exigent un certificat de ramonage annuel (voire biannuel selon les règlements sanitaires départementaux) pour vous couvrir en cas d'incendie.</p>
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
                        <img
                            src="/images/services/ramonage/ramonage-poele-installe.jpg"
                            alt="Poêle à bois allumé après ramonage PFP Services"
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto' }}
                        />
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
