import Button from '../../components/ui/Button';
import { specColors } from '../../tokens/tokens';

const ESPECIALIDADES = [
  {
    icon: '🔬', name: 'Evaluación Fisioterapéutica',
    desc: 'Valoración inicial del paciente para determinar el plan de tratamiento',
    dur: 45, docs: 3, color: specColors.evaluacion, bg: '#EFF6FF',
  },
  {
    icon: '💆', name: 'Masoterapia',
    desc: 'Terapia manual con masajes para alivio muscular',
    dur: 30, docs: 2, color: specColors.masoterapia, bg: 'var(--g50)',
  },
  {
    icon: '⚡', name: 'Electroterapia',
    desc: 'Terapia con equipos de ultrasonido y estimulación eléctrica',
    dur: 30, docs: 2, color: specColors.electro, bg: 'var(--a50)',
  },
  {
    icon: '🏃', name: 'Rehabilitación Deportiva',
    desc: 'Rehabilitación enfocada en lesiones deportivas',
    dur: 45, docs: 1, color: specColors.rehab, bg: '#FEF2F2',
  },
  {
    icon: '🫁', name: 'Terapia Respiratoria',
    desc: 'Técnicas de rehabilitación pulmonar',
    dur: 30, docs: 2, color: specColors.respiratoria, bg: '#F5F3FF',
  },
];

const Especialidades = ({ navigate }) => (
  <div className="fade-in">
    <h1 className="page-title">Especialidades</h1>
    <p className="page-subtitle">Selecciona el servicio que necesitas para agendar tu cita</p>

    {ESPECIALIDADES.map((spec) => (
      <div
        key={spec.name}
        className="espec-card"
        style={{ borderLeftColor: spec.color }}
        onClick={() => navigate('agendar')}
      >
        <div className="espec-card__icon" style={{ background: spec.bg }}>
          {spec.icon}
        </div>
        <div style={{ flex: 1 }}>
          <p className="espec-card__name">{spec.name}</p>
          <p className="espec-card__desc">{spec.desc}</p>
          <p className="espec-card__dur">
            ⏱ {spec.dur} min · {spec.docs} doctor{spec.docs > 1 ? 'es' : ''} disponible{spec.docs > 1 ? 's' : ''}
          </p>
        </div>
        <Button
          size="sm"
          variant="primary"
          onClick={(e) => { e.stopPropagation(); navigate('agendar'); }}
        >
          Agendar →
        </Button>
      </div>
    ))}
  </div>
);

export default Especialidades;
