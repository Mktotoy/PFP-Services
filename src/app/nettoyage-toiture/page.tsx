import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import { BeforeAfter } from '@/components/blocks/BeforeAfter';
import { LocalReviews } from '@/components/blocks/LocalReviews';

export const metadata: Metadata = {
    title: "Entreprise Nettoyage Toiture 77 | Expertise Démoussage Seine-et-Marne",
    description: "Spécialiste du nettoyage de toiture dans le 77. Brossage manuel, démoussage curatif et protection hydrofuge. Devis gratuit sous 24h. Intervention Melun, Fontainebleau.",
};

export default function ToiturePilierPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Expertise Toiture" />
            
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Expertise Nettoyage & Entretien de Toiture</h1>
                    <p className={styles.subtitle}>
                        Protégez votre patrimoine avec un entretien professionnel de votre couverture dans le 77, 91 et 45.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Le Nettoyage de Toiture : Une nécessité pour la longévité de votre toit</h2>
                        <p>
                            Votre toiture est l'élément le plus exposé de votre habitation. Face aux intempéries, à la pollution et à la prolifération de micro-organismes (mousses, lichens, algues), elle perd ses propriétés protectrices au fil des années. 
                            <strong> PFP Services</strong> vous propose une expertise complète pour restaurer l'étanchéité et l'esthétique de vos tuiles dans toute la Seine-et-Marne (77).
                        </p>

                        <h3>Les dangers de la mousse sur les tuiles</h3>
                        <p>
                            Beaucoup de propriétaires pensent que la mousse n'est qu'un problème esthétique. C'est une erreur qui peut coûter cher. La mousse, le lichen et les algues sont hydrophiles : ils retiennent l'eau. En restant constamment humides, les tuiles deviennent poreuses. En hiver, l'eau contenue dans la tuile gèle et se dilate, créant des micro-fissures (phénomène de gélifraction). À terme, la tuile finit par éclater, provoquant des infiltrations d'eau qui endommagent votre isolation et votre charpente.
                        </p>

                        <h3>Le brossage manuel : Pourquoi est-ce la meilleure technique ?</h3>
                        <p>
                            Chez PFP Services, nous privilégions le <strong>brossage manuel</strong>. Pourquoi ? Parce que le nettoyage au Karcher haute pression est trop agressif pour la plupart des toitures. Un jet trop puissant peut arracher la couche de protection d'usine de la tuile, la rendant encore plus poreuse et sensible. Le brossage manuel permet d'éliminer le gros des mousses sans altérer le support mécanique. Nous complétons cette action par un rinçage à basse pression pour évacuer les résidus.
                        </p>

                        <BeforeAfter 
                            beforeImg="/images/services/demoussage/toiture-mousse.jpg"
                            afterImg="/images/services/demoussage/toiture-nettoyage.jpg"
                            altText="Nettoyage de toiture tuiles mécaniques"
                            city="Seine-et-Marne"
                        />

                        <h3>Traitement Curatif et Préventif</h3>
                        <p>
                            Une fois le support propre, nous appliquons un produit biocide professionnel. Ce n'est pas un simple "nettoyant", c'est un traitement qui pénètre dans le support pour détruire les racines des micro-organismes. Sans ce traitement, la mousse réapparaîtrait en quelques mois. Notre produit est biodégradable et respecteux de l'environnement, sans chlore agressif.
                        </p>

                        <h3>L'importance de l'Hydrofuge</h3>
                        <p>
                            Pour finir, nous recommandons l'application d'un **traitement hydrofuge**. C'est le "bouclier" final. Il crée un effet perlant sur la tuile : l'eau de pluie ne pénètre plus, elle glisse en emportant les poussières. Votre toit devient autonettoyant. Nous proposons des hydrofuges incolores pour garder l'aspect d'origine, ou colorés pour redonner une nouvelle jeunesse à votre maison.
                        </p>

                        <h3>Zones d'intervention prioritaires</h3>
                        <p>
                            Nous intervenons rapidement à Melun, Meaux, Fontainebleau, Provins, et dans toutes les communes du 77, ainsi que dans le 91 (Essonne), le 89 (Yonne) et le 45 (Loiret).
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Besoin d'un devis ?</h3>
                            <p>Réponse rapide et déplacement gratuit pour diagnostic.</p>
                            <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Demander un devis</Link>
                        </div>
                        <LocalReviews category="toiture" limit={2} title="Avis Services Toiture" />
                    </div>
                </div>
            </section>
        </main>
    );
}
