import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    image?: string; // Optional for now
    slug: string;
}

export default function ServiceCard({ title, image, slug }: ServiceCardProps) {
    return (
        <Link href={`/services/${slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
                {/* Placeholder gradient if no image */}
                <div className={styles.placeholder} style={image ? { backgroundImage: `url(${image})` } : {}}></div>
                <div className={styles.overlay}>
                    <span className={styles.label}>{title}</span>
                </div>
            </div>
        </Link>
    );
}
