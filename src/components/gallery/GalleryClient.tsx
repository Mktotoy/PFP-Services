'use client';

import { useState } from 'react';
import styles from '../../app/galerie/page.module.css';

// Define image data structure
type GalleryImage = {
    id: number;
    src: string;
    category: 'rongeurs' | 'insectes' | 'ramonage' | 'divers';
    title: string;
};

const images: GalleryImage[] = [
    // Rongeurs
    { id: 1, src: '/images/services/rongeurs/rongeurs-infestation.jpg', category: 'rongeurs', title: 'Infestation de rongeurs' },
    { id: 2, src: '/images/services/rongeurs/rongeurs-pieges.jpg', category: 'rongeurs', title: 'Pièges sécurisés' },
    { id: 3, src: '/images/services/rongeurs/rongeurs-excrements.jpg', category: 'rongeurs', title: 'Traces de passage' },
    { id: 4, src: '/images/services/rongeurs/rongeurs-colonie.jpg', category: 'rongeurs', title: 'Colonie de nuisibles' },

    // Insectes (Guêpes, Frelons, Chenilles)
    { id: 5, src: '/images/services/guepes-frelons/frelons-arbre.jpg', category: 'insectes', title: 'Nid de frelons asiatiques' },
    { id: 6, src: '/images/services/guepes-frelons/frelons-combles.jpg', category: 'insectes', title: 'Nid sous toiture' },
    { id: 7, src: '/images/services/guepes-frelons/frelons-detruits.jpg', category: 'insectes', title: 'Nid détruit' },
    { id: 8, src: '/images/services/guepes-frelons/frelons-intervention.jpg', category: 'insectes', title: 'Intervention sécurisée' },
    { id: 9, src: '/images/services/chenilles/chenilles-nid.jpg', category: 'insectes', title: 'Cocon de chenilles' },
    { id: 10, src: '/images/services/chenilles/chenilles-intervention.jpg', category: 'insectes', title: 'Pose d\'écopiège' },

    // Ramonage & Toiture
    { id: 11, src: '/images/services/ramonage/ramonage-poele-allume.jpg', category: 'ramonage', title: 'Poêle après entretien' },
    { id: 12, src: '/images/services/ramonage/ramonage-conduit.jpg', category: 'ramonage', title: 'Inspection conduit' },
    { id: 13, src: '/images/services/ramonage/ramonage-bistre-1.jpg', category: 'ramonage', title: 'Retrait de bistre' },
    { id: 14, src: '/images/services/demoussage/toiture-mousse.jpg', category: 'ramonage', title: 'Toiture avant nettoyage' },
    { id: 15, src: '/images/services/demoussage/toiture-nettoyage.jpg', category: 'ramonage', title: 'Nettoyage toiture' },

    // Divers
    { id: 16, src: '/images/team/tenue-pro.jpg', category: 'divers', title: 'Équipement professionnel' },
    { id: 17, src: '/images/team/about.jpg', category: 'divers', title: 'Notre Équipe' },
];

export default function GalleryClient() {
    const [filter, setFilter] = useState<'all' | 'rongeurs' | 'insectes' | 'ramonage' | 'divers'>('all');

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Galerie Photo</h1>
                    <p className={styles.subtitle}>
                        Découvrez nos interventions sur le terrain en Seine-et-Marne.
                        Avant/Après, nids impressionnants et nos équipes à l'oeuvre.
                    </p>
                </div>
            </section>

            <section className="container section">
                <div className={styles.filterContainer}>
                    <button
                        className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Tout voir
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'rongeurs' ? styles.active : ''}`}
                        onClick={() => setFilter('rongeurs')}
                    >
                        Rats & Souris
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'insectes' ? styles.active : ''}`}
                        onClick={() => setFilter('insectes')}
                    >
                        Insectes
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'ramonage' ? styles.active : ''}`}
                        onClick={() => setFilter('ramonage')}
                    >
                        Ramonage & Toiture
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === 'divers' ? styles.active : ''}`}
                        onClick={() => setFilter('divers')}
                    >
                        Divers
                    </button>
                </div>

                <div className={styles.galleryGrid}>
                    {filteredImages.map((image) => (
                        <div key={image.id} className={styles.galleryItem}>
                            <img src={image.src} alt={image.title} loading="lazy" />
                            <div className={styles.overlay}>
                                <span className={styles.itemCategory}>
                                    {image.category === 'rongeurs' && 'Rongeurs'}
                                    {image.category === 'insectes' && 'Guêpes, Frelons & Chenilles'}
                                    {image.category === 'ramonage' && 'Chauffage & Toiture'}
                                    {image.category === 'divers' && 'Vie de l\'entreprise'}
                                </span>
                                <span className={styles.itemTitle}>{image.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
