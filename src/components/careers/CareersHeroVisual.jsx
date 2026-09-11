/**
 * Abstract technology flow illustration for Careers Hero.
 * Represents the sequence: Research -> Ideas -> Engineering -> Products -> Impact
 * Clean, restrained, architectural design tokens without fake employees.
 */
export default function CareersHeroVisual() {
  const nodes = [
    { num: '01', title: 'Research', sub: 'Discovery & Models' },
    { num: '02', title: 'Ideas', sub: 'Architectural Specs' },
    { num: '03', title: 'Engineering', sub: 'Systems & Code' },
    { num: '04', title: 'Products', sub: 'Scalable Software' },
    { num: '05', title: 'Impact', sub: 'Real-World Value' }
  ];

  return (
    <div className="careers-visual" aria-hidden="true">
      <div className="careers-visual__grid-bg" />
      
      <div className="careers-visual__header">
        <span className="careers-visual__dot" />
        <span className="careers-visual__title">TechBloom Product Engineering & Innovation Pipeline</span>
      </div>

      <div className="careers-visual__pipeline">
        {nodes.map((item, idx) => (
          <div key={item.num} className="careers-visual__node-wrapper">
            <div className="careers-visual__node">
              <span className="careers-visual__node-num">{item.num}</span>
              <span className="careers-visual__node-title">{item.title}</span>
              <span className="careers-visual__node-sub">{item.sub}</span>
            </div>
            {idx < nodes.length - 1 && (
              <div className="careers-visual__connector">
                <span className="careers-visual__line" />
                <span className="careers-visual__arrow">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="careers-visual__footer">
        <span className="careers-visual__badge">Indo–US–Canadian Product Engineering Venture</span>
        <span className="careers-visual__status">
          <i className="careers-visual__pulse" /> Active Initiative Pathways
        </span>
      </div>
    </div>
  );
}
