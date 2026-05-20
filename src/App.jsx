import { useState } from 'react';
import Topbar from './layouts/Topbar';

// Auth
import Login from './modules/auth/Login';
import Registro from './modules/auth/Registro';
import { Verificar, Olvide, NuevaPass } from './modules/auth/AuthScreens';

// Paciente
import DashboardPac from './modules/paciente/DashboardPac';
import Especialidades from './modules/paciente/Especialidades';
import AgendarCita from './modules/paciente/AgendarCita';
import { Confirmar, Exito } from './modules/paciente/ConfirmarExito';
import MisCitas from './modules/paciente/MisCitas';
import MiPerfil from './modules/paciente/MiPerfil';

// Doctor
import DashboardDoc from './modules/doctor/DashboardDoc';
import MiAgenda from './modules/doctor/MiAgenda';

// Admin
import DashboardAdmin from './modules/admin/DashboardAdmin';
import Reportes from './modules/admin/Reportes';

/* Pantallas de solo autenticacion - sin Topbar */
const AUTH_SCREENS = new Set(['login', 'registro', 'verificar', 'olvide', 'nueva-pass']);

/* Rol por pantalla */
const resolveRole = (screen) => {
  if (['dashboard-doc', 'agenda'].includes(screen)) return 'doctor';
  if (['dashboard-admin', 'reportes'].includes(screen)) return 'admin';
  return 'patient';
};

const App = () => {
  const [screen, setScreen] = useState('login');

  const navigate = (target) => {
    setScreen(target);
    window.scrollTo(0, 0);
  };

  const isAuth = AUTH_SCREENS.has(screen);
  const role = resolveRole(screen);

  const renderScreen = () => {
    switch (screen) {
      // Auth
      case 'login': return <Login navigate={navigate} />;
      case 'registro': return <Registro navigate={navigate} />;
      case 'verificar': return <Verificar navigate={navigate} />;
      case 'olvide': return <Olvide navigate={navigate} />;
      case 'nueva-pass': return <NuevaPass navigate={navigate} />;

      // Paciente
      case 'dashboard-pac': return <DashboardPac navigate={navigate} />;
      case 'especialidades': return <Especialidades navigate={navigate} />;
      case 'agendar': return <AgendarCita navigate={navigate} />;
      case 'confirmar': return <Confirmar navigate={navigate} />;
      case 'exito': return <Exito navigate={navigate} />;
      case 'mis-citas': return <MisCitas />;
      case 'perfil': return <MiPerfil />;

      // Doctor
      case 'dashboard-doc': return <DashboardDoc navigate={navigate} />;
      case 'agenda': return <MiAgenda />;

      // Admin
      case 'dashboard-admin': return <DashboardAdmin navigate={navigate} />;
      case 'reportes': return <Reportes />;

      default: return <Login navigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: isAuth ? 'transparent' : 'var(--n100)' }}>
      {/* Topbar solo en pantallas autenticadas */}
      {!isAuth && (
        <Topbar role={role} navigate={navigate} current={screen} />
      )}

      {/* Contenido */}
      {isAuth ? (
        renderScreen()
      ) : (
        <main className="page-wrapper">
          {renderScreen()}
        </main>
      )}
    </div>
  );
};

export default App;
