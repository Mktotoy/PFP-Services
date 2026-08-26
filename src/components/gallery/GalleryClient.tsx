'use client';

import { useState } from 'react';
import styles from '../../app/galerie/page.module.css';
import {
    galleryImages,
    getCategoryLabel,
    getNonEmptyCategories,
    type GalleryCategoryId,
} from './galleryData';

type Filter = 'all' | GalleryCategoryId;

export default function GalleryClient() {
    const [filter, setFilter] = useState<Filter>('all');

    // Les categories vides sont masquees tant qu'aucune photo ne leur est associee.
    const categories = getNonEmptyCategories();

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter);

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Galerie photos</h1>
                    <p className={styles.subtitle}>
                        Découvrez nos interventions sur le terrain.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.filterContainer}>
                    <button
                        type="button"
                        className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Tout voir
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={`${styles.filterBtn} ${filter === category.id ? styles.active : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {filteredImages.length === 0 ? (
                    <p className={styles.emptyState}>
                        Les photos de cette catégorie arrivent prochainement.
                    </p>
                ) : (
                    <div className={styles.galleryGrid}>
                        {filteredImages.map((image) => (
                            <div key={image.src} className={styles.galleryItem}>
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className={styles.overlay}>
                                    <span className={styles.itemCategory}>
                                        {getCategoryLabel(image.category)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
