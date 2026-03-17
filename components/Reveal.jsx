"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const states = {
    up: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    down: visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
    left: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    right: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    fade: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${states[direction] ?? states.up} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
