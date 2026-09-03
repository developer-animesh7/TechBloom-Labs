import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion.js';

/**
 * Hairline rule that draws itself in when scrolled into view.
 * Decorative, so it is hidden from assistive technology.
 */
export default function Divider({ delay = 0, animate = true, className = '' }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!animate || reduced) {
      setShown(true);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, reduced]);

  const classes = ['divider', animate ? 'line-draw' : '', shown ? 'is-in' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      role="presentation"
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    />
  );
}
