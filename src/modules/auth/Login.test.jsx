import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('<Login />', () => {

  test('renderiza el título "Iniciar sesión"', () => {
    render(<Login navigate={() => {}} />);
    expect(screen.getByRole('heading', { name: /iniciar sesión/i })).toBeInTheDocument();
  });

  test('renderiza los campos de correo y contraseña', () => {
    render(<Login navigate={() => {}} />);
    expect(screen.getByPlaceholderText('tu@correo.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
  });

  test('al hacer clic en "Iniciar sesión" navega al dashboard del paciente', () => {
    const navigate = jest.fn();
    render(<Login navigate={navigate} />);
    fireEvent.click(screen.getByRole('button', { name: /^iniciar sesión$/i }));
    expect(navigate).toHaveBeenCalledWith('dashboard-pac');
  });

  test('al hacer clic en "¿Olvidaste tu contraseña?" navega a olvide', () => {
    const navigate = jest.fn();
    render(<Login navigate={navigate} />);
    fireEvent.click(screen.getByText(/olvidaste tu contraseña/i));
    expect(navigate).toHaveBeenCalledWith('olvide');
  });

  test('al hacer clic en "Regístrate aquí" navega a registro', () => {
    const navigate = jest.fn();
    render(<Login navigate={navigate} />);
    fireEvent.click(screen.getByText(/regístrate aquí/i));
    expect(navigate).toHaveBeenCalledWith('registro');
  });

  test('los botones de demo navegan al dashboard del rol correspondiente', () => {
    const navigate = jest.fn();
    render(<Login navigate={navigate} />);

    fireEvent.click(screen.getByRole('button', { name: /doctor/i }));
    expect(navigate).toHaveBeenCalledWith('dashboard-doc');

    fireEvent.click(screen.getByRole('button', { name: /administrador/i }));
    expect(navigate).toHaveBeenCalledWith('dashboard-admin');
  });

  test('actualiza el valor del campo de correo al escribir', () => {
    render(<Login navigate={() => {}} />);
    const input = screen.getByPlaceholderText('tu@correo.com');
    fireEvent.change(input, { target: { value: 'juan@mail.com' } });
    expect(input.value).toBe('juan@mail.com');
  });

  test('el campo de contraseña inicia como tipo password', () => {
    render(<Login navigate={() => {}} />);
    const input = screen.getByPlaceholderText('••••••••');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('al hacer clic en el ojo, el campo de contraseña se vuelve visible', () => {
    render(<Login navigate={() => {}} />);
    const input = screen.getByPlaceholderText('••••••••');
    const eyeBtn = screen.getByLabelText(/mostrar contraseña/i);

    fireEvent.click(eyeBtn);
    expect(input).toHaveAttribute('type', 'text');

    fireEvent.click(screen.getByLabelText(/ocultar contraseña/i));
    expect(input).toHaveAttribute('type', 'password');
  });

});
