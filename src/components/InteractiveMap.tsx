"use client";

import { useState } from 'react';

export default function InteractiveMap() {
    const [hoveredDept, setHoveredDept] = useState<string | null>(null);

    const depts = [
        { code: '91', name: 'Essonne', path: 'M150 200 L180 180 L200 210 L190 240 L160 250 Z', color: '#60A5FA', labelX: 170, labelY: 220 },
        { code: '77', name: 'Seine-et-Marne', path: 'M200 210 L250 150 L350 160 L380 250 L300 350 L250 320 Z', color: '#10B981', labelX: 290, labelY: 230 },
        { code: '45', name: 'Loiret', path: 'M160 250 L190 240 L250 320 L230 380 L140 350 Z', color: '#FCD34D', labelX: 190, labelY: 310 },
        { code: '89', name: 'Yonne', path: 'M250 320 L300 350 L350 340 L340 420 L230 380 Z', color: '#F97316', labelX: 290, labelY: 370 },
    ];

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <svg viewBox="0 0 500 500" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                {/* Background (Approx Ile de France context) */}
                <path d="M50 50 L450 50 L450 450 L50 450 Z" fill="#f8fafc" />

                {depts.map((dept) => (
                    <g
                        key={dept.code}
                        onMouseEnter={() => setHoveredDept(dept.name)}
                        onMouseLeave={() => setHoveredDept(null)}
                        style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                    >
                        <path
                            d={dept.path}
                            fill={dept.color}
                            stroke="white"
                            strokeWidth="2"
                            style={{
                                opacity: hoveredDept === dept.name ? 1 : 0.8,
                                transform: hoveredDept === dept.name ? 'scale(1.02)' : 'scale(1)',
                                transformOrigin: 'center'
                            }}
                        />
                        <text
                            x={dept.labelX}
                            y={dept.labelY}
                            fill="white"
                            fontSize="16"
                            fontWeight="bold"
                            textAnchor="middle"
                            pointerEvents="none"
                        >
                            {dept.code}
                        </text>
                    </g>
                ))}
            </svg>
            <div style={{ height: '30px', marginTop: '10px', fontWeight: 'bold', color: 'var(--primary)' }}>
                {hoveredDept ? `${hoveredDept} - Zone Couverte ✅` : 'Survolez un département'}
            </div>
        </div>
    );
}
