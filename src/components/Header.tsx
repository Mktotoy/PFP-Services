'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './Header.module.css';

function MobileDrawer({ isOpen, close }: { isOpen: boolean; close: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <>
            <div
                className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOverlayOpen : ''}`}
                onClick={close}
            />

            <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
                <button
                    type="button"
                    className={styles.drawerClose}
                    onClick={close}
                    aria-label="Fermer le menu"
                >
                    ✕
                </button>

                <nav className={styles.drawerNav}>
                    <p className={styles.drawerSectionTitle}>Nettoyage Toiture</p>
                    <p className={styles.drawerSubtitle}>Expert en démoussage</p>
                    <Link href="/services/demoussage" className={styles.drawerLink} onClick={close}>Démoussage</Link>

                    <Link href="/services/ramonage" className={styles.drawerLink} onClick={close}>Ramonage</Link>

                    <p className={styles.drawerSectionTitle}>Nuisibles</p>
                    <Link href="/services/rongeurs" className={styles.drawerLink} onClick={close}>Rongeurs</Link>
                    <Link href="/services/guepes-frelons" className={styles.drawerLink} onClick={close}>Guêpes & Frelons</Link>
                    <Link href="/services/cafards" className={styles.drawerLink} onClick={close}>Cafards</Link>
                    <Link href="/services/chenilles" className={styles.drawerLink} onClick={close}>Chenilles</Link>
                    <Link href="/services/taupes" className={styles.drawerLink} onClick={close}>Taupes</Link>

                    <div className={styles.drawerDivider} />

                    <Link href="/services" className={styles.drawerLink} onClick={close}>Toutes nos prestations</Link>
                    <Link href="/zones" className={styles.drawerLink} onClick={close}>Zones d&apos;Intervention</Link>
                    <Link href="/realisations" className={styles.drawerLink} onClick={close}>Réalisations</Link>
                    <Link href="/galerie" className={styles.drawerLink} onClick={close}>Galerie Photo</Link>
                    <Link href="/qui-sommes-nous" className={styles.drawerLink} onClick={close}>Qui Sommes-Nous</Link>
                    <Link href="/contact" className={styles.drawerLink} onClick={close}>Contact & Devis</Link>

                    <a href="tel:0629953262" className={styles.drawerPhone} onClick={close}>
                        <Phone size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: '4px' }} /> 06 29 95 32 62
                    </a>
                </nav>
            </div>
        </>,
        document.body
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={close}>
                    <img src="/images/logos/logo.png" alt="PFP Services" style={{ height: '60px', width: 'auto' }} />
                </Link>

                <nav className={styles.nav}>
                    <div className={styles.dropdownParent}>
                        <Link href="/services/demoussage" className={styles.link}>
                            Nettoyage Toiture <span style={{ fontSize: '0.7em', marginLeft: '4px' }}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/services/demoussage" className={styles.dropdownItem}>
                                Démoussage
                                <span className={styles.dropdownItemSubtitle}>Expert en démoussage</span>
                            </Link>
                        </div>
                    </div>

                    <Link href="/services/ramonage" className={styles.link}>Ramonage</Link>

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

                    <Link href="/realisations" className={styles.link}>Réalisations</Link>
                    <Link href="/qui-sommes-nous" className={styles.link}>Qui Sommes-Nous</Link>
                </nav>

                <div className={styles.actions}>
                    <a href="tel:0629953262" className={styles.phoneLink}>
                        <span className={styles.icon}><Phone size={18} /></span> 06 29 95 32 62
                    </a>
                    <Link href="/contact" className="btn btn-primary">
                        Contact & Devis
                    </Link>
                </div>

                <button
                    type="button"
                    className={styles.burger}
                    onClick={() => setIsOpen(true)}
                    aria-label="Ouvrir le menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <MobileDrawer isOpen={isOpen} close={close} />
        </header>
    );
}
