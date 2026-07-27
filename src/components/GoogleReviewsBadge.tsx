import styles from './GoogleReviewsBadge.module.css';
import StarRating from './StarRating';

interface GoogleReviewsBadgeProps {
    onClick?: () => void;
}

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=PFP+Services+Melun+avis#lrd=0x47e5fa2b234ef9fd:0x6f699042c8d28e75,1";

export default function GoogleReviewsBadge({ onClick }: GoogleReviewsBadgeProps) {
    const content = (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span className={styles.gLogo}>G</span>
            </div>
            <div className={styles.content}>
                <div className={styles.stars}><StarRating rating={5} size={14} /></div>
                <div className={styles.text}>
                    <strong>5.0/5</strong> sur Google
                </div>
            </div>
        </div>
    );

    if (onClick) {
        return (
            <div onClick={onClick} style={{ cursor: 'pointer' }}>
                {content}
            </div>
        );
    }

    return (
        <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            {content}
        </a>
    );
}
