import { Metadata } from 'next';
import styles from '../_shared.module.css';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Dératisation & Démoussage Seine-et-Marne (77) | PFP Services",
    description: "Entreprise de proximité intervenant dans toute la Seine-et-Marne (77). Dératisation, destruction nids de guêpes, nettoyage de toiture à Melun, Meaux, Chelles, Pontault-Combault.",
};

export default function Zone77Page() {
    return (
        <main className={styles.main}>
            <LocalBusinessSchema region="77" name="PFP Services Seine-et-Marne" />
            
            <section className={styles.hero} style={{ background: '#1e3a8a' }}>
                <div className="container">
                    <h1 className={styles.title}>Intervention Rapide en Seine-et-Marne (77)</h1>
                    <p className={styles.subtitle}>
                        Votre expert local en Démoussage et Dératisation à Melun, Meaux et tout le département 77.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>PFP Services : Votre Partenaire de Proximité dans le 77</h2>
                        <p>
                            Basée au cœur de la Seine-et-Marne, l'entreprise <strong>PFP Services</strong> connaît parfaitement les problématiques locales. Que vous habitiez une maison briarde nécessitant un démoussage de toiture ou que vous gériez un commerce à Melun confronté à des nuisibles, nous intervenons avec réactivité.
                        </p>

                        <h3>Villes Desservies en Seine-et-Marne</h3>
                        <p>Nous couvrons l'intégralité du département, notamment :</p>
                        <ul className={styles.steps}>
                            <li><strong>Melun & Agglomération :</strong> Dammarie-les-Lys, Le Mée-sur-Seine.</li>
                            <li><strong>Fontainebleau & Sud 77 :</strong> Nemours, Montereau-Fault-Yonne.</li>
                            <li><strong>Meaux & Nord 77 :</strong> Lagny-sur-Marne, Mitry-Mory.</li>
                            <li><strong>Marne-la-Vallée :</strong> Chessy, Serris, Bussy-Saint-Georges.</li>
                        </ul>

                        <h3>Pourquoi faire appel à un expert du 77 ?</h3>
                        <p>
                            Faire appel à un artisan local vous garantit une intervention plus rapide, notamment pour les urgences "Guêpes et Frelons" en période estivale, et une connaissance des types de toitures (tuiles terre cuite, béton) spécifiques à notre région.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.quoteBox}>
                            <h3>Intervention Express 77</h3>
                            <p>Nous sommes déjà peut-être dans votre ville !</p>
                            <a href="tel:0629953262" className="btn btn-primary" style={{ width: '100%' }}>06 29 95 32 62</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos Services en Seine-et-Marne</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    <ServiceCard title="Démoussage Toiture" slug="/services/demoussage" image="/images/services/demoussage/toiture-nettoyage.jpg" />
                    <ServiceCard title="Dératisation" slug="/services/rongeurs" image="/images/services/rongeurs/rongeurs-infestation.jpg" />
                    <ServiceCard title="Nids de Guêpes" slug="/services/guepes-frelons" image="/images/services/guepes-frelons/frelons-arbre.jpg" />
                </div>
            </section>
        </main>
    );
}
