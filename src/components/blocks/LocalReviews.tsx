import React from 'react';
import { googleReviews, Review } from '@/data/reviews';
import StarRating from '@/components/StarRating';
import styles from './LocalReviews.module.css';

interface LocalReviewsProps {
  category?: 'toiture' | 'nuisibles' | 'ramonage';
  title?: string;
  limit?: number;
}

export const LocalReviews: React.FC<LocalReviewsProps> = ({ 
  category, 
  title = "Ce que nos clients disent",
  limit = 3
}) => {
  const filteredReviews = category 
    ? googleReviews.filter(r => r.category === category)
    : googleReviews;

  const displayReviews = filteredReviews.slice(0, limit);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {displayReviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.author}>{review.author}</span>
              <div className={styles.stars}>
                <StarRating rating={review.rating} size={14} />
              </div>
            </div>
            <p className={styles.text}>"{review.text}"</p>
            <span className={styles.date}>{review.date}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <a 
          href="https://www.google.com/search?q=PFP+Services+Melun+avis#lrd=0x47e5fa2b234ef9fd:0x6f699042c8d28e75,1" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.googleButton}
        >
          <span className={styles.googleIcon}>G</span>
          Voir tous nos avis sur Google
        </a>
      </div>
    </section>
  );
};
