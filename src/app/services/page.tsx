import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Nos Solutions & Méthodologie | PFP Services 77",
    description: "Découvrez notre méthodologie d'intervention (Diagnostic, Traitement, Suivi) et l'ensemble de nos services de dératisation et désinsectisation.",
};

export default function ServicesPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Nos Solutions & Expertise</h1>
                    <p className={styles.subtitle}>
                        Une approche méthodique pour une éradication durable.<br />
                        Nous intervenons avec précision pour protéger votre habitat.
                    </p>
                </div>
            </section>

            <section className={styles.processSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>Notre Méthodologie</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', color: 'var(--gray-600)' }}>
                        Chaque intervention suit un protocole strict pour garantir efficacité et sécurité.
                    </p>

                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Diagnostic</h3>
                            <p>Analyse complète des lieux pour identifier le nuisible, la cause et le degré d'infestation.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>Devis & Plan</h3>
                            <p>Proposition d'un traitement adapté (mécanique, chimique, préventif) et devis transparent.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>Traitement</h3>
                            <p>Intervention sécurisée par nos techniciens certifiés Certibiocide.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Suivi</h3>
                            <p>Contrôle post-intervention et conseils pour éviter toute récidive.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>🦟 Nuisibles & Parasites</h2>
                    <div className={styles.categoryGrid}>
                        <Link href="/services/rongeurs" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/rongeurs/rongeurs-infestation.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Rats & Souris</h3>
                                <p>Dératisation complète (préventif et curatif) pour stopper les dégâts.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                        <Link href="/services/guepes-frelons" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/guepes-frelons/frelons-arbre.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Guêpes & Frelons</h3>
                                <p>Destruction de nids et récupération d'essaims d'abeilles.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                        <Link href="/services/cafards" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/rongeurs/rongeurs-pieges.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Cafards & Blattes</h3>
                                <p>Traitement par gel et pulvérisation pour une éradication totale.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                        <Link href="/services/chenilles" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/chenilles/chenilles-nid.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Chenilles Processionnaires</h3>
                                <p>Échenillage et pose d'écopièges pour protéger vos arbres.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                        <Link href="/services/taupes" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/taupes/taupiniere.png')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Taupes</h3>
                                <p>Piégeage traditionnel mécanique (Taupier) sans danger pour l'environnement.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>🏠 Entretien de l'Habitat</h2>
                    <div className={styles.categoryGrid}>
                        <Link href="/services/ramonage" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/ramonage/ramonage-poele-allume.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Ramonage & Débistrage</h3>
                                <p>Entretien certifié de vos conduits de cheminée et poêles à bois.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                        <Link href="/services/demoussage" className={styles.serviceCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: "url('/images/services/demoussage/toiture-nettoyage.jpg')" }}></div>
                            <div className={styles.cardContent}>
                                <h3>Nettoyage Toiture</h3>
                                <p>Démoussage et traitement hydrofuge pour une toiture saine.</p>
                                <span className={styles.learnMore}>En savoir plus →</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Vous avez un doute sur le type de nuisible ?</p>
                    <Link href="/contact" className="btn btn-primary">
                        Contactez-nous pour un diagnostic
                    </Link>
                </div>
            </section>
        </main>
    );
}
