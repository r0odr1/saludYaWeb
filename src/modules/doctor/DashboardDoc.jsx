import KpiCard from '../../components/ui/KpiCard';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import { colors } from '../../tokens/tokens';

const TODAY_CITAS = [
  {
    time: '08:00',
    init: 'J',
    bg: colors.info,
    name: 'Juan Pérez',
    spec: 'Electroterapia',
    email: 'juan@mail.com',
    tel: '300 123 4565'
  },
  {
    time: '09:00',
    init: 'A',
    bg: colors.g500,
    name: 'Ana López',
    spec: 'Masoterapia',
    email: 'ana@mail.com',
    tel: '301 234 5678'
  },
  {
    time: '10:00',
    init: 'C',
    bg: colors.a500,
    name: 'Carlos Ruiz',
    spec: 'Evaluación',
    email: 'carlos@mail.com',
    tel: '302 345 6789'
  },
];

const DashboardDoc = ({ navigate }) => (
  <div className="fade-in">
    {/* Hero */}
    <div className="hero-banner" style={{ background: 'linear-gradient(135deg,#1E3A8A,#3B82F6)' }}>
      <div>
        <h2 className="hero-banner__title">Dra. María González 👩‍⚕️</h2>
        <p className="hero-banner__subtitle">Panel de control · Lunes, 14 de Abril 2026</p>
      </div>
      <div className="hero-banner__icon">🏥</div>
    </div>

    {/* KPIs */}
    <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
      <KpiCard number="6" label="Citas hoy"    color={colors.info}    icon="📋" />
      <KpiCard number="4" label="Completadas"  color={colors.success} icon="✅" />
      <KpiCard number="2" label="Pendientes"   color={colors.warning} icon="⏳" />
    </div>

    {/* Lista del dia */}
    <div className="flex justify-between items-center" style={{ marginBottom: 14 }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Citas de hoy</h2>
      <Button size="sm" variant="outline" onClick={() => navigate('agenda')}>
        Ver agenda completa →
      </Button>
    </div>

    {TODAY_CITAS.map((c) => (
      <div key={c.name} className="agenda-row">
        <div style={{ textAlign: 'center', minWidth: 52 }}>
          <p className="font-semibold text-md">{c.time}</p>
          <p className="text-xs text-subtle">08:30</p>
        </div>
        <Avatar initial={c.init} bg={c.bg} />
        <div style={{ flex: 1 }}>
          <p className="font-semibold text-base">{c.name}</p>
          <p className="text-sm text-muted">{c.spec}</p>
          <p className="text-xs text-subtle">📧 {c.email} · 📞 {c.tel}</p>
        </div>
        <Badge status="agendada" />
      </div>
    ))}
  </div>
);

export default DashboardDoc;
