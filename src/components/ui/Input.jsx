const Input = ({
  label,
  hint,
  error,
  type = 'text',
  readonly = false,
  className = '',
  ...props
}) => (
  <div className="form-group">
    {label && <label className="form-label">{label}</label>}
    <input
      type={type}
      readOnly={readonly}
      className={[
        'form-input',
        error ? 'form-input--error' : '',
        readonly ? 'form-input--readonly' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
    {hint && <p className="form-hint">{hint}</p>}
    {error && <p className="form-error">{error}</p>}
  </div>
);

export default Input;
