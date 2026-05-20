import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App /> — Routing', () => {

  test('inicia en la pantalla de Login', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /iniciar sesión/i
      })
    ).toBeInTheDocument();
  });

  test('NO muestra el Topbar en la pantalla de Login', () => {
    render(<App />);

    expect(
      screen.queryByRole('navigation')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText('Salir')
    ).not.toBeInTheDocument();
  });

  test('al iniciar sesión como paciente, muestra el dashboard y el Topbar', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    expect(
      screen.getByText(/¡hola juan!/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('navigation')
    ).toBeInTheDocument();
  });

  test('al hacer clic en "Doctor", muestra el dashboard del doctor', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /doctor/i
      })
    );

    expect(
      screen.getByText(/dra\. maría gonzález/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/panel de control/i)
    ).toBeInTheDocument();
  });

  test('al hacer clic en "Administrador", muestra el panel de admin', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /administrador/i
      })
    );

    expect(
      screen.getByText(/panel de administración/i)
    ).toBeInTheDocument();
  });

  test('navegando: login -> registro -> verificar', () => {
    render(<App />);

    fireEvent.click(
      screen.getByText(/regístrate aquí/i)
    );

    expect(
      screen.getByRole('heading', {
        name: /crear cuenta/i
      })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', {
        name: /crear cuenta/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /verifica tu cuenta/i
      })
    ).toBeInTheDocument();
  });

  test('botón Salir vuelve al login', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    expect(
      screen.getByRole('navigation')
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByText('Salir')
    );

    expect(
      screen.getByRole('heading', {
        name: /iniciar sesión/i
      })
    ).toBeInTheDocument();
  });

  test('navega a olvide contraseña', () => {
    render(<App />);

    fireEvent.click(
      screen.getByText(/¿olvidaste tu contraseña\?/i)
    );

    expect(
      screen.getByRole('heading', {
        name: /¿olvidaste tu contraseña\?/i
      })
    ).toBeInTheDocument();
  });

  test('navega de olvide a nueva contraseña', () => {
    render(<App />);

    fireEvent.click(
      screen.getByText(/¿olvidaste tu contraseña\?/i)
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /enviar enlace/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /nueva contraseña/i
      })
    ).toBeInTheDocument();
  });

  test('paciente navega a especialidades', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /especialidad/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /especialidades/i
      })
    ).toBeInTheDocument();
  });

  test('paciente navega a agendar cita', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /especialidad/i
      })
    );

    fireEvent.click(
      screen.getAllByRole('button', {
        name: /agendar/i
      })[0]
    );

    expect(
      screen.getByText(/selecciona una fecha/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/horarios disponibles/i)
    ).toBeInTheDocument();
  });

  test('paciente navega a confirmar cita', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /especialidad/i
      })
    );

    fireEvent.click(
      screen.getAllByRole('button', {
        name: /agendar/i
      })[0]
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /siguiente/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /confirmar cita/i
      })
    ).toBeInTheDocument();
  });

  test('paciente navega a éxito', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /especialidad/i
      })
    );

    fireEvent.click(
      screen.getAllByRole('button', {
        name: /agendar/i
      })[0]
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /siguiente/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /confirmar cita/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /cita agendada/i
      })
    ).toBeInTheDocument();
  });

  test('paciente navega a mis citas', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /mis citas/i
      })
    );

    expect(
      screen.getByText(/electroterapia/i)
    ).toBeInTheDocument();
  });

  test('paciente navega a perfil', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /^iniciar sesión$/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /^j$/i
      })
    );

    expect(
      screen.getByText(/información personal/i)
    ).toBeInTheDocument();
  });

  test('doctor navega a agenda', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /doctor/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /mi agenda/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /mi agenda/i
      })
    ).toBeInTheDocument();
  });

  test('admin navega a reportes', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /administrador/i
      })
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /^reportes$/i
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /^reportes$/i
      })
    ).toBeInTheDocument();
  });

});