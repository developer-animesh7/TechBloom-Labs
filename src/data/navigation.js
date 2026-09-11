/* ==========================================================================
   Navigation — primary, secondary, mobile and footer route definitions.
   Simplified, clean corporate navigation with real routes.
   ========================================================================== */

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Products', to: '/projects' },
  { label: 'Our Team', to: '/experts' }
];

export const secondaryNav = [
  { label: 'Internships', to: '/internships', meta: 'Programs' },
  { label: 'Support', to: '/support', meta: 'Help Desk' }
];

export const mobileNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Products', to: '/projects' },
  { label: 'Our Team', to: '/experts' },
  { label: 'Contact', to: '/contact' }
];

export const contactCTA = { label: 'Contact Us', to: '/contact' };

export const footerNav = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Our Products', to: '/projects' },
      { label: 'Our Team', to: '/experts' },
      { label: 'Contact', to: '/contact' }
    ]
  },
  {
    title: 'Explore',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Our Products', to: '/projects' },
      { label: 'Our Team', to: '/experts' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Support', to: '/support' },
      { label: 'Contact', to: '/contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' }
    ]
  }
];

export const legalNav = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' }
];

export default { primaryNav, secondaryNav, mobileNav, contactCTA, footerNav, legalNav };
