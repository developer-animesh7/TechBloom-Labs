import { ArrowRight, ArrowUpRight, ArrowDown } from '../../assets/icons/index.jsx';

/**
 * Single arrow used across links, buttons and cards so the motion language
 * stays identical everywhere.
 *
 * @param {'right'|'up-right'|'down'} direction
 * @param {boolean} shift adds the shared hover-shift class
 */
export default function ArrowIcon({ direction = 'right', size = 18, shift = true, className = '' }) {
  const Glyph = direction === 'up-right' ? ArrowUpRight : direction === 'down' ? ArrowDown : ArrowRight;
  const classes = [shift ? 'arrow-shift' : '', className].filter(Boolean).join(' ');

  return <Glyph size={size} className={classes || undefined} />;
}
