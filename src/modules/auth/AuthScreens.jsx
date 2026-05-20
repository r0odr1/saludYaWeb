import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/* Verificar cuenta */
export const Verificar = ({ navigate }) => (
  <div
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      background: 'var(--bg)'
    }}
  >
    <div className="auth-form fade-in"
      style={{
        width: '100%',
        background: '#fff',
        border: '1px solid #d9d9d9',
        borderRadius: 28,
        padding: '40px 28px',
        textAlign: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
      }}
    >
      <div style={{ fontSize: 64, marginBottom: 16 }}>✉️</div>
      <h1 className="auth-form__title">Verifica tu cuenta</h1>
      <p className="auth-form__subtitle">
        Enviamos un código de 6 dígitos a<br />
        <strong>juan@correo.com</strong>
      </p>

      <div className="otp-group">
        {[4, 7, '', '', '', ''].map((val, i) => (
          <input
            key={i}
            className={`otp-input ${val !== '' ? 'otp-input--filled' : ''}`}
            maxLength={1}
            defaultValue={val}
          />
        ))}
      </div>

      <Button full variant="primary" size="lg" onClick={() => navigate('dashboard-pac')}>
        Verificar cuenta
      </Button>

      <p style={{ fontSize: 13, color: 'var(--n500)', marginTop: 12, height: 10 }}>
        ¿No recibiste el código?
      </p>
      <div
        style={{ marginTop: 30 }}
      >
        <Button variant="ghost">
          Reenviar código
        </Button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="auth-link-btn" onClick={() => navigate('login')}>
          ← Volver al inicio de sesión
        </button>
      </div>
    </div>
  </div>
);

/* Olvide contrasena */
export const Olvide = ({ navigate }) => (
  <div
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      background: 'var(--bg)'
    }}
  >
    <div className="auth-form fade-in"
      style={{
        width: '100%',
        background: '#fff',
        border: '1px solid #d9d9d9',
        borderRadius: 28,
        padding: '40px 28px',
        textAlign: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
      }}
    >
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔑</div>
      <h1 className="auth-form__title">¿Olvidaste tu contraseña?</h1>
      <p className="auth-form__subtitle" style={{ textAlign: 'left' }}>
        Ingresa a tu correo y te enviaremos un codigo para restablecerla.
      </p>
      <div style={{ textAlign: 'left' }}>
        <Input label="Correo electrónico" type="email" placeholder="tu@correo.com" />
      </div>
      <Button full variant="primary" size="lg" onClick={() => navigate('nueva-pass')}>
        Enviar codigo
      </Button>
      <div style={{ marginTop: 12 }}>
        <button className="auth-link-btn" onClick={() => navigate('login')}>
          ← Volver al inicio de sesión
        </button>
      </div>
    </div>
  </div>
);

/* Nueva contrasena */
export const NuevaPass = ({ navigate }) => (
  <div
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      background: 'var(--bg)'
    }}
  >
    <div className="auth-form fade-in"
      style={{
        width: '100%',
        background: '#fff',
        border: '1px solid #d9d9d9',
        borderRadius: 28,
        padding: '40px 28px',
        textAlign: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
      }}
    >
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔒</div>
      <h1 className="auth-form__title">Nueva contraseña</h1>
      <p className="auth-form__subtitle" style={{ textAlign: 'center' }}>
        Establece tu nueva contraseña.
      </p>

      <div style={{ textAlign: 'left' }}>
        <Input label="Nueva contraseña" type="password" placeholder="••••••••" />
      </div>

      <div style={{ textAlign: 'left' }}>
        <Input label="Confirmar contraseña" type="password" placeholder="••••••••" />
      </div>

      <div style={{ textAlign: 'left', marginBottom: 16 }}>
        {['Mínimo 8 caracteres', 'Una letra mayúscula', 'Una letra minúscula', 'Un número'].map(
          (req) => (
            <div key={req} className="pwd-req pwd-req--ok">
              <span className="pwd-req__dot" />
              {req}
            </div>
          )
        )}
      </div>

      <Button full variant="primary" size="lg" onClick={() => navigate('login')}>
        Establecer nueva contraseña
      </Button>
    </div>
  </div>
);
