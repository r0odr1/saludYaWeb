const Chip = ({ label, active = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={['chip', active ? 'chip--active' : ''].filter(Boolean).join(' ')}
  >
    {label}
  </button>
);

export default Chip;
