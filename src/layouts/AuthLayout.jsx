/* Logo SVG */
const SaludYaLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 0 }}>
    <img
      src="/LogoSaludYa.ico"
      alt="SaludYa"
      style={{ width: 80 }}
    />
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 80,
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-0.5px',
      lineHeight: 1,
    }}>
      Salud<span style={{ color: '#FDE68A' }}>Ya</span>
    </span>
  </div>
);

/* Checkmark circular SVG */
const CheckIcon = () => (
  <svg
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)" />
    <path
      d="M7 12.5L10.5 16L17 9"
      stroke="white" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const FEATURES = [
  'Agenda en segundos',
  'Recordatorios automáticos',
  'Historial completo',
  'Disponible 24/7',
];

const AuthLayout = ({ children, tagline, stepLabel }) => (
  <div className="auth-layout">

    {/* Panel izquierdo */}
    <div
      className="auth-layout__left"
      style={{
        background: 'linear-gradient(160deg, #047857 0%, #059669 45%, #10B981 100%)',
      }}
    >
      {/* Contenido Principal */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%"
      }}>
        {/* Logo */}
        <SaludYaLogo />

        {/* Espacio antes del tagline */}
        <div style={{ height: 40 }} />

        {/* Tagline - SIN subrayado */}
        <p style={{
          fontSize: 26,
          lineHeight: 1.55,
          color: '#ffffff',
          marginBottom: 40,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          maxWidth: 420,
        }}>
          {tagline}
        </p>

        {/* Feature list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {FEATURES.map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <CheckIcon />
              <span style={{
                fontSize: 16,
                color: '#ffffff',
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Barra de progreso - solo en registro */}
        {stepLabel && (
          <div style={{
            marginTop: 32,
            background: 'rgba(255,255,255,.12)',
            borderRadius: 10,
            padding: '14px 16px',
            border: '1px solid rgba(255,255,255,.15)',
            maxWidth: 420,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
              {stepLabel}
            </p>
            <div style={{
              height: 4, background: 'rgba(255,255,255,.2)',
              borderRadius: 2, overflow: 'hidden',
            }}>
              <div style={{
                width: '50%', height: '100%',
                background: '#FDE68A', borderRadius: 2,
              }} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <p style={{
        fontSize: 12,
        color: 'rgba(255,255,255,0.45)',
        marginTop: 'auto',
      }}>
        © 2026 SaludYa · Corporación Universitaria Iberoamericana
      </p>
    </div>

    {/* Panel derecho — formulario */}
    <div className="auth-layout__right">{children}</div>
  </div>
);

export default AuthLayout;
