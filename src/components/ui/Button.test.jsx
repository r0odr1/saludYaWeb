import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {

  test('renderiza el texto del botón', () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole('button', { name: /guardar/i })).toBeInTheDocument();
  });

  test('aplica la variante primary por defecto', () => {
    render(<Button>Acción</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  test('aplica la variante y tamaño que recibe por props', () => {
    render(<Button variant="danger" size="sm">Eliminar</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn-danger');
    expect(btn).toHaveClass('btn-sm');
  });

  test('dispara onClick cuando se hace clic', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Clic</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('no dispara onClick si está disabled', () => {
    const onClick = jest.fn();
    render(<Button disabled onClick={onClick}>Inactivo</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  test('aplica la clase btn-full cuando full=true', () => {
    render(<Button full>Ancho completo</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-full');
  });

});
