const BADGE_MAP = {
  agendada: 'AGENDADA',
  completada: 'COMPLETADA',
  cancelada: 'CANCELADA',
  pendiente: 'PENDIENTE',
  no_asistio: 'NO ASISTIÓ',
  doctor: 'DOCTOR',
  paciente: 'PACIENTE',
  admin: 'ADMIN',
};

const Badge = ({ status }) => (
  <span className={`badge badge-${status?.replace('_', '-')}`}>
    {BADGE_MAP[status] ?? status?.toUpperCase()}
  </span>
);

export default Badge;
