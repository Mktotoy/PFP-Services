import { Phone } from 'lucide-react';
import Image from 'next/image';
import { ServiceHero } from '@/components/blocks/ServiceHero';
import styles from './page.module.css';

export const metadata = {
    title: "Contactez PFP Services | Devis gratuit dératisation 77",
    alternates: { canonical: '/contact' },
    description: "Contactez PFP Services pour une intervention rapide à Melun, Fontainebleau et dans le 77. Devis gratuit pour dératisation, désinsectisation.",
};

export default function ContactPage() {
    return (
        <main>
            <div className={styles.heroWrap}>
                <ServiceHero
                    title="Contactez-nous"
                    subtitle="Devis gratuit, réponse rapide, 7j/7 en Seine-et-Marne et départements limitrophes."
                    ctaLabel="Appeler le 06 29 95 32 62"
                    ctaHref="tel:0629953262"
                />
                <Image
                    src="/images/logos/pfp-services-logo.webp"
                    alt="Logo PFP Services"
                    width={499}
                    height={500}
                    className={styles.heroLogo}
                    priority
                />
            </div>

            <section className="container section">
                <div className={styles.grid}>
                    <div>
                        <h2 className={styles.heading}>Nos coordonnées</h2>
                        <ul className={styles.coordinates}>
                            <li><strong>PFP Services</strong></li>
                            <li>
                                <strong>Téléphone :</strong>{' '}
                                <a href="tel:0629953262" className={styles.link}>06 29 95 32 62</a>
                            </li>
                            <li>
                                <strong>Email :</strong> contact@pfp-services.fr
                            </li>
                            <li>
                                <strong>Facebook :</strong>{' '}
                                <a
                                    href="https://www.facebook.com/PFP.Services77"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    PFP.Services77
                                </a>
                            </li>
                        </ul>

                        <div className={styles.zoneBox}>
                            <h3 className={styles.zoneTitle}>Zone d’intervention</h3>
                            <p>
                                Nous intervenons en Seine-et-Marne et départements limitrophes, mais sommes également en capacité d’intervenir bien plus loin. Nous contacter, peu importe votre localisation, pour un devis gratuit.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.heading}>Demander un devis gratuit</h2>

                        <a href="tel:0629953262" className={`btn btn-primary ${styles.callButton}`}>
                            <Phone size={20} /> Appeler le 06 29 95 32 62
                        </a>

                        <form
                            action="mailto:contact@pfp-services.fr"
                            method="post"
                            encType="text/plain"
                            className={styles.form}
                        >
                            <label className={styles.label} htmlFor="nom">Votre nom</label>
                            <input
                                className={styles.input}
                                id="nom"
                                name="Nom"
                                type="text"
                                autoComplete="name"
                                required
                            />

                            <label className={styles.label} htmlFor="email">Votre email</label>
                            <input
                                className={styles.input}
                                id="email"
                                name="Email"
                                type="email"
                                autoComplete="email"
                                required
                            />

                            <label className={styles.label} htmlFor="telephone">Votre téléphone</label>
                            <input
                                className={styles.input}
                                id="telephone"
                                name="Telephone"
                                type="tel"
                                autoComplete="tel"
                                required
                            />

                            <label className={styles.label} htmlFor="message">Votre message</label>
                            <textarea
                                className={styles.textarea}
                                id="message"
                                name="Message"
                                rows={5}
                                required
                            />

                            <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem', fontSize: '1rem' }}>
                                Envoyer ma demande
                            </button>
                        </form>

                        <p className={styles.formNote}>
                            L’envoi ouvre votre logiciel de messagerie avec la demande pré-remplie, à destination de contact@pfp-services.fr. Si rien ne se passe, appelez-nous directement au 06 29 95 32 62.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
