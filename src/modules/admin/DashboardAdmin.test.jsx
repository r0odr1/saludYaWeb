import { render, screen, fireEvent } from '@testing-library/react';
import DashboardAdmin from './DashboardAdmin';

describe('<DashboardAdmin />', () => {

  test('renderiza el título del panel', () => {
    render(<DashboardAdmin navigate={() => {}} />);
    expect(screen.getByText(/panel de administración/i)).toBeInTheDocument();
  });

  test('renderiza la tabla de usuarios', () => {
    render(<DashboardAdmin navigate={() => {}} />);
    expect(screen.getByText('Dra. María González')).toBeInTheDocument();
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('Dr. Carlos Ramírez')).toBeInTheDocument();
  });

  test('renderiza badges DOCTOR y PACIENTE', () => {
    render(<DashboardAdmin navigate={() => {}} />);
    expect(screen.getAllByText('DOCTOR').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('PACIENTE')).toBeInTheDocument();
  });

  test('clic en "Reportes" navega a la pantalla de reportes', () => {
    const navigate = jest.fn();
    render(<DashboardAdmin navigate={navigate} />);
    fireEvent.click(screen.getByText('Reportes'));
    expect(navigate).toHaveBeenCalledWith('reportes');
  });

  test('al hacer clic en "Cambiar rol", se abre el modal', () => {
    render(<DashboardAdmin navigate={() => {}} />);
    fireEvent.click(screen.getAllByText('Cambiar rol')[0]);
    expect(screen.getByText(/cambiar rol de usuario/i)).toBeInTheDocument();
    expect(screen.getByText(/al cambiar a doctor/i)).toBeInTheDocument();
  });

  test('al seleccionar rol "Paciente" en el modal, oculta el aviso de Doctor', () => {
    render(<DashboardAdmin navigate={() => {}} />);
    fireEvent.click(screen.getAllByText('Cambiar rol')[0]);
    fireEvent.click(screen.getByText('Paciente'));
    expect(screen.queryByText(/al cambiar a doctor/i)).not.toBeInTheDocument();
  });

});
