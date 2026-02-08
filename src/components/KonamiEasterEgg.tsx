"use client";

import { useEffect, useState, useRef } from 'react';

// --- TYPES ---
type CritterType = 'bee' | 'mouse' | 'roach';

interface Critter {
    id: number;
    type: CritterType;
    baseY: number; // The central Y axis they follow
    x: number;
    speed: number;
    wobbleOffset: number; // To randomize the sine wave phase
}

interface Footprint {
    id: number;
    x: number;
    y: number;
    rotation: number;
    opacity: number;
    type: CritterType;
}

// --- ASSETS (Top Down Views) ---

const TopDownMouse = () => (
    <svg width="60" height="30" viewBox="0 0 60 30" style={{ overflow: 'visible' }}>
        {/* Tail */}
        <path d="M0 15 Q -10 25, -20 15 T -35 15" stroke="pink" strokeWidth="2" fill="none" />
        {/* Body */}
        <ellipse cx="20" cy="15" rx="18" ry="12" fill="#9CA3AF" />
        {/* Ears */}
        <circle cx="30" cy="8" r="5" fill="#9CA3AF" />
        <circle cx="30" cy="22" r="5" fill="#9CA3AF" />
        {/* Snout */}
        <path d="M35 10 L45 15 L35 20 Z" fill="#9CA3AF" />
        {/* Eyes */}
        <circle cx="38" cy="12" r="1.5" fill="black" />
        <circle cx="38" cy="18" r="1.5" fill="black" />
    </svg>
);

const TopDownRoach = () => (
    <div style={{ fontSize: '3rem', lineHeight: 1 }}>🪳</div>
);

const TopDownBee = () => (
    <div style={{ fontSize: '3rem', lineHeight: 1 }}>🐝</div>
);


// --- COMPONENT ---
export default function KonamiEasterEgg() {
    const [isActive, setIsActive] = useState(false);
    const [konamiIndex, setKonamiIndex] = useState(0);

    // State
    const [activeCritter, setActiveCritter] = useState<Critter | null>(null);
    const [footprints, setFootprints] = useState<Footprint[]>([]);

    // Animation Refs
    const requestRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);
    const lastFootprintTime = useRef<number>(0);

    const KONAMI_CODE = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
        "b", "a"
    ];

    // --- KEY LISTENER ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === KONAMI_CODE[konamiIndex]) {
                const nextIndex = konamiIndex + 1;
                if (nextIndex === KONAMI_CODE.length) {
                    setIsActive(prev => !prev);
                    setKonamiIndex(0);
                    alert(!isActive ? "🕵️ Mode Nuisibles : Vue Satellite activée." : "Mode désactivé.");
                } else {
                    setKonamiIndex(nextIndex);
                }
            } else {
                setKonamiIndex(0);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiIndex, isActive]);

    // --- SPAWNER ---
    useEffect(() => {
        if (!isActive) {
            setActiveCritter(null);
            setFootprints([]);
            return;
        }

        const spawnInterval = setInterval(() => {
            if (!activeCritter && Math.random() > 0.3) {
                const type = (['bee', 'mouse', 'roach'] as const)[Math.floor(Math.random() * 3)];
                setActiveCritter({
                    id: Date.now(),
                    type,
                    baseY: 20 + Math.random() * 60, // Avoid very top/bottom
                    x: -100,
                    speed: type === 'bee' ? 150 : 100, // Pixels per second
                    wobbleOffset: Math.random() * Math.PI * 2
                });
            }
        }, 3000);

        return () => clearInterval(spawnInterval);
    }, [isActive, activeCritter]);

    // --- ANIMATION FRAME ---
    const animate = (time: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = (time - lastTimeRef.current) / 1000;
        lastTimeRef.current = time;

        if (activeCritter) {
            // 1. Move X
            const newX = activeCritter.x + (activeCritter.speed * deltaTime);

            if (newX > window.innerWidth + 100) {
                setActiveCritter(null);
                setTimeout(() => setFootprints([]), 2000);
            } else {
                // 2. Calculate Y Sine Wave
                // Amplitude 50px, Frequency derived from X
                const frequency = 0.005; // Tightness of wiggle
                const amplitude = activeCritter.type === 'bee' ? 80 : 30; // Bees fly crazier

                // Keep state updated
                setActiveCritter(prev => prev ? { ...prev, x: newX } : null);

                // 3. Drop Footprints
                // Only if on 'ground' and enough time passed
                if (activeCritter.type !== 'bee' && (time - lastFootprintTime.current > 300)) {
                    // Calculate current rotation for footprint alignment
                    // Derivative of sin(x) is cos(x) -> gives tangent slope
                    // y = A * sin(f * x + phi)
                    // dy/dx = A * f * cos(f * x + phi)
                    const currentY = activeCritter.baseY * (window.innerHeight / 100) + Math.sin(newX * frequency + activeCritter.wobbleOffset) * amplitude;
                    const slope = amplitude * frequency * Math.cos(newX * frequency + activeCritter.wobbleOffset);
                    const rotation = Math.atan(slope) * (180 / Math.PI);

                    setFootprints(prev => [...prev, {
                        id: Date.now(),
                        x: newX,
                        y: currentY,
                        rotation,
                        opacity: 0.5,
                        type: activeCritter.type
                    }]);
                    lastFootprintTime.current = time;
                }
            }
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (isActive && activeCritter) {
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => cancelAnimationFrame(requestRef.current!);
    }, [isActive, activeCritter]);

    if (!isActive || !activeCritter) return null;

    // Calculate current Y and Rotation for the rendering
    const frequency = 0.005;
    const amplitude = activeCritter.type === 'bee' ? 80 : 30;
    const currentYPix = (activeCritter.baseY * window.innerHeight / 100) + Math.sin(activeCritter.x * frequency + activeCritter.wobbleOffset) * amplitude;

    // Calculate rotation to face direction of travel
    const slope = amplitude * frequency * Math.cos(activeCritter.x * frequency + activeCritter.wobbleOffset);
    let rotation = Math.atan(slope) * (180 / Math.PI);

    // Corrections for assets
    if (activeCritter.type === 'roach') rotation += 45; // Fix roach emoji default tilt
    if (activeCritter.type === 'bee') rotation += 0;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>

            {/* Footprints */}
            {footprints.map(fp => (
                <div
                    key={fp.id}
                    style={{
                        position: 'absolute',
                        left: fp.x,
                        top: fp.y + 15,
                        transform: `rotate(${fp.rotation}deg)`,
                        opacity: fp.opacity,
                        fontSize: '10px',
                        transition: 'opacity 3s',
                        filter: 'blur(0.5px)'
                    }}
                >
                    {fp.type === 'mouse' ? '🐾' : '..'}
                </div>
            ))}

            {/* Critter */}
            <div
                style={{
                    position: 'absolute',
                    left: activeCritter.x,
                    top: currentYPix,
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.1s linear' // Smooth rotation
                }}
            >
                {activeCritter.type === 'bee' && <TopDownBee />}
                {activeCritter.type === 'mouse' && <TopDownMouse />}
                {activeCritter.type === 'roach' && <TopDownRoach />}
            </div>
        </div>
    );
}
