import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import { ServiceContact } from '@/components/blocks/ServiceContact';
import { ServiceDevis } from '@/components/blocks/ServiceDevis';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Chenilles Processionnaires 77 | PFP Services",
    alternates: { canonical: '/services/chenilles' },
    description: "Lutte contre les chenilles processionnaires en Seine-et-Marne. Enlèvement de cocons, écopièges et traitement biologique pour particuliers et collectivités.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "serviceType": "Traitement Chenilles Processionnaires",
            "provider": { "@id": "https://pfp-services.fr/#organization" },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Seine-et-Marne"
            },
            "description": "Enlèvement mécanique des nids, pose d'écopièges contre les chenilles processionnaires du pin et du chêne."
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quels sont les dangers des chenilles processionnaires ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Leurs poils urticants provoquent de graves réactions allergiques chez l'homme (plaque rouges, difficultés respiratoires) et peuvent être mortels pour les animaux domestiques ( nécrose de la langue chez le chien)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quand intervenir contre les chenilles ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'intervention dépend du cycle de vie. En hiver, on retire les cocons. Au printemps, on pose des écopièges avant la descente des chenilles."
                    }
                }
            ]
        }
    ]
};


export default function ChenillesPage() {
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
                    { name: 'Chenilles Processionnaires', url: 'https://pfp-services.fr/services/chenilles' },
                ]}
            />

            <ServiceHero
                title="Chenilles processionnaires"
                subtitle={<>Nous luttons contre l'invasion des chenilles du pin et du chêne.<br />Traitement, écopièges et enlèvement de nids.</>}
                image="/images/services/chenilles/chenilles-intervention.jpg"
            />

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Qu'est-ce qu'une chenille processionnaire ?</h2>
                        <p>
                            La <strong>chenille processionnaire du pin</strong> est la larve d’un papillon de nuit. Elle mesure près de 40 mm et se reconnaît à sa couleur brune/noire avec des tâches rougeâtres.
                        </p>
                        <p>
                            Elles naissent dans les pins (qu'elles affaiblissent considérablement) et vivent en colonies.
                            Elles marchent en file indienne (en "procession") et tissent des <strong>cocons de soie</strong> blancs visibles dans les branches.
                        </p>

                        <img
                            src="/images/services/chenilles/chenilles-nid.jpg"
                            alt="Cocon de chenilles"
                            style={{ width: '100%', borderRadius: 'var(--radius-md)', margin: 'var(--spacing-md) 0' }}
                        />

                        <div className={styles.alertBox}>
                            <strong>Danger sanitaire :</strong> elles sont couvertes de poils microscopiques ultra-urticants et allergisants, qu'elles libèrent dans l'air. Ces derniers sont nocifs pour l'homme et très dangereux pour vos animaux domestiques.
                        </div>

                        <h2 className={styles.heading}>Risques et nuisances</h2>
                        <p>
                            La chaleur favorise leur prolifération rapide dans les jardins et les parcs.
                        </p>

                        <h3>Pour l'homme :</h3>
                        <ul className={styles.list}>
                            <li>Fortes démangeaisons et plaques rouges (urticaire géant).</li>
                            <li>Lésions oculaires graves si contact avec les yeux.</li>
                            <li>Difficultés respiratoires (asthme, œdème).</li>
                        </ul>

                        <h3>Pour les animaux (urgence vétérinaire) :</h3>
                        <p>
                            Si votre chien ou chat renifle ou lèche une chenille, sa langue peut nécroser rapidement.
                            <br />
                            <span className={styles.urgent}>Consultez un vétérinaire immédiatement.</span>
                        </p>

                        <div className={styles.faqSection}>
                            <h2 className={styles.heading}>Questions fréquentes</h2>
                            <details className={styles.faqItem}>
                                <summary>Mon arbre va-t-il mourir ?</summary>
                                <p>Les chenilles affaiblissent l'arbre en mangeant ses aiguilles, ce qui ralentit sa croissance et le rend vulnérable à d'autres maladies, mais le tue rarement directement sauf infestation massive répétée.</p>
                            </details>
                            <details className={styles.faqItem}>
                                <summary>Comment fonctionne un écopiège ?</summary>
                                <p>C'est un collier fixé autour du tronc qui intercepte les chenilles lorsqu'elles descendent de l'arbre pour s'enterrer. Elles sont dirigées vers un sac collecteur sans danger pour l'environnement.</p>
                            </details>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.techniqueBox}>
                            <h3>Nos techniques d'intervention</h3>
                            <p>
                                Nous intervenons dans les plus brefs délais en adaptant nos protocoles à la saison et au cycle de l'insecte :
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <strong>Échenillage mécanique :</strong> Découpe des nids (cocons) à l'aide de perches et incinération contrôlée.
                                </li>
                                <li>
                                    <strong>Pose d'écopièges :</strong> Capture écologique lors de la procession de descente.
                                </li>
                                <li>
                                    <strong>Piégeage par phéromones :</strong> Pour capturer les papillons mâles l'été et limiter la reproduction.
                                </li>
                                <li>
                                    <strong>Pin :</strong> coupe de cocons jusqu'à 15m et incinération.
                                </li>
                                <li>
                                    <strong>Chêne :</strong> brûlage des cocons jusqu'à 10m.
                                </li>
                                <li>
                                    <strong>Pose d'éco-pièges</strong> tous diamètres avec sacs collecteurs renouvelables.
                                </li>
                            </ul>
                        </div>

                        <ServiceContact />

                        <ServiceDevis
                            title="Tarifs traitement"
                            note="Selon la hauteur et le nombre de nids."
                            intro="Chaque jardin est différent. Nous évaluons gratuitement :"
                            criteria={["Le nombre de nids à traiter", "La hauteur et l'accès aux arbres", "La méthode adaptée (échenillage, écopiège)"]}
                        />

                        <img
                            src="/images/services/chenilles/chenilles-intervention.jpg"
                            alt="Intervention chenilles"
                            style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '300px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
