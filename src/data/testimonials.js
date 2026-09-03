/* ==========================================================================
   Testimonials
   Intentionally empty. No student, faculty or partner quote has been supplied,
   and inventing one would be a fabricated business claim. Components that read
   this list render nothing while it is empty — see Leadership.jsx, which shows
   the section only when `testimonials.length > 0`.

   To publish testimonials later, add entries in this shape:
   { id, quote, name, role, affiliation, consent: true }
   Only add a quote that was actually given, with permission to publish it.
   ========================================================================== */

export const testimonials = [];

export const hasTestimonials = testimonials.length > 0;

export default { testimonials, hasTestimonials };
