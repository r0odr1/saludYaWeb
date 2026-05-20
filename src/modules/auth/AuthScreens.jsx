import AuthLayout from '../../layouts/AuthLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/* Verificar cuenta */
export const Verificar = ({ navigate }) => (
  <AuthLayout tagline="Casi listo. Solo confirma tu identidad.">
    <div className="auth-form fade-in" style={{ textAlign: 'center' }}>
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

      <p style={{ fontSize: 13, color: 'var(--n500)', marginTop: 12 }}>
        ¿No recibiste el código?
      </p>
      <Button full variant="ghost" style={{ marginTop: 8 }}>
        Reenviar código
      </Button>

      <div style={{ marginTop: 16 }}>
        <button className="auth-link-btn" onClick={() => navigate('login')}>
          ← Volver al inicio de sesión
        </button>
      </div>
    </div>
  </AuthLayout>
);

/* Olvide contrasena */
export const Olvide = ({ navigate }) => (
  <AuthLayout tagline="Recupera el acceso a tu cuenta en segundos.">
    <div className="auth-form fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔑</div>
      <h1 className="auth-form__title">¿Olvidaste tu contraseña?</h1>
      <p className="auth-form__subtitle" style={{ textAlign: 'left' }}>
        Ingresa tu correo y te enviaremos un enlace para restablecerla.
        El enlace tendrá vigencia de 30 minutos.
      </p>
      <Input label="Correo electrónico" type="email" placeholder="tu@correo.com" />
      <Button full variant="primary" size="lg" onClick={() => navigate('nueva-pass')}>
        Enviar enlace
      </Button>
      <div style={{ marginTop: 12 }}>
        <button className="auth-link-btn" onClick={() => navigate('login')}>
          ← Volver al inicio de sesión
        </button>
      </div>
    </div>
  </AuthLayout>
);

/* Nueva contrasena */
export const NuevaPass = ({ navigate }) => (
  <AuthLayout tagline="Crea una contraseña segura para proteger tu cuenta.">
    <div className="auth-form fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔒</div>
      <h1 className="auth-form__title">Nueva contraseña</h1>
      <p className="auth-form__subtitle" style={{ textAlign: 'left' }}>
        Establece tu nueva contraseña segura.
      </p>

      <Input label="Nueva contraseña" type="password" placeholder="••••••••" />

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

      <Input label="Confirmar contraseña" type="password" placeholder="••••••••" />

      <Button full variant="primary" size="lg" onClick={() => navigate('login')}>
        Establecer nueva contraseña
      </Button>
    </div>
  </AuthLayout>
);
