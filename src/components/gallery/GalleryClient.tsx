'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';
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
    // Position dans la liste FILTREE : le visualiseur ne navigue que dans
    // les photos visibles, pas dans les 96 du fonds.
    const [opened, setOpened] = useState<number | null>(null);

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
                        aria-pressed={filter === 'all'}
                        onClick={() => { setFilter('all'); setOpened(null); }}
                    >
                        Tout voir
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={`${styles.filterBtn} ${filter === category.id ? styles.active : ''}`}
                            aria-pressed={filter === category.id}
                            onClick={() => { setFilter(category.id); setOpened(null); }}
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
                        {filteredImages.map((image, position) => (
                            <button
                                key={image.src}
                                type="button"
                                className={styles.galleryItem}
                                onClick={() => setOpened(position)}
                                aria-label={`Agrandir : ${image.alt}`}
                            >
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className={styles.overlay}>
                                    <span className={styles.itemCategory}>
                                        {getCategoryLabel(image.category)}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {opened !== null && filteredImages[opened] && (
                <Lightbox
                    images={filteredImages}
                    index={opened}
                    categoryLabel={getCategoryLabel(filteredImages[opened].category)}
                    onClose={() => setOpened(null)}
                    onNavigate={setOpened}
                />
            )}
        </main>
    );
}
