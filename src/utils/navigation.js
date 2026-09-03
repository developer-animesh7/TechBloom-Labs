/* ==========================================================================
   Navigation helpers
   One place that knows how to reach a section, from any route.
   ========================================================================== */

/** Height of the sticky header, read from the live CSS token. */
function headerOffset() {
  if (typeof window === 'undefined') return 78;
  const value = getComputedStyle(document.documentElement).getPropertyValue('--header-h');
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed + 14 : 92;
}

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll to a section id, accounting for the sticky header, and move keyboard
 * focus to it so the jump is announced to assistive technology.
 */
export function scrollToSection(sectionId, { focus = true } = {}) {
  if (typeof document === 'undefined') return false;

  const target = document.getElementById(sectionId);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });

  if (focus) {
    const hadTabIndex = target.hasAttribute('tabindex');
    if (!hadTabIndex) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (!hadTabIndex) {
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  }

  return true;
}

/** Build the href for a nav item so links remain real, shareable URLs. */
export function hrefFor(item) {
  if (item.to) return item.to;
  if (item.section) return `/#${item.section}`;
  return '/';
}

/**
 * Handle a nav click: scroll in place when already on the home route,
 * otherwise let the router navigate and scroll after the page renders.
 */
export function goToSection(sectionId, { navigate, pathname, onDone } = {}) {
  const isHome = pathname === '/' || pathname === '';

  if (isHome) {
    scrollToSection(sectionId);
    if (onDone) onDone();
    return;
  }

  if (navigate) {
    navigate('/', { state: { scrollTo: sectionId } });
  }
  if (onDone) onDone();
}

/** Read ?interest=… or ?intent=… so the contact form can preselect an interest. */
export function readIntent(search) {
  if (!search) return '';
  const params = new URLSearchParams(search);
  return params.get('interest') || params.get('intent') || '';
}

export default { scrollToSection, hrefFor, goToSection, readIntent };
