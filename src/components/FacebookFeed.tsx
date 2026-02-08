'use client';

import { useEffect, useState } from 'react';
import styles from './FacebookFeed.module.css';

export default function FacebookFeed() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Suivez notre actualité sur Facebook</h2>
                    <p>Retrouvez nos dernières interventions et conseils sur notre page officielle.</p>
                </div>

                <div className={styles.feedContainer}>
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPFP.Services77&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="500"
                        height="600"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className={styles.iframe}
                    ></iframe>
                </div>

                <div className={styles.linkContainer}>
                    <a href="https://www.facebook.com/PFP.Services77" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Voir la page Facebook
                    </a>
                </div>
            </div>
        </section>
    );
}
