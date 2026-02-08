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
                    <Link href="/qui-sommes-nous" className={styles.link}>Qui sommes-nous</Link>

                    <div className={styles.dropdownParent}>
                        <Link href="/services" className={styles.link}>
                            Nos Solutions <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/services/rongeurs" className={styles.dropdownItem}>Rats & Souris</Link>
                            <Link href="/services/guepes-frelons" className={styles.dropdownItem}>Guêpes & Frelons</Link>
                            <Link href="/services/cafards" className={styles.dropdownItem}>Cafards & Blattes</Link>
                            <Link href="/services/chenilles" className={styles.dropdownItem}>Chenilles Processionnaires</Link>
                            <Link href="/services/ramonage" className={styles.dropdownItem}>Ramonage & Débistrage</Link>
                            <Link href="/services/taupes" className={styles.dropdownItem}>Taupes & Nuisibles</Link>
                            <Link href="/services/demoussage" className={styles.dropdownItem}>Démoussage Toiture</Link>
                            <div style={{ height: '1px', background: '#eee', margin: '5px 0' }}></div>
                            <Link href="/services" className={styles.dropdownItem} style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>Voir tout</Link>
                        </div>
                    </div>

                    <Link href="/zones" className={styles.link}>Zones d'Intervention</Link>
                    <Link href="/galerie" className={styles.link}>Galerie</Link>
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
