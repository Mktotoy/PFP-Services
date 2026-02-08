import styles from './GoogleReviewsBadge.module.css';

interface GoogleReviewsBadgeProps {
    onClick?: () => void;
}

export default function GoogleReviewsBadge({ onClick }: GoogleReviewsBadgeProps) {
    if (onClick) {
        return (
            <div onClick={onClick} className={styles.container} style={{ cursor: 'pointer' }}>
                <div className={styles.logo}>
                    <span className={styles.gLogo}>G</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.stars}>★★★★★</div>
                    <div className={styles.text}>
                        <strong>5.0/5</strong> sur Google
                    </div>
                </div>
            </div>
        );
    }

    return (
        <a
            href="https://g.page/r/CdERc9GXbKp-EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.container}
        >
            <div className={styles.logo}>
                <span className={styles.gLogo}>G</span>
            </div>
            <div className={styles.content}>
                <div className={styles.stars}>★★★★★</div>
                <div className={styles.text}>
                    <strong>5.0/5</strong> sur Google
                </div>
            </div>
        </a>
    );
}
