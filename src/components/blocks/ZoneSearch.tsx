'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ZoneSearch.module.css';

const ZONE_MAPPING: Record<string, string> = {
  '77': '/zones/77-seine-et-marne',
  '91': '/zones/91-essonne',
  '89': '/zones/89-yonne',
  '45': '/zones/45-loiret',
};

export const ZoneSearch: React.FC = () => {
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const dept = zip.substring(0, 2);
    
    if (ZONE_MAPPING[dept]) {
      router.push(ZONE_MAPPING[dept]);
    } else if (zip === '77300' || zip.toLowerCase() === 'fontainebleau') {
        router.push('/zones/fontainebleau');
    } else {
      setError('Désolé, nous ne couvrons pas encore cette zone ou le code est invalide.');
    }
  };

  return (
    <div className={styles.container}>
      <h3>Vérifiez si nous intervenons chez vous</h3>
      <form onSubmit={handleSearch} className={styles.form}>
        <input 
          type="text" 
          placeholder="Entrez votre code postal (ex: 77000)" 
          value={zip}
          onChange={(e) => {
              setZip(e.target.value);
              setError('');
          }}
          className={styles.input}
          maxLength={10}
        />
        <button type="submit" className="btn btn-primary">Vérifier</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
