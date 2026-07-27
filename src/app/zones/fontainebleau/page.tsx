import { Metadata } from 'next';
import styles from '../../nettoyage-toiture/page.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import { BeforeAfter } from '@/components/blocks/BeforeAfter';

export const metadata: Metadata = {
    title: "Démoussage Toiture Fontainebleau | Nettoyage Expert 77300",
    description: "PFP Services : Expert local du démoussage de toiture à Fontainebleau. Brossage manuel et traitement protecteur pour les toitures du Pays de Fontainebleau.",
};

export default function FontainebleauPage() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services Fontainebleau" />
            
            <section className={styles.hero} style={{ background: '#374151' }}>
                <div className="container">
                    <h1 className={styles.title}>Démoussage Toiture à Fontainebleau</h1>
                    <p className={styles.subtitle}>
                        L'entretien haute qualité pour les belles demeures du Pays de Fontainebleau.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Spécialiste Toiture à Fontainebleau (77300)</h2>
                        <p>
                            À <strong>Fontainebleau</strong>, l'architecture et les matériaux de couverture exigent un soin particulier. Mousses et lichens se développent rapidement à cause de la proximité de la forêt et de l'humidité ambiante.
                        </p>
                        <p>
                            Nous proposons aux Bellifontains un service de <strong>nettoyage de toiture haut de gamme</strong>, utilisant exclusivement le brossage manuel pour préserver les tuiles anciennes et les ardoises.
                        </p>

                        <BeforeAfter 
                            beforeImg="/images/services/demoussage/toiture-mousse.jpg"
                            afterImg="/images/services/demoussage/toiture-nettoyage.jpg"
                            altText="Démoussage toiture Fontainebleau"
                            city="Fontainebleau"
                        />
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Expert Local Fontainebleau</h3>
                            <p>Nous intervenons également à Avon, Samois-sur-Seine et Barbizon.</p>
                            <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Devis gratuit 77300</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import Link from 'next/link';
