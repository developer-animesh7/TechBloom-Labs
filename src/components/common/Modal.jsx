import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Close } from '../../assets/icons/index.jsx';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible dialog: focus is trapped while open, Escape closes, the scrim
 * closes on click, body scroll is locked, and focus returns to the trigger.
 */
export default function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  wide = false,
  labelledBy = 'tb-modal-title'
}) {
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes || !nodes.length) return;

      const list = Array.from(nodes).filter((node) => node.offsetParent !== null);
      const first = list[0];
      const last = list[list.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return undefined;

    previousFocus.current = document.activeElement;
    document.body.classList.add('is-locked');

    const timer = window.setTimeout(() => {
      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE);
      const target = nodes && nodes.length ? nodes[0] : dialogRef.current;
      target?.focus();
    }, 40);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('is-locked');
      if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus();
    };
  }, [open]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={`modal-layer${open ? ' is-open' : ''}`}
      aria-hidden={open ? undefined : true}
      inert={!open}
    >
      <button
        type="button"
        className="modal-layer__scrim"
        aria-label="Close dialog"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div
        className={`modal${wide ? ' modal--wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <div className="modal__head">
          <div className="modal__head-text">
            {eyebrow ? <p className="t-label">{eyebrow}</p> : null}
            <h2 className="t-h4" id={labelledBy}>
              {title}
            </h2>
          </div>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <Close size={18} />
          </button>
        </div>

        <div className="modal__body">{children}</div>

        {footer ? <div className="modal__foot">{footer}</div> : null}
      </div>
    </div>,
    document.body
  );
}
