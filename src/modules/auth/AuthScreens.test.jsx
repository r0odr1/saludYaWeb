import { render, screen, fireEvent } from '@testing-library/react';
import { Verificar, Olvide, NuevaPass } from './AuthScreens';

describe('<AuthScreens />', () => {

  describe('<Verificar />', () => {

    test('renderiza correctamente la pantalla verificar cuenta', () => {
      render(<Verificar navigate={jest.fn()} />);

      expect(
        screen.getByRole('heading', {
          name: /verifica tu cuenta/i
        })
      ).toBeInTheDocument();

      expect(
        screen.getByText(/juan@correo\.com/i)
      ).toBeInTheDocument();

      expect(
        screen.getByRole('button', {
          name: /verificar cuenta/i
        })
      ).toBeInTheDocument();
    });

    test('renderiza los 6 inputs del código OTP', () => {
      render(<Verificar navigate={jest.fn()} />);

      const inputs = screen.getAllByRole('textbox');

      expect(inputs).toHaveLength(6);
    });

    test('navega al dashboard del paciente al verificar', () => {
      const navigate = jest.fn();

      render(<Verificar navigate={navigate} />);

      fireEvent.click(
        screen.getByRole('button', {
          name: /verificar cuenta/i
        })
      );

      expect(navigate).toHaveBeenCalledWith('dashboard-pac');
    });

    test('vuelve al login', () => {
      const navigate = jest.fn();

      render(<Verificar navigate={navigate} />);

      fireEvent.click(
        screen.getByRole('button', {
          name: /volver al inicio de sesión/i
        })
      );

      expect(navigate).toHaveBeenCalledWith('login');
    });

  });

  describe('<Olvide />', () => {

    test('renderiza correctamente la pantalla olvidar contraseña', () => {
      render(<Olvide navigate={jest.fn()} />);

      expect(
        screen.getByRole('heading', {
          name: /¿olvidaste tu contraseña\?/i
        })
      ).toBeInTheDocument();

      expect(
        screen.getByPlaceholderText(/tu@correo\.com/i)
      ).toBeInTheDocument();
    });

    test('navega a nueva contraseña', () => {
      const navigate = jest.fn();

      render(<Olvide navigate={navigate} />);

      fireEvent.click(
        screen.getByRole('button', {
          name: /enviar codigo/i
        })
      );

      expect(navigate).toHaveBeenCalledWith('nueva-pass');
    });

    test('vuelve al login desde olvidar contraseña', () => {
      const navigate = jest.fn();

      render(<Olvide navigate={navigate} />);

      fireEvent.click(
        screen.getByRole('button', {
          name: /volver al inicio de sesión/i
        })
      );

      expect(navigate).toHaveBeenCalledWith('login');
    });

  });

  describe('<NuevaPass />', () => {

    test('renderiza correctamente nueva contraseña', () => {
      render(<NuevaPass navigate={jest.fn()} />);

      expect(
        screen.getByRole('heading', {
          name: /^nueva contraseña$/i
        })
      ).toBeInTheDocument();

      expect(
        screen.getByText(/confirmar contraseña/i)
      ).toBeInTheDocument();

      const passwordInputs = screen.getAllByPlaceholderText(/••••••••/i);

      expect(passwordInputs).toHaveLength(2);
    });

    test('renderiza los requisitos de contraseña', () => {
      render(<NuevaPass navigate={jest.fn()} />);

      expect(
        screen.getByText(/mínimo 8 caracteres/i)
      ).toBeInTheDocument();

      expect(
        screen.getByText(/una letra mayúscula/i)
      ).toBeInTheDocument();

      expect(
        screen.getByText(/una letra minúscula/i)
      ).toBeInTheDocument();

      expect(
        screen.getByText(/un número/i)
      ).toBeInTheDocument();
    });

    test('renderiza dos inputs password', () => {
      render(<NuevaPass navigate={jest.fn()} />);

      const passwordInputs = screen.getAllByPlaceholderText(/••••••••/i);

      expect(passwordInputs).toHaveLength(2);
    });

    test('vuelve al login al establecer nueva contraseña', () => {
      const navigate = jest.fn();

      render(<NuevaPass navigate={navigate} />);

      fireEvent.click(
        screen.getByRole('button', {
          name: /establecer nueva contraseña/i
        })
      );

      expect(navigate).toHaveBeenCalledWith('login');
    });

  });

});