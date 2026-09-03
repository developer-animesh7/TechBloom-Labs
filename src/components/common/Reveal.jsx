import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion.js';

/**
 * Reveals children once, when they enter the viewport.
 * Skips the observer entirely when the user prefers reduced motion.
 *
 * @param {number} delay stagger in ms
 * @param {'up'|'fade'|'right'} variant
 * @param {string} as element to render
 */
export default function Reveal({
  children,
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduced) {
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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const classes = [
    'reveal',
    variant === 'fade' ? 'reveal--fade' : '',
    variant === 'right' ? 'reveal--right' : '',
    shown ? 'is-in' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
