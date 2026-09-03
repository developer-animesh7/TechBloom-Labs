/**
 * Horizontal container: max width plus the shared gutter.
 * `width` picks the measure — tight for reading, wide for full compositions.
 *
 * @param {'default'|'tight'|'wide'} width
 */
export default function PageContainer({ width = 'default', as: Tag = 'div', className = '', children }) {
  const classes = [
    'container',
    width === 'tight' ? 'container--tight' : '',
    width === 'wide' ? 'container--wide' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
