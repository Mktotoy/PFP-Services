import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceContact } from '@/components/blocks/ServiceContact';
import { ServiceDevis } from '@/components/blocks/ServiceDevis';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Dératisation Rats & Souris 77 | PFP Services",
    alternates: { canonical: '/services/rongeurs' },
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
            "description": "Extermination professionnelle de rats, souris et mulots."
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
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Services', url: 'https://pfp-services.fr/services' },
                    { name: 'Rongeurs', url: 'https://pfp-services.fr/services/rongeurs' },
                ]}
            />
            <ServiceHero
                title="Dératisation : rats, souris et mulots"
                subtitle={<>Nous vous venons en aide face à l'invasion de rongeurs.<br />Intervention rapide et efficace.</>}
                image="/images/services/rongeurs/rongeurs-infestation.jpg"
            />

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Les rongeurs</h2>
                        <p>
                            Qu'il s'agisse de souris ou de rats, ils vivent généralement dans des endroits humides. Ils creusent des passages dans les souterrains, les égouts et les abords immédiats des habitations.
                        </p>
                        <p>
                            Les rats ont tendance à vivre dans les parties supérieures des bâtiments tels que les charpentes ou les plafonds des maisons/appartements. Cependant, le rat peut nicher n'importe où. Il se glisse aisément dans des faux plafonds, des doubles cloisons, dans des tiroirs, dans les combles, etc…
                        </p>

                        <img
                            src="/images/services/rongeurs/rongeurs-pieges.jpg"
                            alt="Pièges à rongeurs sécurisés"
                            className={styles.contentImage}
                        />

                        <h2 className={styles.heading}>Les nuisances</h2>
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
                        />
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos techniques d'intervention</h3>
                            <ul className={styles.checkList}>
                                <li>Traitement curatif</li>
                                <li>Nuisibles ciblés : rats bruns, rats gris, souris, mulots, musaraignes…</li>
                                <li>Méthodes : diagnostic et mise en place d'un programme sécurisé de suivi de dératisation selon le nuisible ciblé et le taux d'infestation, la durée de l'infestation et le périmètre à couvrir</li>
                                <li>Conseils et préconisations pendant et post-traitement (proofing, lutte préventive, comportement à adopter…)</li>
                                <li>Traitement préventif</li>
                                <li>Possibilité de mise en place de contrats annuels pour un suivi préventif</li>
                            </ul>
                        </div>

                        <ServiceContact />

                        <ServiceDevis
                            title="Tarifs dératisation"
                            note="Selon la surface et le niveau d'infestation."
                            intro="Chaque situation est différente. Nous évaluons gratuitement :"
                            criteria={["L'étendue de l'infestation", "Les points d'entrée à reboucher", "Le nombre de passages nécessaires"]}
                        />

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
