'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
  altText: string;
  city?: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ 
  beforeImg, 
  afterImg, 
  altText, 
  city 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const fullAltText = city ? `${altText} à ${city}` : altText;

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={afterImg}
          alt={`${fullAltText} - Après`}
          fill
          priority
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <div 
          className={styles.beforeImageWrapper} 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image 
            src={beforeImg} 
            alt={`${fullAltText} - Avant`} 
            fill 
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <div className={styles.labels}>
            <span className={styles.labelBefore}>Avant</span>
            <span className={styles.labelAfter}>Après</span>
        </div>
      </div>
    </div>
  );
};
