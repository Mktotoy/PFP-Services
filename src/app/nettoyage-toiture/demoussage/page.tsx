import { Metadata } from 'next';
import styles from '../page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Démoussage Toiture 77 | Brossage Manuel & Traitement Curatif",
    description: "Expert en démoussage de toiture en Seine-et-Marne. Élimination des mousses, lichens et champignons par brossage manuel sans abîmer vos tuiles. Devis gratuit.",
};

export default function DemoussageSubPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Démoussage Toiture" />
            
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Démoussage & Traitement Curatif</h1>
                    <p className={styles.subtitle}>
                        Éliminez durablement les micro-organismes qui dégradent vos tuiles.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Pourquoi le démoussage est-il indispensable ?</h2>
                        <p>
                            La présence de mousse sur votre toit n'est pas seulement un problème esthétique. La mousse retient l'humidité, ce qui finit par rendre vos tuiles poreuses. En période de gel, l'eau emprisonnée se dilate et provoque des micro-fissures (phénomène de gélifraction), accélérant la dégradation de votre couverture.
                        </p>

                        <h3>Le brossage manuel : l'alternative douce</h3>
                        <p>
                            Chez <strong>PFP Services</strong>, nous bannissons l'utilisation systématique du nettoyeur haute pression agressif. Nous pratiquons le brossage manuel, complété par un rinçage basse pression, pour garantir un résultat impeccable sans altérer la couche de protection naturelle de vos tuiles.
                        </p>

                        <h3>Traitement Curatif Biocide</h3>
                        <p>
                            Après le nettoyage mécanique, nous appliquons un produit fongicide et algicide professionnel. Ce traitement pénètre en profondeur pour tuer les racines des végétaux et retarder leur réapparition pendant plusieurs années.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
