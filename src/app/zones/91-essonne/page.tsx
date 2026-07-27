import { Metadata } from 'next';
import styles from '../_shared.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Nettoyage Toiture & Dératisation Essonne (91) | PFP Services",
    description: "Intervention rapide dans l'Essonne (91) pour vos problèmes de nuisibles et l'entretien de votre toiture. Expert local à Évry, Corbeil-Essonnes, Étampes.",
};

export default function Zone91Page() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="91" name="PFP Services Essonne" />
            
            <section className={styles.hero} style={{ background: '#1e3a8a' }}>
                <div className="container">
                    <h1 className={styles.title}>Service Proxi dans l'Essonne (91)</h1>
                    <p className={styles.subtitle}>
                        Démoussage de toiture et lutte anti-nuisibles à Évry, Étampes et Sud-Essonne.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Votre Expert Démoussage & Nuisibles dans le 91</h2>
                        <p>
                            <strong>PFP Services</strong> étend son savoir-faire dans l'Essonne. Nous intervenons régulièrement dans le Sud-Essonne, autour de Milly-la-Forêt et Étampes, mais aussi dans les zones plus urbaines comme Évry-Courcouronnes.
                        </p>

                        <h3>Intervention en Sud-Essonne</h3>
                        <p>
                            Spécialiste des toitures de caractère, nous proposons des solutions de démoussage manuel respectueuses des matériaux anciens, très présents dans le parc immobilier du Sud-Essonne.
                        </p>

                        <h3>Zones de couverture 91</h3>
                        <ul className={styles.steps}>
                            <li><strong>Grand Paris Sud :</strong> Évry, Corbeil-Essonnes, Ris-Orangis.</li>
                            <li><strong>Sud Essonne :</strong> Étampes, Milly-la-Forêt, Dourdan.</li>
                            <li><strong>Val d'Yerres Val de Seine :</strong> Montgeron, Yerres, Brunoy.</li>
                        </ul>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Besoin d'un Pro dans le 91 ?</h3>
                            <p>Déplacement gratuit pour devis en Essonne.</p>
                            <a href="tel:0629953262" className="btn btn-primary" style={{ width: '100%' }}>06 29 95 32 62</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
