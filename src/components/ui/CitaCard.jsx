import Badge from './Badge';
import Button from './Button';

const CitaCard = ({
  specialty,
  doctor,
  date,
  time,
  status,
  specColor,
  note,
  onEdit,
  onCancel,
}) => (
  <div className="cita-card">
    <div className="cita-card__bar" style={{ background: specColor }} />

    <div className="cita-card__info">
      <p className="cita-card__title">{specialty}</p>
      <p className="cita-card__meta">
        🩺 {doctor}&nbsp;·&nbsp;📅 {date}, {time}
      </p>
      {note && <p className="cita-card__note">💬 {note}</p>}
    </div>

    <div className="cita-card__actions">
      <Badge status={status} />
      {onEdit && (
        <Button size="sm" variant="outline" onClick={onEdit}>
          ✏ Editar
        </Button>
      )}
      {onCancel && (
        <Button size="sm" variant="danger" onClick={onCancel}>
          ✕ Cancelar
        </Button>
      )}
    </div>
  </div>
);

export default CitaCard;
