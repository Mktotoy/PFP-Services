import { Metadata } from 'next';
import styles from '../nettoyage-toiture/page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Dératisation Rats & Souris 77 | Entreprise Anti-Rongeurs",
    description: "Expert en dératisation dans le 77 (Seine-et-Marne). Élimination définitive des rats, souris et mulots. Solutions pour particuliers et professionnels (HACCP).",
};

export default function RatsSourisSubPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Dératisation" />
            
            <section className={styles.hero} style={{ background: '#4b5563' }}>
                <div className="container">
                    <h1 className={styles.title}>Dératisation : Rats & Souris</h1>
                    <p className={styles.subtitle}>
                        Protégez vos stocks, vos câbles et votre santé contre les rongeurs.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Efficacité Radical contre les Rongeurs</h2>
                        <p>
                            Rats d'égouts, rats noirs ou souris grises... L'invasion de rongeurs est un fléau qui nécessite une action coordonnée. Nous installons des postes d'appâtage sécurisés (protégeant les enfants et animaux) et procédons à l'obstruction des passages (rebouchage) pour éviter toute récidive.
                        </p>

                        <h3>Solutions pour les Professionnels (CHR)</h3>
                        <p>
                            Restaurants, boulangeries et hôtels du 77 : nous proposons des contrats de dératisation annuels conformes aux normes HACCP pour garantir l'hygiène de votre établissement devant les organismes de contrôle.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
