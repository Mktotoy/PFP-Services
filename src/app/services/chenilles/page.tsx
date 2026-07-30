import { Metadata } from 'next';
import Link from 'next/link';
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
            "description": "Enlèvement mécanique des nids, pose d'écopièges et traitements biologiques contre les chenilles processionnaires du pin et du chêne."
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

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Chenilles Processionnaires</h1>
                    <p className={styles.subtitle}>
                        Nous luttons contre l'invasion des chenilles du pin et du chêne.<br />
                        Traitement, Écopièges et Enlèvement de nids à partir de <strong>90€</strong>.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="tel:0629953262" className="btn btn-primary">Intervention 7j/7 : 06 29 95 32 62</a>
                        <Link href="/contact" className="btn btn-secondary">Devis Gratuit</Link>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>C'est quoi une Processionnaire ?</h2>
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
                            <strong>Danger Sanitaire :</strong> Elles sont couvertes de poils microscopiques ultra-urticants et allergisants, qu'elles libèrent dans l'air au moindre stress.
                        </div>

                        <h2 className={styles.heading}>Risques & Nuisances</h2>
                        <p>
                            La chaleur favorise leur prolifération rapide dans les jardins et les parcs.
                        </p>

                        <h3>Pour l'Homme :</h3>
                        <ul className={styles.list}>
                            <li>Fortes démangeaisons et plaques rouges (urticaire géant).</li>
                            <li>Lésions oculaires graves si contact avec les yeux.</li>
                            <li>Difficultés respiratoires (asthme, œdème).</li>
                        </ul>

                        <h3>Pour les Animaux (Urgence Vétérinaire) :</h3>
                        <p>
                            Si votre chien ou chat renifle ou lèche une chenille, sa langue peut nécroser rapidement.
                            <span className={styles.urgent}> Consultez un vétérinaire immédiatement.</span>
                        </p>

                        <div className={styles.faqSection}>
                            <h2 className={styles.heading}>Questions Fréquentes</h2>
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
                            <h3>Nos Techniques d'Intervention</h3>
                            <p>
                                Nous intervenons dans les plus brefs délais en adaptant nos protocoles à la saison et au cycle de l'insecte :
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <strong>Échenillage mécanique :</strong> Découpe des nids (cocons) à l'aide de perches et incinération contrôlée.
                                </li>
                                <li>
                                    <strong>Pose d'Écopièges :</strong> Capture écologique lors de la procession de descente.
                                </li>
                                <li>
                                    <strong>Piégeage par phéromones :</strong> Pour capturer les papillons mâles l'été et limiter la reproduction.
                                </li>
                                <li>
                                    <strong>Traitement biologique :</strong> Utilisation du Bacille de Thuringe (btK), un insecticide naturel ciblé.
                                </li>
                            </ul>
                        </div>

                        <div className={styles.pricingBox}>
                            <h3>Tarifs Traitement</h3>
                            <p className={styles.price}>À partir de 90€ TTC*</p>
                            <p className={styles.priceNote}>*Selon le nombre de cocons et la hauteur de l'arbre.</p>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px', marginTop: '10px' }}>
                                <strong style={{ color: 'var(--white)' }}>Contrats Annuels</strong> disponibles pour le suivi de vos arbres.
                            </div>

                            <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                Demander un devis
                            </Link>
                        </div>

                        <img
                            src="/images/services/chenilles/chenilles-intervention.jpg"
                            alt="Intervention Chenilles"
                            style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '300px', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
