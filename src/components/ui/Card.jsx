const Card = ({ children, className = '', style = {}, noPadding = false }) => (
  <div
    className={['card', noPadding ? 'card--no-padding' : '', className]
      .filter(Boolean)
      .join(' ')}
    style={noPadding ? { padding: 0, overflow: 'hidden', ...style } : style}
  >
    {children}
  </div>
);

export default Card;
