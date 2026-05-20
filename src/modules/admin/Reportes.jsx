import Card from '../../components/ui/Card';
import KpiCard from '../../components/ui/KpiCard';
import Alert from '../../components/ui/Alert';
import Button from '../../components/ui/Button';
import { colors, specColors } from '../../tokens/tokens';

const BARS = [
  {
    label: 'Electroterapia',
    pct: 100,
    val: 8,
    color: specColors.electro
  },
  {
    label: 'Masoterapia',
    pct: 75,
    val: 6,
    color: specColors.masoterapia
  },
  {
    label: 'Evaluación Fisiot.',
    pct: 62,
    val: 5,
    color: specColors.evaluacion
  },
  { label: 'Rehab. Deportiva',
    pct: 37,
    val: 3,
    color: specColors.rehab
  },
  {
    label: 'Terapia Respiratoria',
    pct: 25,
    val: 2,
    color: specColors.respiratoria
  },
];

const DOCTORS = [
  {
    name: 'Dra. María González',
    atendidas: 10,
    canceladas: 2,
    no: 1,
    total: 13
  },
  {
    name: 'Dr. Carlos Ramírez',
    atendidas: 6,
    canceladas: 1,
    no: 1,
    total: 8
  },
  {
    name: 'Dra. Laura Mendoza',
    atendidas: 2,
    canceladas: 1,
    no: 0,
    total: 3
  },
];

const Reportes = () => (
  <div className="fade-in">
    {/* Header + controles */}
    <div className="flex justify-between items-center" style={{ marginBottom: 24 }}>
      <div>
        <h1 className="page-title">Reportes</h1>
        <p className="page-subtitle" style={{ marginBottom: 0 }}>Estadísticas de atención del consultorio</p>
      </div>
      <div className="flex gap-3 items-center">
        <select className="form-input" style={{ width: 'auto', padding: '8px 12px' }}>
          <option>Abril 2026</option>
          <option>Marzo 2026</option>
          <option>Febrero 2026</option>
        </select>
        <Button size="sm" variant="primary">📥 Exportar PDF</Button>
        <Button size="sm" variant="outline">📊 CSV</Button>
      </div>
    </div>

    {/* KPIs */}
    <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginBottom: 24 }}>
      <KpiCard number="24" label="Total citas"    color={colors.info}    icon="📋" />
      <KpiCard number="18" label="Completadas"    color={colors.success} icon="✅" />
      <KpiCard number="4"  label="Canceladas"     color={colors.danger}  icon="❌" />
    </div>

    {/* Bar chart */}
    <Card style={{ marginBottom: 20 }}>
      <h2 className="section-title">Citas por especialidad — Abril 2026</h2>
      {BARS.map((b) => (
        <div key={b.label} className="bar-row">
          <span className="bar-row__label">{b.label}</span>
          <div className="bar-row__track">
            <div
              className="bar-row__fill"
              style={{ width: `${b.pct}%`, background: b.color }}
            />
          </div>
          <span className="bar-row__value">{b.val}</span>
        </div>
      ))}
    </Card>

    <Alert type="info">
      Durante <strong>Abril 2026</strong> se registraron <strong>24 citas</strong>. La especialidad
      más solicitada fue <strong>Electroterapia</strong> con 8 citas. Tasa de asistencia:{' '}
      <strong>75%</strong>.
    </Alert>

    {/* Detail table */}
    <Card noPadding style={{ marginTop: 16 }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--n100)' }}>
        <h3 className="font-semibold text-md">Detalle por doctor</h3>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th className="text-center">Atendidas</th>
            <th className="text-center">Canceladas</th>
            <th className="text-center">No asistieron</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {DOCTORS.map((d) => (
            <tr key={d.name}>
              <td className="font-medium">{d.name}</td>
              <td className="text-center font-semibold" style={{ color: colors.success }}>{d.atendidas}</td>
              <td className="text-center text-muted">{d.canceladas}</td>
              <td className="text-center font-semibold" style={{ color: colors.danger }}>{d.no}</td>
              <td className="text-center font-bold text-lg">{d.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

export default Reportes;
