import { Metadata } from 'next';
import styles from '../page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Traitement Hydrofuge Toiture 77 | Imperméabilisation Tuiles",
    description: "Protégez votre toiture contre l'humidité avec un traitement hydrofuge incolore ou coloré. Effet perlant garanti pour une étanchéité renforcée dans le 77.",
};

export default function HydrofugeSubPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Hydrofuge Toiture" />
            
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Traitement Hydrofuge de Toiture</h1>
                    <p className={styles.subtitle}>
                        L'imperméabilisation haute performance pour une toiture autonettoyante.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Qu'est-ce qu'un traitement hydrofuge ?</h2>
                        <p>
                            Le traitement hydrofuge est une protection qui s'applique sur les tuiles propres. Il pénètre dans le support pour créer une barrière imperméable tout en laissant respirer le matériau. L'eau ne s'infiltre plus, elle perle et s'écoule en emportant les saletés (effet autonettoyant).
                        </p>

                        <h3>Les avantages de l'hydrofugation</h3>
                        <ul className={styles.steps}>
                            <li><strong>Étanchéité renforcée :</strong> Protection contre les infiltrations d'eau.</li>
                            <li><strong>Protection contre le gel :</strong> Empêche l'éclatement des tuiles poreuses.</li>
                            <li><strong>Esthétique :</strong> Ravive la couleur (hydrofuge coloré) ou préserve l'aspect naturel (incolore).</li>
                            <li><strong>Longévité :</strong> Prolonge la durée de vie de votre toiture de 10 ans ou plus.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
