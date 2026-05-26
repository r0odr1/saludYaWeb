import { render, screen, fireEvent } from '@testing-library/react';
import MiAgenda from './MiAgenda';

describe('<MiAgenda />', () => {

  test('renderiza el título', () => {
    render(<MiAgenda />);
    expect(screen.getByRole('heading', { name: /mi agenda/i })).toBeInTheDocument();
  });

  test('renderiza las citas iniciales del doctor', () => {
    render(<MiAgenda />);
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('Ana López')).toBeInTheDocument();
    expect(screen.getByText('Carlos Ruiz')).toBeInTheDocument();
  });

  test('renderiza los chips de filtro', () => {
    render(<MiAgenda />);
    expect(screen.getByText('Todas')).toBeInTheDocument();
    expect(screen.getByText('Agendadas')).toBeInTheDocument();
    expect(screen.getByText('Completadas')).toBeInTheDocument();
  });

  test('al marcar una cita como "Completar", el badge cambia a COMPLETADA', () => {
    render(<MiAgenda />);
    const botones = screen.getAllByText(/Completar/i);
    fireEvent.click(botones[0]);
    // Después del clic, debe haber al menos una cita más como COMPLETADA
    expect(screen.getAllByText('COMPLETADA').length).toBeGreaterThanOrEqual(2);
  });

  test('al marcar como "No asistió", el badge cambia a NO ASISTIÓ', () => {
    render(<MiAgenda />);
    const botones = screen.getAllByText(/No asistió/i);
    fireEvent.click(botones[0]);
    expect(screen.getAllByText('NO ASISTIÓ').length).toBeGreaterThanOrEqual(2);
  });

  test('al hacer clic en "Reasignar", abre el modal', () => {
    render(<MiAgenda />);
    const botones = screen.getAllByText(/Reasignar/i);
    fireEvent.click(botones[0]);
    expect(screen.getByRole('heading', {
        name: /reasignar cita/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/el paciente será notificado/i)).toBeInTheDocument();
  });

  test('el modal se cierra al hacer clic en Cancelar', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getAllByText(/Reasignar/i)[0]);
    fireEvent.click(screen.getByRole('button', { name: /^cancelar$/i }));
    expect(screen.queryByText(/el paciente será notificado/i)).not.toBeInTheDocument();
  });

});
