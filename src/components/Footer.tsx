import Link from 'next/link';
import styles from './Footer.module.css';

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
                                <span style={{ fontSize: '1.5rem' }}>📘</span> Suivez-nous sur Facebook
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
                        <h3>Contact</h3>
                        <ul className={styles.contactInfo}>
                            <li>📍 22 Rue de la Salle, 77930 Cély</li>
                            <li>📞 <a href="tel:0629953262">06 29 95 32 62</a></li>
                            <li>✉️ <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a></li>
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
