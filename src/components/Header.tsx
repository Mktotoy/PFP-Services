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
                        <Link href="/services" className={styles.link}>
                            Entretien Toiture <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/services/demoussage" className={styles.dropdownItem}>Démoussage</Link>
                            <Link href="/services/ramonage" className={styles.dropdownItem}>Ramonage</Link>
                        </div>
                    </div>

                    <div className={styles.dropdownParent}>
                        <Link href="/services" className={styles.link}>
                            Nuisibles <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/services/rongeurs" className={styles.dropdownItem}>Rongeurs</Link>
                            <Link href="/services/guepes-frelons" className={styles.dropdownItem}>Guêpes & Frelons</Link>
                            <Link href="/services/cafards" className={styles.dropdownItem}>Cafards</Link>
                            <Link href="/services/chenilles" className={styles.dropdownItem}>Chenilles</Link>
                            <Link href="/services/taupes" className={styles.dropdownItem}>Taupes</Link>
                        </div>
                    </div>

                    <Link href="/zones" className={styles.link}>Zones d&apos;Intervention</Link>
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
