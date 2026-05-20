const Modal = ({ open, onClose, title, subtitle, children }) => {
  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      data-testid="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        {title && <h2 className="modal__title">{title}</h2>}
        {subtitle && <p className="modal__subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
