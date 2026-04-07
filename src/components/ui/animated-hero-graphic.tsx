"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function AnimatedHeroGraphic() {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setEntered(true), 200);
        return () => clearTimeout(t);
    }, []);

    const particles = [
        { x: -35, y: -40, size: 2.0, delay: 0.0, dur: 5.0 },
        { x: -28, y: -25, size: 3.2, delay: 0.4, dur: 6.2 },
        { x: -20, y: -45, size: 1.8, delay: 0.8, dur: 5.5 },
        { x: -15, y: -30, size: 2.6, delay: 1.2, dur: 4.8 },
        { x: -8,  y: -38, size: 2.0, delay: 1.6, dur: 5.8 },
        { x: 8,   y: -38, size: 2.4, delay: 0.3, dur: 5.2 },
        { x: 15,  y: -30, size: 1.6, delay: 0.7, dur: 6.0 },
        { x: 20,  y: -45, size: 3.0, delay: 1.1, dur: 4.5 },
        { x: 28,  y: -25, size: 2.2, delay: 1.5, dur: 5.7 },
        { x: 35,  y: -40, size: 1.8, delay: 1.9, dur: 6.4 },
        { x: -32, y: -15, size: 2.8, delay: 2.2, dur: 5.3 },
        { x: 32,  y: -15, size: 2.4, delay: 2.5, dur: 4.9 },
        { x: -5,  y: -50, size: 1.4, delay: 0.5, dur: 7.0 },
        { x: 5,   y: -50, size: 1.6, delay: 1.8, dur: 6.8 },
        { x: -22, y: -10, size: 2.0, delay: 2.8, dur: 5.1 },
        { x: 22,  y: -10, size: 2.2, delay: 3.1, dur: 5.6 },
        { x: 0,   y: -35, size: 1.2, delay: 0.9, dur: 6.5 },
        { x: -12, y: -48, size: 2.6, delay: 2.0, dur: 4.7 },
        { x: 12,  y: -48, size: 2.0, delay: 1.3, dur: 5.9 },
        { x: -40, y: -20, size: 1.8, delay: 3.4, dur: 6.1 },
    ];

    return (
        <div className={`ahg-stage ${entered ? "ahg-entered" : ""}`}>
            <div className="ahg-ambient" />
            <div className="ahg-rays">
                <div className="ahg-ray ahg-ray-1" />
                <div className="ahg-ray ahg-ray-2" />
                <div className="ahg-ray ahg-ray-3" />
            </div>
            <div className="ahg-image-wrap">
                <Image
                    src="/hero-graphic.png"
                    alt="Holographic hands presenting a premium credit card"
                    className="ahg-image"
                    width={1100}
                    height={620}
                    priority
                    draggable={false}
                />
                <div className="ahg-shine" />
                <div className="ahg-prism" />
            </div>
            <div className="ahg-particles">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="ahg-particle"
                        style={{
                            "--px": `${p.x}%`,
                            "--py": `${p.y}%`,
                            "--psize": `${p.size}px`,
                            "--pdelay": `${p.delay}s`,
                            "--pdur": `${p.dur}s`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>
            <div className="ahg-vignette" />
        </div>
    );
}
