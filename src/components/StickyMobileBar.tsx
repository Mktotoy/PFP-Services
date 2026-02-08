import Link from 'next/link';
import styles from './StickyMobileBar.module.css';

export default function StickyMobileBar() {
    return (
        <div className={styles.container}>
            <a href="tel:0629953262" className={`${styles.btn} ${styles.callBtn}`}>
                📞 Appeler
            </a>
            <Link href="/contact" className={`${styles.btn} ${styles.quoteBtn}`}>
                📅 Devis
            </Link>
        </div>
    );
}
