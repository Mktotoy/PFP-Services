import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

function FacebookIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>PFP Services</h3>
                        <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                            Expert en dératisation et lutte anti-nuisibles en Seine-et-Marne (77).
                            Intervention rapide pour particuliers et professionnels.
                        </p>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://www.facebook.com/PFP.Services77" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--white)', opacity: 0.9 }}>
                                <FacebookIcon /> Suivez-nous sur Facebook
                            </a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Nos Services</h3>
                        <ul>
                            <li><Link href="/services/rongeurs">Rats & Souris</Link></li>
                            <li><Link href="/services/guepes-frelons">Guêpes & Frelons</Link></li>
                            <li><Link href="/services/cafards">Cafards & Blattes</Link></li>
                            <li><Link href="/services/chenilles">Chenilles Processionnaires</Link></li>
                            <li><Link href="/services/taupes">Anti-Taupes</Link></li>
                            <li><Link href="/services/ramonage">Ramonage & Débistrage</Link></li>
                            <li><Link href="/services/demoussage">Nettoyage Toiture</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>L&apos;Entreprise</h3>
                        <ul>
                            <li><Link href="/qui-sommes-nous">Qui Sommes-Nous</Link></li>
                            <li><Link href="/services">Toutes nos prestations</Link></li>
                            <li><Link href="/realisations">Réalisations</Link></li>
                            <li><Link href="/galerie">Galerie Photo</Link></li>
                            <li><Link href="/zones">Zones d&apos;Intervention</Link></li>
                            <li><Link href="/zones/77-seine-et-marne">Seine-et-Marne (77)</Link></li>
                            <li><Link href="/zones/91-essonne">Essonne (91)</Link></li>
                            <li><Link href="/zones/89-yonne">Yonne (89)</Link></li>
                            <li><Link href="/zones/45-loiret">Loiret (45)</Link></li>
                            <li><Link href="/zones/fontainebleau">Fontainebleau</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact</h3>
                        <ul className={styles.contactInfo}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> 22 Rue de la Salle, 77930 Cély</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /> <a href="tel:0629953262">06 29 95 32 62</a></li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © {new Date().getFullYear()} PFP Services. Tous droits réservés. <Link href="/mentions-legales" style={{ color: 'inherit', textDecoration: 'underline' }}>Mentions Légales</Link>.
                </div>
            </div>
        </footer>
    );
}
