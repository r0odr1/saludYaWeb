import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('<Badge />', () => {

  test('renderiza el label correcto para estado "agendada"', () => {
    render(<Badge status="agendada" />);
    expect(screen.getByText('AGENDADA')).toBeInTheDocument();
  });

  test('renderiza el label correcto para estado "completada"', () => {
    render(<Badge status="completada" />);
    expect(screen.getByText('COMPLETADA')).toBeInTheDocument();
  });

  test('renderiza el label correcto para estado "no_asistio"', () => {
    render(<Badge status="no_asistio" />);
    expect(screen.getByText('NO ASISTIÓ')).toBeInTheDocument();
  });

  test('aplica la clase CSS correspondiente al estado', () => {
    render(<Badge status="cancelada" />);
    expect(screen.getByText('CANCELADA')).toHaveClass('badge-cancelada');
  });

  test('renderiza badges de roles (doctor, paciente, admin)', () => {
    const { rerender } = render(<Badge status="doctor" />);
    expect(screen.getByText('DOCTOR')).toBeInTheDocument();
    rerender(<Badge status="paciente" />);
    expect(screen.getByText('PACIENTE')).toBeInTheDocument();
    rerender(<Badge status="admin" />);
    expect(screen.getByText('ADMIN')).toBeInTheDocument();
  });

});
