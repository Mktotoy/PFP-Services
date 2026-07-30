import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Qui Sommes-Nous ? | PFP Services - Expert Anti-Nuisibles 77",
    alternates: { canonical: '/qui-sommes-nous' },
    description: "Découvrez l'histoire de PFP Services, d'apiculteurs passionnés à experts en dératisation et désinsectisation en Seine-et-Marne.",
};

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Découvrez qui nous sommes</h1>
                    <p className={styles.subtitle}>Une vocation, une expertise, une équipe à votre service.</p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.storyGrid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Chez PFP Services</h2>
                        <h3 className={styles.subHeading}>Si vous souhaitez en savoir un peu + sur nous...</h3>

                        <p>
                            <strong>PFP Services, c’est avant tout une vocation.</strong> Initialement apiculteurs, nous nous sommes très rapidement spécialisés dans tout ce qui touche aux guêpes et frelons dans un souci de préservation de l'écosystème et de l'environnement.
                        </p>
                        <p>
                            Depuis plusieurs années maintenant, nous avons fait le choix d'étendre notre champ d'actions pour vous proposer des prestations d'éradication de tous les nuisibles : rats, cafards, chenilles processionnaires, punaises de lit, taupes, fourmis...
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                Soucieux de donner le meilleur service à nos clients, <strong>votre satisfaction est notre priorité</strong>. Forts de plusieurs années d’expérience, nous maîtrisons parfaitement notre métier. Nous intervenons avec rigueur et sérieux pour effectuer une prestation de qualité qui répondra à vos attentes.
                            </p>
                        </div>

                        <p>
                            Nous proposons nos services aussi bien aux particuliers qu’aux professionnels et aux collectivités, et nous nous déplaçons bien sûr sur site afin d’établir un devis personnalisé des prestations à réaliser.
                        </p>

                        <p>
                            Nos certifications au <strong><a href="https://www.apiculture77.fr/gdsa/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GDSA 77</a></strong> et <strong><a href="https://fredon.fr/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>FREDON Île-de-France</a></strong> sont une garantie de la qualité de notre travail.
                        </p>

                        <p>
                            Enfin, nous sommes également équipés afin de vous proposer des prestations de démoussage de toiture, ramonage et débistrage de vos conduits, en conformité avec les normes <strong>COSTIC</strong>.
                        </p>

                        <div className={styles.contactSection}>
                            <p>
                                Nous sommes joignables <strong>7j/7</strong>, aussi bien par téléphone que par mail ou via nos réseaux sociaux. N'hésitez d'ailleurs pas à nous suivre : <strong>PFP Services77</strong>
                            </p>
                            <p>A bientôt ! <br /> <em>L'équipe PFP Services.</em></p>

                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
                                Contactez-nous
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageSide}>
                        <div className={styles.imageContainer}>
                            <img
                                src="/images/team/about.jpg"
                                alt="L'équipe PFP Services en intervention"
                                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', boxShadow: 'var(--shadow-lg)' }}
                            />
                            <p className={styles.caption}>Intervention pour récupérer un essaim d'abeilles</p>
                        </div>

                        <div className={styles.certifications}>
                            <a href="https://certibiocide.din.developpement-durable.gouv.fr/" target="_blank" rel="noopener noreferrer" className={styles.certBadge} style={{ textDecoration: 'none', color: 'inherit' }}>Certibiocide</a>
                            <a href="https://www.apiculture77.fr/gdsa/" target="_blank" rel="noopener noreferrer" className={styles.certBadge} style={{ textDecoration: 'none', color: 'inherit' }}>GDSA 77</a>
                            <a href="https://fredon.fr/" target="_blank" rel="noopener noreferrer" className={styles.certBadge} style={{ textDecoration: 'none', color: 'inherit' }}>FREDON IDF</a>
                            <span className={styles.certBadge} style={{ color: 'inherit' }}>COSTIC</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
