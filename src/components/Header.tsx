import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logos/logo.png" alt="PFP Services" style={{ height: '60px', width: 'auto' }} />
                </Link>

                <nav className={styles.nav}>
                    <div className={styles.dropdownParent}>
                        <Link href="/nettoyage-toiture" className={styles.link}>
                            Toiture <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/nettoyage-toiture/demoussage" className={styles.dropdownItem}>Démoussage</Link>
                            <Link href="/nettoyage-toiture/hydrofuge" className={styles.dropdownItem}>Hydrofuge</Link>
                            <Link href="/nettoyage-toiture" className={styles.dropdownItem} style={{ fontWeight: '700' }}>Expertise Toiture</Link>
                        </div>
                    </div>

                    <div className={styles.dropdownParent}>
                        <Link href="/nuisibles" className={styles.link}>
                            Nuisibles <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/nuisibles/rats-souris" className={styles.dropdownItem}>Rats & Souris</Link>
                            <Link href="/nuisibles/guepes-frelons" className={styles.dropdownItem}>Guêpes & Frelons</Link>
                            <Link href="/nuisibles" className={styles.dropdownItem} style={{ fontWeight: '700' }}>Expertise Nuisibles</Link>
                        </div>
                    </div>

                    <Link href="/zones" className={styles.link}>Zones d'Intervention</Link>
                    <Link href="/realisations" className={styles.link}>Réalisations</Link>
                </nav>

                <div className={styles.actions}>
                    <a href="tel:0629953262" className={styles.phoneLink}>
                        <span className={styles.icon}>📞</span> 06 29 95 32 62
                    </a>
                    <Link href="/contact" className="btn btn-primary">
                        Contact & Devis
                    </Link>
                </div>
            </div>
        </header>
    );
}
