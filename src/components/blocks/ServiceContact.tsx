import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './ServiceSidebar.module.css';

type ServiceContactProps = {
    intro?: string;
};

export function ServiceContact({
    intro = "Une question, un doute sur votre situation ? Appelez-nous directement, ou écrivez-nous depuis la page contact.",
}: ServiceContactProps) {
    return (
        <div className={styles.contactBox}>
            <h3>Nous contacter</h3>
            <p>{intro}</p>

            <a href="tel:0629953262" className={`btn btn-primary ${styles.fullBtn}`}>
                <Phone size={18} />
                06 29 95 32 62
            </a>

            <Link href="/contact" className={`btn btn-secondary ${styles.fullBtn}`}>
                Nous écrire
            </Link>
        </div>
    );
}
