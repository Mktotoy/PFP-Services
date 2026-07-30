import { Metadata } from 'next';
import styles from '../_shared.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Dératisation & Nettoyage Toiture Yonne (89) | PFP Services",
    alternates: { canonical: '/zones/89-yonne' },
    description: "Intervention rapide dans l'Yonne (89). Expert en démoussage de toiture et lutte anti-nuisibles à Sens, Auxerre et alentours. Devis gratuit sous 24h.",
};

export default function Zone89Page() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="89" name="PFP Services Yonne" />
            
            <section className={styles.hero} style={{ background: '#1e3a8a' }}>
                <div className="container">
                    <h1 className={styles.title}>Votre Expert Toiture & Nuisibles dans l'Yonne (89)</h1>
                    <p className={styles.subtitle}>
                        Démoussage de toiture et dératisation professionnelle à Sens, Auxerre et tout le 89.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>PFP Services intervient désormais dans l'Yonne</h2>
                        <p>
                            Fruit de notre développement, nous proposons désormais nos services de **démoussage de toiture** et de **dératisation** dans le département de l'Yonne (89). Nous intervenons principalement sur l'axe Sens - Auxerre pour les particuliers et les professionnels.
                        </p>

                        <h3>Nos zones d'intervention dans le 89</h3>
                        <ul className={styles.steps}>
                            <li><strong>Sénonais :</strong> Sens, Pont-sur-Yonne, Villeneuve-sur-Yonne.</li>
                            <li><strong>Auxerrois :</strong> Auxerre, Monéteau, Saint-Georges-sur-Baulche.</li>
                            <li><strong>Nord-Yonne :</strong> Joigny, Migennes.</li>
                        </ul>

                        <h3>Expertise Toiture en Milieu Rural</h3>
                        <p>
                            Les habitations de l'Yonne sont souvent entourées de végétation, ce qui accélère la formation de mousse sur les toits. Notre technique de brossage manuel est idéale pour préserver le charme des maisons anciennes tout en assurant une protection hydrofuge durable.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Besoin d'un Pro dans le 89 ?</h3>
                            <p>Déplacement sans frais kilométriques zone Sens/Auxerre.</p>
                            <a href="tel:0629953262" className="btn btn-primary" style={{ width: '100%' }}>06 29 95 32 62</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
