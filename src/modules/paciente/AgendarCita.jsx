import { useState } from 'react';
import Card from '../../components/ui/Card';
import Stepper from '../../components/ui/Stepper';
import Button from '../../components/ui/Button';
import { colors } from '../../tokens/tokens';

const CAL_DAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const CAL_DATES = [
  { d: 14, disabled: true },
  { d: 15, today: true },
  { d: 16 },
  { d: 17 },
  { d: 18 },
  { d: 19, disabled: true },
  { d: 20, disabled: true },
  { d: 21 },
  { d: 22 },
  { d: 23 },
  { d: 24 },
  { d: 25 },
  { d: 26, disabled: true },
  { d: 27, disabled: true },
  { d: 28 },
  { d: 29 },
  { d: 30 }
];

const ALL_SLOTS = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30'
];

const TAKEN = new Set([
  '08:00',
  '08:30',
  '11:00',
  '15:30'
]);

const AgendarCita = ({ navigate }) => {
  const [selectedDay, setSelectedDay] = useState(16);
  const [selectedSlot, setSelectedSlot] = useState('10:00');

  return (
    <div className="fade-in">
      <button className="auth-link-btn" style={{ fontSize: 13, marginBottom: 8 }} onClick={() => navigate('especialidades')}>
        ← Volver a especialidades
      </button>
      <h1 className="page-title">Agendar cita</h1>
      <p className="page-subtitle">Electroterapia · 30 min</p>

      <Stepper steps={['Doctor', 'Fecha', 'Hora', 'Confirmar']} current={2} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Calendario */}
        <Card>
          <p className="font-semibold text-md" style={{ marginBottom: 16 }}>Selecciona una fecha</p>
          <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
            <button className="btn btn-ghost btn-sm">‹</button>
            <span className="font-semibold text-base">Abril 2026</span>
            <button className="btn btn-ghost btn-sm">›</button>
          </div>
          <div className="cal-grid">
            {CAL_DAYS.map((d) => <div key={d} className="cal-day-name">{d}</div>)}
            {CAL_DATES.map(({ d, disabled, today }) => (
              <div
                key={d}
                className={[
                  'cal-day',
                  disabled ? 'cal-day--disabled' : '',
                  today ? 'cal-day--today' : '',
                  d === selectedDay ? 'cal-day--selected' : '',
                ].filter(Boolean).join(' ')}
                onClick={() => !disabled && setSelectedDay(d)}
              >
                {d}
              </div>
            ))}
          </div>
        </Card>

        {/* Slots + Doctor */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card>
            <p className="font-semibold text-md" style={{ marginBottom: 4 }}>Horarios disponibles</p>
            <p className="text-sm text-muted" style={{ marginBottom: 12 }}>
              Mié {selectedDay} Abr · Dra. María González
            </p>
            <div className="slots-grid">
              {ALL_SLOTS.map((sl) => (
                <div
                  key={sl}
                  className={[
                    'slot',
                    TAKEN.has(sl) ? 'slot--taken' : '',
                    sl === selectedSlot ? 'slot--selected' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => !TAKEN.has(sl) && setSelectedSlot(sl)}
                >
                  {sl}
                </div>
              ))}
            </div>
            <div className="slot-legend">
              <span><span className="slot-legend__dot" style={{ background: 'var(--n200)' }} /> Ocupado</span>
              <span><span className="slot-legend__dot" style={{ border: '1px solid var(--n300)' }} /> Disponible</span>
              <span><span className="slot-legend__dot" style={{ background: colors.g500 }} /> Seleccionado</span>
            </div>
          </Card>

          <Card>
            <p className="font-semibold text-base" style={{ marginBottom: 12 }}>Doctor seleccionado</p>
            <div className="doctor-card doctor-card--selected" style={{ cursor: 'default' }}>
              <div className="avatar" style={{ width: 44, height: 44, background: colors.g500, fontSize: 17 }}>M</div>
              <div>
                <p className="font-semibold text-base">Dra. María González</p>
                <p className="text-sm text-muted">Electroterapia · Fisioterapeuta</p>
                <p className="text-sm text-subtle">⭐ 4.9 · 127 pacientes</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-between" style={{ marginTop: 20 }}>
        <Button variant="ghost" onClick={() => navigate('especialidades')}>← Cambiar doctor</Button>
        <Button variant="primary" onClick={() => navigate('confirmar')}>Siguiente →</Button>
      </div>
    </div>
  );
};

export default AgendarCita;
