const NAV = {
  patient: [
    { id: 'dashboard-pac', label: 'Inicio' },
    { id: 'especialidades', label: 'Especialidad' },
    { id: 'mis-citas', label: 'Mis Citas' },
  ],
  doctor: [
    { id: 'dashboard-doc', label: 'Inicio' },
    { id: 'agenda', label: 'Mi Agenda' },
  ],
  admin: [
    { id: 'dashboard-admin', label: 'Panel' },
    { id: 'reportes', label: 'Reportes' },
  ],
};

const ROLE_INFO = {
  patient: { label: 'Paciente', bg: '#059669', initial: 'J' },
  doctor: { label: 'Doctor', bg: '#F59E0B', initial: 'M' },
  admin: { label: 'Admin', bg: '#3B82F6', initial: 'A' },
};

const Topbar = ({ role, navigate, current }) => {
  const items = NAV[role] ?? NAV.patient;
  const ri = ROLE_INFO[role] ?? ROLE_INFO.patient;
  const profileTarget = role === 'patient' ? 'perfil' : null;

  return (
    <header className="topbar">
      {/* Logo */}
      <button className="topbar__logo" onClick={() => navigate(items[0].id)}>
        {/* Icono SVG — consistente con AuthLayout */}
        <img
          src="/LogoSaludYa.ico"
          alt="SaludYa"
          style={{ width: 48, height: 48 }}
        />
        Salud<strong>Ya</strong>
      </button>

      {/* Nav links */}
      <nav className="topbar__nav">
        {items.map((n) => (
          <button
            key={n.id}
            className={[
              'topbar__nav-btn',
              current === n.id ? 'topbar__nav-btn--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => navigate(n.id)}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {/* Right side */}
      <div className="topbar__right">
        <span className="topbar__role-chip">🟢 {ri.label}</span>

        <button
          onClick={() => profileTarget && navigate(profileTarget)}
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: ri.bg,
            color: '#fff',
            border: 'none',
            fontWeight: 700,
            fontSize: 14,
            cursor: profileTarget ? 'pointer' : 'default',
          }}
        >
          {ri.initial}
        </button>

        <button
          className="btn btn-ghost btn-sm"
          onClick={() => navigate('login')}
        >
          Salir
        </button>
      </div>
    </header>
  );
};

export default Topbar;
