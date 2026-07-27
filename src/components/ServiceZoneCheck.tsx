"use client";

import { useState } from 'react';
import { MapPin, CheckCircle2, XCircle } from 'lucide-react';
import styles from './ServiceZoneCheck.module.css';
import { checkServiceArea } from '@/data/serviceAreas';

export default function ServiceZoneCheck() {
    const [zip, setZip] = useState('');
    const [result, setResult] = useState<{ covered: boolean; city?: string } | null>(null);

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        setResult(checkServiceArea(zip));
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title} style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'center'}}><MapPin size={20} /> Testez votre éligibilité</h3>
            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                Entrez votre code postal pour savoir si nous intervenons chez vous.
            </p>

            <form onSubmit={handleCheck} className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Code Postal (ex: 77000)"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className={styles.input}
                    maxLength={5}
                />
                <button type="submit" className={styles.checkBtn}>
                    Vérifier
                </button>
            </form>

            {result && (
                <div className={`${styles.result} ${result.covered ? styles.success : styles.error}`}>
                    {result.covered ? (
                        <>
                            <span style={{ fontSize: '1.2rem', display: 'flex', alignItems:'center', gap:'6px', marginBottom: '5px' }}><CheckCircle2 size={20} /> Bonne nouvelle !</span>
                            Nous intervenons à <strong>{zip}</strong> ({result.city}) et ses alentours.
                            <div style={{ marginTop: '10px' }}>
                                <a href="tel:0629953262" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Appeler le technicien</a>
                            </div>
                        </>
                    ) : (
                        <>
                            <span style={{ fontSize: '1.2rem', display: 'flex', alignItems:'center', gap:'6px', marginBottom: '5px' }}><XCircle size={20} /> Hors Zone</span>
                            Désolé, nous n'intervenons pas encore dans le secteur <strong>{zip}</strong>.
                            <br />Nous nous concentrons sur le 77 et le sud 91.
                        </>
                    )}
                </div>
            )}

            <p className={styles.mapHint}>
                Zone principale : Melun, Fontainebleau, et tout le sud Seine-et-Marne.
            </p>
        </div>
    );
}
