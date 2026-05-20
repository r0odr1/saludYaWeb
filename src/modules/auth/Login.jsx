import { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

/* Icono ojo - mostrar/ocultar contraseNa */
const EyeIcon = ({ visible }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {visible ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const Login = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);

  return (
    <AuthLayout tagline="Tu salud, nuestra prioridad. Gestiona tus citas de fisioterapia de forma rápida y sencilla">
      <div className="auth-form fade-in">

        <h1 className="auth-form__title">Iniciar sesión</h1>
        <p className="auth-form__subtitle">Ingresa tus credenciales para continuar</p>

        {/* Correo */}
        <Input
          label="Correo electrónico:"
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Contrasena con ojo */}
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPwd ? 'text' : 'password'}
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: 48 }}
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              aria-label={showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--n400)',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <EyeIcon visible={showPwd} />
            </button>
          </div>
        </div>

        {/* Olvidaste contrasena — alineado a la derecha */}
        <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 28 }}>
          <button className="auth-link-btn" onClick={() => navigate('olvide')}>
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Boton principal */}
        <Button full variant="primary" size="lg" onClick={() => navigate('dashboard-pac')}>
          Iniciar sesión
        </Button>

        {/* DEMO: acceso rapido a otros roles */}
        <div style={{
          marginTop: 28,
          padding: '14px 16px',
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px dashed var(--n300)',
          borderRadius: 12,
        }}>
          <p style={{
            fontSize: 11,
            color: 'var(--n500)',
            textAlign: 'center',
            marginBottom: 10,
            fontWeight: 600,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}>
            Modo demostración
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: "center" }}>
            <Button
              variant="outline"
              size="sm"
              style={{ flex: 1 }}
              onClick={() => navigate('dashboard-doc')}
            >
              👨‍⚕️ Doctor
            </Button>
            <Button
              variant="outline"
              size="sm"
              style={{ flex: 1 }}
              onClick={() => navigate('dashboard-admin')}
            >
              ⚙️ Administrador
            </Button>
          </div>
        </div>

        {/* Link al registro */}
        <p style={{
          textAlign: 'center',
          marginTop: 24,
          fontSize: 14,
          color: 'var(--n600)',
        }}>
          ¿No tienes cuenta?{' '}
          <button className="auth-link-btn" onClick={() => navigate('registro')}>
            Regístrate aquí
          </button>
        </p>

      </div>
    </AuthLayout>
  );
};

export default Login;
