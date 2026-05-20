import { useState } from 'react';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import Chip from '../../components/ui/Chip';
import Modal from '../../components/ui/Modal';
import Alert from '../../components/ui/Alert';
import { colors } from '../../tokens/tokens';

const INITIAL_CITAS = [
  {
    id: 1,
    t: '08:00',
    init: 'J',
    bg: colors.info,
    name: 'Juan Pérez',
    spec: 'Electroterapia',
    email: 'juan@mail.com',
    status: 'agendada',
    note: ''
  },
  {
    id: 2,
    t: '09:00',
    init: 'A',
    bg: colors.g500,
    name: 'Ana López',
    spec: 'Masoterapia',
    email: 'ana@mail.com',
    status: 'completada',
    note: 'Masaje descontracturante espalda. Mejoría del 60%'
  },
  {
    id: 3,
    t: '10:00',
    init: 'C',
    bg: colors.danger,
    name: 'Carlos Ruiz',
    spec: 'Evaluación',
    email: 'carlos@mail.com',
    status: 'no_asistio',
    note: ''
  },
  {
    id: 4,
    t: '11:00',
    init: 'L',
    bg: '#8B5CF6',
    name: 'Laura Suárez',
    spec: 'Terapia Resp.',
    email: 'laura@mail.com',
    status: 'agendada',
    note: ''
  },
];

const BORDER_BY_STATUS = {
  agendada: colors.g500,
  completada: colors.success,
  no_asistio: colors.danger,
  cancelada: colors.n400,
};

const FILTERS = [
  { value: 'todas', label: 'Todas' },
  { value: 'agendadas', label: 'Agendadas' },
  { value: 'completadas', label: 'Completadas' },
];

const MiAgenda = () => {
  const [citas, setCitas] = useState(INITIAL_CITAS);
  const [filter, setFilter] = useState('todas');
  const [reasignarOpen, setReasignar] = useState(false);
  const [selectedCita, setSelectedCita] = useState(null);

  const mark = (id, status) =>
    setCitas((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));

  const filtered = citas.filter((c) => {
    if (filter === 'todas') return true;
    if (filter === 'agendadas') return c.status === 'agendada';
    if (filter === 'completadas') return c.status === 'completada';
    return true;
  });

  return (
    <div className="fade-in">
      <h1 className="page-title">Mi Agenda</h1>
      <p className="page-subtitle">Gestiona tus citas, agrega notas y reasigna</p>

      {/* Date navigation */}
      <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
        <Button variant="ghost" size="sm">← Anterior</Button>
        <div className="card-sm font-semibold text-base" style={{ padding: '8px 16px' }}>
          📅 Lunes, 14 de Abril 2026
        </div>
        <Button variant="ghost" size="sm">Siguiente →</Button>
      </div>

      <div className="flex gap-2" style={{ marginBottom: 20 }}>
        {FILTERS.map(({ value, label }) => (
          <Chip key={value} label={label} active={filter === value} onClick={() => setFilter(value)} />
        ))}
      </div>

      {filtered.map((c) => (
        <div
          key={c.id}
          className="card"
          style={{ marginBottom: 10, borderLeft: `4px solid ${BORDER_BY_STATUS[c.status] ?? colors.n300}` }}
        >
          <div className="flex items-start gap-4">
            {/* Hora */}
            <div style={{ textAlign: 'center', minWidth: 52 }}>
              <p className="font-bold text-md">{c.t}</p>
              <p className="text-xs text-subtle">30 min</p>
            </div>

            <Avatar initial={c.init} bg={c.bg} size={38} />

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-2" style={{ marginBottom: 4 }}>
                <span className="font-semibold text-md">{c.name}</span>
                <Badge status={c.status} />
              </div>
              <p className="text-sm text-muted">{c.spec}</p>
              <p className="text-xs text-subtle">📧 {c.email}</p>
              {c.note && <p className="cita-card__note">💬 {c.note}</p>}
            </div>

            {/* Actions */}
            {c.status === 'agendada' && (
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="primary" onClick={() => mark(c.id, 'completada')}>
                  ✓ Completar
                </Button>
                <Button size="sm" variant="ghost" onClick={() => mark(c.id, 'no_asistio')}>
                  ✗ No asistió
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => { setSelectedCita(c); setReasignar(true); }}
                >
                  ↔ Reasignar
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Modal reasignar */}
      <Modal
        open={reasignarOpen}
        onClose={() => setReasignar(false)}
        title="Reasignar cita"
        subtitle={selectedCita ? `${selectedCita.name} · ${selectedCita.spec} · ${selectedCita.t}` : ''}
      >
        <div className="form-group">
          <label className="form-label">Nuevo doctor</label>
          <select className="form-input">
            <option>Dr. Carlos Ramírez</option>
            <option>Dra. Laura Mendoza</option>
          </select>
        </div>
        <Alert type="warning">El paciente será notificado por correo del cambio de doctor.</Alert>
        <div className="flex gap-3">
          <Button variant="ghost" style={{ flex: 1 }} onClick={() => setReasignar(false)}>
            Cancelar
          </Button>
          <Button variant="primary" style={{ flex: 2 }} onClick={() => setReasignar(false)}>
            Reasignar cita
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MiAgenda;
