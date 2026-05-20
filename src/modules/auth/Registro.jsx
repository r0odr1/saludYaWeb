import { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const getPwdScore = (pwd) => ({
  len: pwd.length >= 8,
  upper: /[A-Z]/.test(pwd),
  num: /[0-9]/.test(pwd),
});

const BAR_COLORS = ['var(--n300)', 'var(--danger)', 'var(--warning)', 'var(--success)'];
const BAR_WIDTHS = ['0%', '33%', '66%', '100%'];

const Registro = ({ navigate }) => {
  const [pwd, setPwd] = useState('');
  const checks = getPwdScore(pwd);
  const score = Object.values(checks).filter(Boolean).length;

  return (
    <AuthLayout
      tagline="Crea tu cuenta y empieza a gestionar tus citas hoy mismo."
      stepLabel="Datos de registro"
    >
      <div className="auth-form fade-in" style={{ maxWidth: 460 }}>
        <h1 className="auth-form__title">Crear cuenta</h1>
        <p className="auth-form__subtitle">Completa tus datos para registrarte</p>

        <Input label="Nombre completo *" placeholder="Juan Pérez" />
        <Input label="Correo electrónico *" type="email" placeholder="tu@correo.com" />
        <Input label="Teléfono *" placeholder="300 123 4567" />

        {/* Contrasena con indicador */}
        <div className="form-group">
          <label className="form-label">Contraseña *</label>
          <input
            type="password"
            className="form-input"
            placeholder="••••••••"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <div className="pwd-strength">
            <div className="pwd-bar-track">
              <div
                className="pwd-bar-fill"
                style={{ width: BAR_WIDTHS[score], background: BAR_COLORS[score] }}
              />
            </div>
            {[['len', 'Mínimo 8 caracteres'], ['upper', 'Una letra mayúscula'], ['num', 'Un número']].map(
              ([key, text]) => (
                <div key={key} className={`pwd-req ${checks[key] ? 'pwd-req--ok' : ''}`}>
                  <span className="pwd-req__dot" />
                  {text}
                </div>
              )
            )}
          </div>
        </div>

        <Input label="Confirmar contraseña *" type="password" placeholder="••••••••" />

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 20,
            padding: 14,
            background: 'var(--n50)',
            borderRadius: 8,
            border: '1px solid var(--border-color)',
          }}
        >
          <input type="checkbox" style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0 }} />
          <label style={{ fontSize: 13, color: 'var(--n600)', cursor: 'pointer' }}>
            Acepto el tratamiento de mis datos personales según la{' '}
            <strong>Ley 1581 de 2012</strong> (Habeas Data, Colombia)
          </label>
        </div>

        <Button full variant="primary" size="lg" onClick={() => navigate('verificar')}>
          Crear cuenta
        </Button>

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--n500)' }}>
          ¿Ya tienes cuenta?{' '}
          <button className="auth-link-btn" onClick={() => navigate('login')}>
            Iniciar sesión
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Registro;
