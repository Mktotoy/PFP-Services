import styles from './FloatingCallButton.module.css';

export default function FloatingCallButton() {
    return (
        <a href="tel:0629953262" className={styles.floatBtn} aria-label="Appeler PFP Services">
            <span className={styles.icon}>📞</span>
            <span className={styles.text}>Appeler</span>
        </a>
    );
}
