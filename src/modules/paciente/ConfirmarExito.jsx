import Card from '../../components/ui/Card';
import Stepper from '../../components/ui/Stepper';
import Alert from '../../components/ui/Alert';
import Button from '../../components/ui/Button';

const SUMMARY_ROWS = [
  ['Especialidad', 'Electroterapia', false],
  ['Doctor', 'Dra. María González', false],
  ['Fecha', 'Miércoles 16 de Abril 2026', false],
  ['Horario', '10:00 – 10:30', true],
  ['Duración', '30 minutos', false],
  ['Paciente', 'Juan Pérez', false],
];

/* Confirmar cita */
export const Confirmar = ({ navigate }) => (
  <div className="fade-in" style={{ maxWidth: 560, margin: '0 auto' }}>
    <h1 className="page-title">Confirmar cita</h1>
    <p className="page-subtitle">Revisa los detalles antes de confirmar</p>

    <Stepper steps={['Doctor', 'Fecha', 'Hora', 'Confirmar']} current={4} />

    <Card style={{ marginBottom: 16 }}>
      {SUMMARY_ROWS.map(([label, value, highlight]) => (
        <div key={label} className="summary-row">
          <span className="summary-row__label">{label}</span>
          <span className={highlight ? 'summary-row__value--highlight' : 'summary-row__value'}>
            {value}
          </span>
        </div>
      ))}
    </Card>

    <Alert type="info">
      Al confirmar, el horario se bloqueará en tiempo real y recibirás una confirmación por correo.
      Se enviará un recordatorio 24 horas antes de la cita.
    </Alert>

    <div className="flex gap-3" style={{ marginTop: 8 }}>
      <Button variant="ghost" style={{ flex: 1 }} onClick={() => navigate('agendar')}>
        ← Cambiar
      </Button>
      <Button variant="primary" style={{ flex: 2 }} onClick={() => navigate('exito')}>
        ✓ Confirmar cita
      </Button>
    </div>
  </div>
);

/* Cita agendada - Exito */
export const Exito = ({ navigate }) => (
  <div className="fade-in" style={{ maxWidth: 520, margin: '0 auto' }}>
    <div className="success-box">
      <div className="success-box__icon">🎉</div>
      <h2 className="success-box__title">¡Cita Agendada!</h2>
      <p className="success-box__sub">
        Tu cita ha sido registrada. Recibirás un recordatorio 24 horas antes.
      </p>

      <Card style={{ textAlign: 'left', marginBottom: 16 }}>
        {[['Especialidad','Electroterapia'],['Doctor','Dra. María González'],
          ['Fecha','Mié 16 de Abr 2026'],['Horario','10:00 – 10:30']].map(([l, v]) => (
          <div key={l} className="summary-row">
            <span className="summary-row__label">{l}</span>
            <span className="summary-row__value">{v}</span>
          </div>
        ))}
      </Card>

      <Alert type="success">
        <div>
          <div>
            Confirmación enviada a <strong>juan@correo.com</strong>
          </div>

          <div style={{ marginTop: 6, fontWeight: 700 }}>
            Código de cita: #SAY-20260416-001
          </div>
        </div>
      </Alert>

      <div className="flex gap-3 justify-center">
        <Button variant="outline" onClick={() => navigate('mis-citas')}>Ver mis citas</Button>
        <Button variant="primary" onClick={() => navigate('especialidades')}>Agendar otra</Button>
      </div>
    </div>
  </div>
);
