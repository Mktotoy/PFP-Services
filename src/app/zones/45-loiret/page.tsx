import { Metadata } from 'next';
import styles from '../_shared.module.css';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Démoussage Toiture & Dératisation Loiret (45) | PFP Services",
    alternates: { canonical: '/zones/45-loiret' },
    description: "PFP Services intervient dans le Loiret (45). Nettoyage de toiture, hydrofuge et lutte contre les nuisibles à Montargis, Gien et environs. Devis gratuit.",
};

export default function Zone45Page() {
    return (
        <main className={styles.main}>
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Zones d\'Intervention', url: 'https://pfp-services.fr/zones' },
                    { name: 'Loiret (45)', url: 'https://pfp-services.fr/zones/45-loiret' },
                ]}
            />
            
            <section className={styles.hero} style={{ background: '#1e3a8a' }}>
                <div className="container">
                    <h1 className={styles.title}>Expert Toiture & Nuisibles dans le Loiret (45)</h1>
                    <p className={styles.subtitle}>
                        Intervention rapide à Montargis, Gien et dans tout l'Est du Loiret.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Votre Partenaire Entretien Habitat dans le 45</h2>
                        <p>
                            <strong>PFP Services</strong> assure désormais des interventions régulières dans le département du Loiret (45). Nous mettons notre expertise au service des propriétaires souhaitant protéger leur toiture ou éradiquer une infestation de nuisibles.
                        </p>

                        <h3>Zones Desservies dans le Loiret</h3>
                        <ul className={styles.steps}>
                            <li><strong>Montargis & Alentours :</strong> Châlette-sur-Loing, Villemandeur, Amilly.</li>
                            <li><strong>Giennois :</strong> Gien, Briare.</li>
                            <li><strong>Est du Loiret :</strong> Courtenay, Châtillon-Coligny.</li>
                        </ul>

                        <h3>Urgence Nuisibles 45</h3>
                        <p>
                            Un nid de frelons dans votre jardin à Montargis ? Des rats dans vos dépendances ? Nous intervenons rapidement avec des solutions certifiées Certibiocide pour une tranquillité retrouvée.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Devis Gratuit Loiret</h3>
                            <p>Contactez-nous pour un diagnostic de votre toiture dans le 45.</p>
                            <a href="tel:0629953262" className="btn btn-primary" style={{ width: '100%' }}>06 29 95 32 62</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
