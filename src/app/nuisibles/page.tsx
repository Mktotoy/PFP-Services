import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../nettoyage-toiture/page.module.css'; // Reusing layout styles
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import { LocalReviews } from '@/components/blocks/LocalReviews';

export const metadata: Metadata = {
    title: "Dératisation & Nuisibles 77 | Désinsectisation Seine-et-Marne",
    description: "Expert en lutte contre les nuisibles dans le 77. Dératisation, destruction nids de guêpes et frelons, cafards, punaises de lit. Intervention rapide Melun, Fontainebleau.",
};

export default function NuisiblesPilierPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Expertise Nuisibles" />
            
            <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)' }}>
                <div className="container">
                    <h1 className={styles.title}>Expertise Dératisation & Anti-Nuisibles</h1>
                    <p className={styles.subtitle}>
                        Stop aux infestations. Une intervention pro et discrète pour votre maison ou commerce.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Dératisation et désinsectisation : Une protection pour votre santé et vos biens</h2>
                        <p>
                            Les nuisibles ne sont pas seulement une nuisance visuelle ou sonore. Ils représentent un risque biologique et matériel réel pour les particuliers et les professionnels du 77 (Seine-et-Marne), du 91 (Essonne) et des départements limitrophes (89, 45). 
                            <strong> PFP Services</strong> intervient avec expertise et discrétion pour éradiquer toute forme d'infestation.
                        </p>

                        <h3>La Dératisation : Pourquoi agir vite ?</h3>
                        <p>
                            Les rongeurs (rats d'égouts, rats noirs, souris, mulots) ont une capacité de reproduction fulgurante. Une petite intrusion peut se transformer en colonie en quelques semaines. Au-delà des maladies qu'ils transportent (leptospirose, salmonellose), ils causent des dégâts structurels majeurs : isolation dévorée, bois rongé et surtout, câbles électriques sectionnés, première cause d'incendies d'origine inconnue. Notre approche combine l'appâtage sécurisé et le **rebouchage technique** (exclusion) pour empêcher le retour des intrus.
                        </p>

                        <h3>Désinsectisation : Guêpes, Frelons et plus</h3>
                        <p>
                            Chaque année, les frelons asiatiques gagnent du terrain en Seine-et-Marne. Leur venin est puissant et leurs nids peuvent contenir des milliers d'individus. Nous intervenons 7j/7 pour la destruction de nids de guêpes et frelons, même à grande hauteur grâce à nos perches de 20 mètres. Nous traitons également les cafards, les fourmis et les punaises de lit avec des protocoles rigoureux.
                        </p>

                        <div className={styles.siloLinks}>
                            <Link href="/nuisibles/rats-souris" className={styles.siloCard}>
                                <h4>Dératisation (Rats & Souris)</h4>
                                <p>Élimination des rongeurs et sécurisation définitive des points d'accès.</p>
                            </Link>
                            <Link href="/nuisibles/guepes-frelons" className={styles.siloCard}>
                                <h4>Guêpes & Frelons</h4>
                                <p>Intervention d'urgence 7j/7 pour la neutralisation de nids dangereux.</p>
                            </Link>
                        </div>

                        <h3>Certification Certibiocide : Un gage de sécurité</h3>
                        <p>
                            Le traitement des nuisibles nécessite l'usage de produits biocides réservés aux professionnels. Nos techniciens sont titulaires du certificat **Certibiocide**, délivré par le Ministère de la Transition Écologique. Cela vous garantit un usage raisonné des produits, une efficacité maximale et une sécurité totale pour vos enfants et vos animaux de compagnie.
                        </p>

                        <h3>Nos solutions pour les Professionnels (HACCP)</h3>
                        <p>
                            Pour les restaurateurs, boulangers et gestionnaires de syndics dans le 77, nous proposons des contrats de maintenance annuels preventifs. Ces contrats sont conformes aux exigences sanitaires et vous permettent de présenter des rapports d'intervention conformes lors des contrôles d'hygiène.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Urgence Nuisibles ?</h3>
                            <a href="tel:0629953262" className="btn btn-primary" style={{ width: '100%' }}>Appeler : 06 29 95 32 62</a>
                        </div>
                        <LocalReviews category="nuisibles" limit={2} title="Avis Dératisation" />
                    </div>
                </div>
            </section>
        </main>
    );
}
