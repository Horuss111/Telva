"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(val: string) {
  // e.g. "$2.4B+" → prefix="$", num=2.4, suffix="B+"
  // "500K+" → prefix="", num=500, suffix="K+"
  // "99.99%" → prefix="", num=99.99, suffix="%"
  const match = val.match(/^(\$?)(\d+\.?\d*)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: val, decimals: 0 };
  const num = parseFloat(match[2]);
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix: match[1], num, suffix: match[3], decimals };
}

export function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const { prefix, num, suffix, decimals } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.round(current)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, num, decimals]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-value">
        {prefix}{display}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
