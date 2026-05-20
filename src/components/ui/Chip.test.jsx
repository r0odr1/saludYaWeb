import { render, screen, fireEvent } from '@testing-library/react';
import Chip from './Chip';

describe('<Chip />', () => {

  test('renderiza el label', () => {
    render(<Chip label="Todas" />);
    expect(screen.getByText('Todas')).toBeInTheDocument();
  });

  test('aplica clase chip por defecto', () => {
    render(<Chip label="Filtro" />);
    expect(screen.getByText('Filtro')).toHaveClass('chip');
  });

  test('aplica clase chip--active cuando active=true', () => {
    render(<Chip label="Activo" active />);
    expect(screen.getByText('Activo')).toHaveClass('chip--active');
  });

  test('NO aplica chip--active cuando active=false', () => {
    render(<Chip label="Inactivo" active={false} />);
    expect(screen.getByText('Inactivo')).not.toHaveClass('chip--active');
  });

  test('dispara onClick al hacer clic', () => {
    const onClick = jest.fn();
    render(<Chip label="Click" onClick={onClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});
