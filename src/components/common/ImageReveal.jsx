import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion.js';

/**
 * Image in a masked frame: the mask opens upward while the image settles from a
 * slight scale. One treatment, reused by every section that shows a visual.
 *
 * @param {string} ratio '4x3' | '16x9' | '3x2' | '1x1' | '4x5' | 'tall'
 * @param {string} caption optional overline caption rendered over the image
 */
export default function ImageReveal({
  src,
  alt,
  ratio = '4x3',
  caption,
  delay = 0,
  loading = 'lazy',
  className = '',
  frameless = false
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [shown, setShown] = useState(true);

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
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const classes = [
    'media',
    `media--${ratio}`,
    frameless ? 'media--bare' : '',
    'reveal-mask',
    shown ? 'is-in' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure
      ref={ref}
      className={classes}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      <img className="reveal-mask__inner" src={src} alt={alt} loading={loading} decoding="async" />
      {caption ? <figcaption className="media__cap">{caption}</figcaption> : null}
    </figure>
  );
}
