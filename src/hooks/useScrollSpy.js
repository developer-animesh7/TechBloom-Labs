import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently occupying the reading area.
 * Uses a single IntersectionObserver over the given ids.
 *
 * @param {string[]} ids section element ids, in document order
 * @param {object}   options
 * @param {boolean}  options.enabled skip entirely when false (e.g. off-route)
 */
export default function useScrollSpy(ids, { enabled = true } = {}) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? '');

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (!visible.size) return;

        // Prefer the first section in document order that is meaningfully visible.
        const winner = ids.find((id) => visible.has(id));
        if (winner) setActiveId(winner);
      },
      {
        // Reading band: below the sticky header, above the fold's lower third.
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.15, 0.4, 0.75]
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return activeId;
}
