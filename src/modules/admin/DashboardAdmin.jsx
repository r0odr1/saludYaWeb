import { useState } from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Alert from '../../components/ui/Alert';
import { colors } from '../../tokens/tokens';

const USERS = [
  {
    init: 'M',
    bg: colors.g500,
    name: 'Dra. María González',
    email: 'maria@saludya.com',
    role: 'doctor'
  },
  {
    init: 'J',
    bg: colors.info,
    name: 'Juan Pérez',
    email: 'juan@mail.com',
    role: 'paciente'
  },
  {
    init: 'C',
    bg: colors.a500,
    name: 'Dr. Carlos Ramírez',
    email: 'carlos@saludya.com',
    role: 'doctor'
  },
];

const QUICK = [
  {
    icon: '👨‍⚕️',
    title: 'Gestionar doctores',
    detail: '3 registrados'
  },
  { icon: '🏷',
    title: 'Especialidades',
    detail: '5 activas'
  },
  { icon: '📊',
    title: 'Reportes',
    detail: 'Ver reportes →',
    target: 'reportes'
  },
];

const DashboardAdmin = ({ navigate }) => {
  const [rolModal, setRolModal] = useState(false);
  const [selectedRol, setSelectedRol] = useState('doctor');

  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="hero-banner" style={{ background: 'linear-gradient(135deg,#312E81,#6366F1)' }}>
        <div>
          <h2 className="hero-banner__title">Panel de administración ⚙️</h2>
          <p className="hero-banner__subtitle">Bienvenido, Administrador SaludYa</p>
        </div>
        <div className="hero-banner__icon">🏢</div>
      </div>

      {/* Quick actions */}
      <div className="quick-actions">
        {QUICK.map(({ icon, title, detail, target }) => (
          <div
            key={title}
            className="quick-action-card"
            onClick={() => target && navigate(target)}
            style={{ cursor: target ? 'pointer' : 'default' }}
          >
            <div className="quick-action-card__icon">{icon}</div>
            <h3 className="quick-action-card__title">{title}</h3>
            <p style={{ fontSize: 12, color: 'var(--g600)', marginTop: 4, fontWeight: 600 }}>{detail}</p>
          </div>
        ))}
      </div>

      {/* Users table */}
      <h2 className="section-title">Usuarios del sistema</h2>
      <Card noPadding>
        <table className="data-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.name}>
                <td>
                  <div className="flex items-center gap-3">
                    <Avatar initial={u.init} bg={u.bg} size={32} />
                    <span className="font-medium">{u.name}</span>
                  </div>
                </td>
                <td className="text-muted">{u.email}</td>
                <td><Badge status={u.role} /></td>
                <td>
                  <span style={{ color: 'var(--success)', fontSize: 13 }}>● Activo</span>
                </td>
                <td>
                  <Button size="sm" variant="ghost" onClick={() => setRolModal(true)}>
                    Cambiar rol
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Modal cambiar rol */}
      <Modal
        open={rolModal}
        onClose={() => setRolModal(false)}
        title="Cambiar rol de usuario"
        subtitle="Juan Pérez · juan@saludya.com · Rol actual: Paciente"
      >
        <div className="role-grid">
          {[['👤', 'paciente', 'Paciente'], ['👨‍⚕️', 'doctor', 'Doctor'], ['⚙️', 'admin', 'Admin']].map(
            ([icon, value, label]) => (
              <div
                key={value}
                className={`role-btn ${selectedRol === value ? 'role-btn--active' : ''}`}
                onClick={() => setSelectedRol(value)}
              >
                <div className="role-btn__icon">{icon}</div>
                <div className="role-btn__label">{label}</div>
              </div>
            )
          )}
        </div>

        {selectedRol === 'doctor' && (
          <Alert type="warning">
            Al cambiar a Doctor se creará su perfil profesional. Luego asigna especialidades desde Doctores.
          </Alert>
        )}

        <div className="flex gap-3">
          <Button variant="ghost" style={{ flex: 1 }} onClick={() => setRolModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" style={{ flex: 2 }} onClick={() => setRolModal(false)}>
            Guardar cambios
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardAdmin;
