const ICONS = {
  info: 'ℹ️',
  warning: '⚠️',
  success: '✅',
  danger: '🚨'
};

const Alert = ({ type = 'info', children }) => (
  <div className={`alert alert-${type}`}>
    <span>{ICONS[type]}</span>
    <div>{children}</div>
  </div>
);

export default Alert;
