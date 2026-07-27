import { Phone } from 'lucide-react';
import styles from './StickyMobileBar.module.css';

export default function StickyMobileBar() {
    return (
        <a href="tel:0629953262" className={styles.callBtn} aria-label="Appeler PFP Services">
            <Phone size={22} fill="currentColor" strokeWidth={1.5} />
        </a>
    );
}
