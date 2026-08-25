import Link from 'next/link';
import styles from './ServiceSidebar.module.css';

type ServiceDevisProps = {
    title: string;
    note?: string;
    intro: string;
    criteria: string[];
};

export function ServiceDevis({ title, note, intro, criteria }: ServiceDevisProps) {
    return (
        <div className={styles.devisBox}>
            <h3>{title}</h3>
            <p className={styles.price}>Sur devis</p>
            {note && <p className={styles.priceNote}>{note}</p>}

            <p className={styles.devisIntro}>{intro}</p>
            <ul className={styles.criteria}>
                {criteria.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>

            <Link href="/contact" className={`btn btn-secondary ${styles.fullBtn}`}>
                Demander mon devis
            </Link>
        </div>
    );
}
