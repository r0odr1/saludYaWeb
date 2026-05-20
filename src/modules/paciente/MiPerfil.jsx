import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { colors } from '../../tokens/tokens';

const MiPerfil = () => (
  <div className="fade-in">
    {/* Header */}
    <div
      className="profile-header"
      style={{ background: `linear-gradient(135deg, ${colors.g700}, ${colors.g500})` }}
    >
      <div className="profile-avatar">J</div>
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>
          Juan Pérez
        </h2>
        <p style={{ fontSize: 13, opacity: 0.8 }}>Paciente · CC 1234567890</p>
        <div style={{ marginTop: 8 }}>
          <Badge status="paciente" />
        </div>
      </div>
    </div>

    {/* Información personal */}
    <Card style={{ marginBottom: 20 }}>
      <h2 className="section-title">Información personal</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Input label="Nombre completo" defaultValue="Juan Pérez" />
        <Input label="Teléfono" defaultValue="300 123 4565" />
      </div>
      <Input
        label="Correo electrónico"
        defaultValue="juan@mail.com"
        readonly
        hint="Para cambiar el correo se requiere verificación adicional."
      />
      <div className="text-right">
        <Button variant="primary">Guardar cambios</Button>
      </div>
    </Card>

    {/* Cambiar contraseña */}
    <Card>
      <h2 className="section-title">Cambiar contraseña</h2>
      <Input label="Contraseña actual" type="password" placeholder="••••••••" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Input label="Nueva contraseña"    type="password" placeholder="••••••••" />
        <Input label="Confirmar nueva"     type="password" placeholder="••••••••" />
      </div>
      <div className="text-right">
        <Button variant="outline">Cambiar contraseña</Button>
      </div>
    </Card>
  </div>
);

export default MiPerfil;
