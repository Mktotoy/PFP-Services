import Link from 'next/link';
import styles from './ServiceHero.module.css';

const FALLBACK_PATTERN =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/** Voile par defaut : aplat vert dense, suffisant pour du texte blanc centre. */
const DEFAULT_OVERLAY = 'linear-gradient(rgba(4, 109, 23, 0.7), rgba(4, 109, 23, 0.7))';

type ServiceHeroProps = {
    title: string;
    subtitle: React.ReactNode;
    image?: string;
    ctaLabel?: string;
    ctaHref?: string;
    /**
     * Voile applique par-dessus la photo. A alleger quand le sujet de l'image
     * porte du detail a preserver (livree de vehicule, avant/apres), l'aplat
     * par defaut l'effacant presque entierement.
     */
    overlay?: string;
};

export function ServiceHero({
    title,
    subtitle,
    image,
    ctaLabel = 'Devis Gratuit',
    ctaHref = '/contact',
    overlay = DEFAULT_OVERLAY,
}: ServiceHeroProps) {
    const backgroundImage = image ? `url('${image}')` : `url("${FALLBACK_PATTERN}")`;

    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: `${overlay}, ${backgroundImage}` }}
        >
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.heroActions}>
                    <Link href={ctaHref} className="btn btn-primary">{ctaLabel}</Link>
                </div>
            </div>
        </section>
    );
}
