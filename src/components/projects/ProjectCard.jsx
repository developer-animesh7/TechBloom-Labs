import { Link } from 'react-router-dom';
import ArrowIcon from '../common/ArrowIcon.jsx';
import Reveal from '../common/Reveal.jsx';
import { getCategory } from '../../data/projects.js';

/**
 * Editorial Product Card for TechBloom Labs Product Catalogue.
 * Structured cleanly:
 * [PRODUCT IMAGE]
 * CATEGORY
 * PRODUCT NAME
 * Short product description
 * TECH STACK
 * View Product →
 */
export default function ProjectCard({ project, to, delay = 0 }) {
  const category = getCategory(project.category);
  const destination = to || `/projects/${project.id}`;

  const techString = project.stack && project.stack.length > 0
    ? project.stack.slice(0, 3).join(' · ')
    : (project.techStack && project.techStack.length > 0 ? project.techStack.slice(0, 3).join(' · ') : category?.name || 'Technology');

  const categoryName = category?.name || category?.short || 'Product';
  const productName = project.name || project.title;
  const productDesc = project.description || project.summary;

  return (
    <Reveal as="li" className="product-card-item" delay={delay}>
      <Link
        to={destination}
        className="product-card"
        aria-label={`View product details for ${productName}`}
      >
        <div className="product-card__media">
          {project.image ? (
            <img
              src={project.image}
              alt={project.alt || `${productName} visualization`}
              className="product-card__img"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="product-card__placeholder" aria-hidden="true">
              <span>{categoryName}</span>
            </div>
          )}
        </div>

        <div className="product-card__body">
          <div className="product-card__meta">
            <span className="product-card__category">{categoryName}</span>
          </div>

          <h3 className="product-card__name">{productName}</h3>

          <p className="product-card__desc">{productDesc}</p>

          <div className="product-card__footer">
            <span className="product-card__tech" title={techString}>{techString}</span>
            <span className="product-card__cta">
              <span>View Product</span>
              <ArrowIcon size={13} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
