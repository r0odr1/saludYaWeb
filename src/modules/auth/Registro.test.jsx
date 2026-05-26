import { render, screen, fireEvent } from '@testing-library/react';
import Registro from './Registro';

describe('<Registro />', () => {

  test('renderiza título y subtítulo', () => {
    render(<Registro navigate={() => {}} />);

    expect(
      screen.getByRole('heading', { name: /crear cuenta/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/completa tus datos para registrarte/i)
    ).toBeInTheDocument();
  });

  test('renderiza campos del formulario', () => {
    render(<Registro navigate={() => {}} />);

    expect(screen.getByPlaceholderText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('300 123 4567')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('tu@correo.com')).toBeInTheDocument();

    // hay 2 inputs password
    expect(
      screen.getAllByPlaceholderText('••••••••')
    ).toHaveLength(2);
  });

  test('estado inicial de requisitos de contraseña', () => {
    render(<Registro navigate={() => {}} />);

    expect(screen.getByText('Mínimo 8 caracteres')).not.toHaveClass('pwd-req--ok');
    expect(screen.getByText('Una letra mayúscula')).not.toHaveClass('pwd-req--ok');
    expect(screen.getByText('Un número')).not.toHaveClass('pwd-req--ok');
  });

  test('activa requisito mínimo 8 caracteres', () => {
    render(<Registro navigate={() => {}} />);

    const pwdInput = screen.getAllByPlaceholderText('••••••••')[0];

    fireEvent.change(pwdInput, { target: { value: '12345678' } });

    expect(screen.getByText('Mínimo 8 caracteres')).toHaveClass('pwd-req--ok');
  });

  test('activa todos los requisitos cuando la contraseña es válida', () => {
    render(<Registro navigate={() => {}} />);

    const pwdInput = screen.getAllByPlaceholderText('••••••••')[0];

    fireEvent.change(pwdInput, { target: { value: 'Password123' } });

    expect(screen.getByText('Mínimo 8 caracteres')).toHaveClass('pwd-req--ok');
    expect(screen.getByText('Una letra mayúscula')).toHaveClass('pwd-req--ok');
    expect(screen.getByText('Un número')).toHaveClass('pwd-req--ok');
  });

  test('navega a verificar al crear cuenta', () => {
    const navigate = jest.fn();

    render(<Registro navigate={navigate} />);

    fireEvent.click(
      screen.getByRole('button', { name: /crear cuenta/i })
    );

    expect(navigate).toHaveBeenCalledWith('verificar');
  });

  test('navega a login desde iniciar sesión', () => {
    const navigate = jest.fn();

    render(<Registro navigate={navigate} />);

    fireEvent.click(
      screen.getByRole('button', { name: /iniciar sesión/i })
    );

    expect(navigate).toHaveBeenCalledWith('login');
  });

});