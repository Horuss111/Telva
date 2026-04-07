"use client";

import { useEffect, useState, ReactNode } from "react";

interface GlassNavbarProps {
    children: ReactNode;
}

export function GlassNavbar({ children }: GlassNavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`glass-nav-wrap ${scrolled ? "glass-nav-scrolled" : ""}`}>
            {children}
        </div>
    );
}