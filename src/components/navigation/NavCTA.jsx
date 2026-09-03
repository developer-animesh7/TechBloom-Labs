import Button from '../common/Button.jsx';
import { contactCTA } from '../../data/navigation.js';

/**
 * Header call to action. Always routes to the dedicated contact page.
 */
export default function NavCTA({ variant = 'primary', className = '', size = 'sm', onClick }) {
  return (
    <Button
      to={contactCTA.to}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      arrow
    >
      {contactCTA.label}
    </Button>
  );
}
