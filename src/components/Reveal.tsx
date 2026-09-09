"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle fade-and-rise on scroll. Content is fully visible at rest;
 * the animation only applies once JS runs and reduced-motion is off.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Never hide something already on screen; only animate content below the fold.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("reveal-init");
    // Safety net: reveal regardless after a short while.
    const timer = window.setTimeout(() => el.classList.add("reveal-in"), 2500);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("reveal-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
