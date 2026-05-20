import KpiCard from '../../components/ui/KpiCard';
import CitaCard from '../../components/ui/CitaCard';
import { colors, specColors } from '../../tokens/tokens';

const QUICK_ACTIONS = [
  {
    icon: '📅',
    title: 'Agendar cita',
    desc: 'Selecciona especialidad y reserva',
    target: 'especialidades'
  },
  {
    icon: '🗂',
    title: 'Mis citas',
    desc: 'Gestiona tus citas activas',
    target: 'mis-citas'
  },
  {
    icon: '👤',
    title: 'Mi perfil',
    desc: 'Actualiza tu información personal',
    target: 'perfil'
  },
];

const DashboardPac = ({ navigate }) => (
  <div className="fade-in">
    {/* Hero */}
    <div
      className="hero-banner"
      style={{ background: `linear-gradient(135deg, ${colors.g700}, ${colors.g500})` }}
    >
      <div>
        <h2 className="hero-banner__title">¡Hola Juan! 👋</h2>
        <p className="hero-banner__subtitle">Bienvenido de vuelta. ¿En qué podemos ayudarte hoy?</p>
      </div>
      <div className="hero-banner__icon">🌿</div>
    </div>

    {/* Quick actions */}
    <div className="quick-actions">
      {QUICK_ACTIONS.map(({ icon, title, desc, target }) => (
        <div key={title} className="quick-action-card" onClick={() => navigate(target)}>
          <div className="quick-action-card__icon">{icon}</div>
          <h3 className="quick-action-card__title">{title}</h3>
          <p className="quick-action-card__desc">{desc}</p>
        </div>
      ))}
    </div>

    {/* KPIs */}
    <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
      <KpiCard number="3" label="Próximas citas"    color={colors.g600} icon="📅" />
      <KpiCard number="8" label="Citas completadas" color={colors.info}  icon="✅" />
      <KpiCard number="1" label="Recordatorio hoy"  color={colors.a600} icon="🔔" />
    </div>

    {/* Upcoming appointments */}
    <div className="flex justify-between items-center" style={{ marginBottom: 14 }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Próximas citas</h2>
      <button
        className="auth-link-btn"
        style={{ fontSize: 13 }}
        onClick={() => navigate('mis-citas')}
      >
        Ver todas →
      </button>
    </div>

    <CitaCard
      specialty="Electroterapia"
      doctor="Dra. María González"
      date="Lun 14 Abr"
      time="10:00–10:30"
      status="agendada"
      specColor={specColors.electro}
    />
    <CitaCard
      specialty="Masoterapia"
      doctor="Dr. Carlos Ramírez"
      date="Mar 15 Abr"
      time="14:00–14:30"
      status="agendada"
      specColor={specColors.masoterapia}
    />
    <CitaCard
      specialty="Evaluación Fisioterapéutica"
      doctor="Dra. Laura Mendoza"
      date="Mié 16 Abr"
      time="09:00–09:45"
      status="agendada"
      specColor={specColors.evaluacion}
    />
  </div>
);

export default DashboardPac;
