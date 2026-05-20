import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {

  test('renderiza el label cuando se le pasa', () => {
    render(<Input label="Correo electrónico" />);
    expect(screen.getByText('Correo electrónico')).toBeInTheDocument();
  });

  test('muestra el placeholder', () => {
    render(<Input placeholder="tu@correo.com" />);
    expect(screen.getByPlaceholderText('tu@correo.com')).toBeInTheDocument();
  });

  test('actualiza el valor al escribir', () => {
    const onChange = jest.fn();
    render(<Input placeholder="email" onChange={onChange} />);
    fireEvent.change(screen.getByPlaceholderText('email'), { target: { value: 'juan@mail.com' } });
    expect(onChange).toHaveBeenCalled();
  });

  test('muestra mensaje de hint', () => {
    render(<Input hint="Mínimo 8 caracteres" />);
    expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument();
  });

  test('muestra mensaje de error y aplica clase de error', () => {
    render(<Input error="Correo inválido" />);
    expect(screen.getByText('Correo inválido')).toBeInTheDocument();
    expect(screen.getByText('Correo inválido')).toHaveClass('form-error');
  });

  test('aplica readonly cuando se le pasa', () => {
    render(<Input readonly defaultValue="bloqueado" />);
    expect(screen.getByDisplayValue('bloqueado')).toHaveAttribute('readonly');
  });

});
