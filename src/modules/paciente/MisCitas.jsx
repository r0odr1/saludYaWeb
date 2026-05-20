import { useState } from 'react';
import CitaCard from '../../components/ui/CitaCard';
import Chip from '../../components/ui/Chip';
import { specColors } from '../../tokens/tokens';

const FILTERS = [
  { value: 'todas', label: 'Todas' },
  { value: 'agendadas', label: 'Agendadas' },
  { value: 'completadas', label: 'Completadas' },
  { value: 'canceladas', label: 'Canceladas' },
];

const CITAS = [
  {
    id: 1,
    status: 'agendada',
    specialty: 'Electroterapia',
    doctor: 'Dra. María González',
    date: 'Lun 14 Abr 2026',
    time: '10:00–10:30',
    specColor: specColors.electro,
    canEdit: true,
    canCancel: true,
  },
  {
    id: 2,
    status: 'agendada',
    specialty: 'Masoterapia',
    doctor: 'Dr. Carlos Ramírez',
    date: 'Mar 15 Abr 2026',
    time: '14:00–14:30',
    specColor: specColors.masoterapia,
    canEdit: false,
    canCancel: false,
    note: null,
  },
  {
    id: 3,
    status: 'completada',
    specialty: 'Evaluación Fisioterapéutica',
    doctor: 'Dra. Laura Mendoza',
    date: 'Mié 9 Abr 2026',
    time: '09:00–09:45',
    specColor: specColors.evaluacion,
    note: 'Dolor lumbar leve. Mejoría progresiva. Continuar plan de ejercicios.',
  },
  {
    id: 4,
    status: 'cancelada',
    specialty: 'Masoterapia',
    doctor: 'Dr. Carlos Ramírez',
    date: 'Mar 8 Abr 2026',
    time: '14:00–14:30',
    specColor: '#9CA3AF',
  },
];

const matchesFilter = (cita, filter) => {
  if (filter === 'todas') return true;
  if (filter === 'agendadas') return cita.status === 'agendada';
  if (filter === 'completadas') return cita.status === 'completada';
  if (filter === 'canceladas') return cita.status === 'cancelada';
  return true;
};

const MisCitas = () => {
  const [filter, setFilter] = useState('todas');

  return (
    <div className="fade-in">
      <h1 className="page-title">Mis citas</h1>
      <p className="page-subtitle">Gestiona tus citas agendadas</p>

      <div className="flex gap-2 flex-wrap" style={{ marginBottom: 20 }}>
        {FILTERS.map(({ value, label }) => (
          <Chip key={value} label={label} active={filter === value} onClick={() => setFilter(value)} />
        ))}
      </div>

      {CITAS.filter((c) => matchesFilter(c, filter)).map((c) => (
        <CitaCard
          key={c.id}
          specialty={c.specialty}
          doctor={c.doctor}
          date={c.date}
          time={c.time}
          status={c.status}
          specColor={c.specColor}
          note={c.note}
          onEdit={c.canEdit ? () => {} : undefined}
          onCancel={c.canCancel ? () => {} : undefined}
        />
      ))}
    </div>
  );
};

export default MisCitas;
