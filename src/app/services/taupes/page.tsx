import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceContact } from '@/components/blocks/ServiceContact';
import { ServiceDevis } from '@/components/blocks/ServiceDevis';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Anti-Taupes & Taupiers 77 | PFP Services",
    alternates: { canonical: '/services/taupes' },
    description: "Service professionnel de détaupisation en Seine-et-Marne. Piégeage traditionnel mécanique sans poison. Intervention rapide.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Détaupisation / Taupier",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Piégeage traditionnel et mécanique des taupes. Méthode écologique sans poison pour préserver votre jardin."
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Pourquoi j'ai des taupes dans mon jardin ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "La présence de taupes indique souvent une terre riche et saine, pleine de vers de terre dont elles se nourrissent. Elles ne sont pas attirées par les légumes mais peuvent abîmer les racines en creusant."
                    }
                },
                {
                    "@type": "Question",
                    "name": "La méthode mécanique est-elle dangereuse pour mes animaux ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, les pièges (type Putange) sont enterrés directement dans les galeries. Il n'y a aucun poison ni produit chimique accessible en surface pour vos chiens ou chats."
                    }
                }
            ]
        }
    ]
};

export default function TaupesPage() {
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
                    { name: 'Taupes', url: 'https://pfp-services.fr/services/taupes' },
                ]}
            />
            <ServiceHero
                title="Détaupisation"
                subtitle={<>Nous vous aidons à vous débarrasser des taupes<br />Intervention rapide et écologique.</>}
                image="/images/services/taupes/taupiniere.png"
            />

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Les taupes</h2>
                        <p>
                            Petits mammifères à l'odorat surdéveloppé, les taupes vivent à environ 20 cm de profondeur et se reproduisent tous les ans (4 à 6 naissances).
                        </p>
                        <p>
                            Sa taille varie de 10 à 15 cm pour un poids de 80 à 150 g. Sa tête est allongée avec un museau pointu et des yeux minuscules.
                        </p>
                        <p>
                            Sa vision est quasi nulle mais son ouïe est très fine et elle a un odorat très puissant qui lui permet de repérer ses proies dans la terre.
                        </p>

                        <img
                            src="/images/services/taupes/taupe-intervention-retrait-verifie.jpg"
                            alt="Intervention PFP Services pour retrait d'une taupe"
                            className={styles.contentImage}
                            style={{ borderRadius: 'var(--radius-md)', width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '30px auto' }}
                        />

                        <h2 className={styles.heading}>Les nuisances</h2>
                        <p>
                            Ennemies des jardiniers, elles peuvent très rapidement causer de nombreux dégâts.
                        </p>
                        <ul className={styles.checkList} style={{ marginTop: '20px' }}>
                            <li>
                                En fabriquant des galeries dans votre terrain, elles permettent à d'autres nuisibles de venir leur tenir compagnie (campagnols, rats taupiers, etc...).
                            </li>
                            <li>
                                Les monticules de terre visibles (taupinières) ne sont que la partie haute de l'iceberg car les galeries qu'elles confectionnent peuvent surtout fragiliser l'infrastructure de votre extérieur.
                            </li>
                            <li>
                                Les galeries peuvent mesurer jusqu'à <strong>1000 m²</strong> de surface sous-terraine.
                            </li>
                        </ul>

                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos techniques d'intervention</h3>
                            <p>
                                Nous intervenons rapidement afin de limiter les dégâts dans votre jardin.
                            </p>
                            <p>
                                Notre <strong>taupier expert</strong> travaille avec des <strong>pièges mécaniques</strong> (type Putange) qui consistent à neutraliser rapidement les taupes directement au sein de leurs galeries.
                            </p>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                Cette méthode est écologique (sans poison) et évite de polluer les sols ou de mettre en danger vos animaux domestiques.
                            </p>
                        </div>

                        <ServiceContact />

                        <ServiceDevis
                            title="Tarifs détaupisation"
                            note="Selon la surface du terrain et l'étendue des galeries."
                            intro="Chaque terrain est différent. Nous évaluons gratuitement :"
                            criteria={["La surface concernée", "Le nombre de taupinières actives", "La durée de piégeage à prévoir"]}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
