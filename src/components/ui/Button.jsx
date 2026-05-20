const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    full ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
