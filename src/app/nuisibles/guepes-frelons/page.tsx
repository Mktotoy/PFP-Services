import { Metadata } from 'next';
import styles from './page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Destruction Nid de Guêpes & Frelons 77 | Intervention Rapide",
    description: "Urgence destruction nids de guêpes et frelons (asiatiques) dans le 77. Intervention sécurisée 7j/7 à Melun, Fontainebleau, Meaux. Devis gratuit.",
};

export default function GuepesFrelonsSubPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services - Guêpes & Frelons" />
            
            <section className={styles.hero} style={{ background: '#f59e0b', color: 'black' }}>
                <div className="container">
                    <h1 className={styles.title}>Destruction Nids de Guêpes & Frelons</h1>
                    <p className={styles.subtitle}>
                        Neutralisation immédiate de nids dangereux. Intervention 7j/7.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Une intervention sécurisée pour les nids d'hyménoptères</h2>
                        <p>
                            Ne tentez pas de détruire un nid vous-même. Les piqûres multiples de frelons asiatiques ou de guêpes peuvent provoquer des chocs anaphylactiques graves. Nous disposons des combinaisons et des perches télescopiques nécessaires pour traiter les nids jusqu'à 20 mètres de hauteur.
                        </p>

                        <h3>Action rapide et garantie</h3>
                        <p>
                            Nous utilisons des produits foudroyants qui neutralisent le nid en quelques minutes. Si le nid est encore actif 48h après notre passage, nous revenons gratuitement. 
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
