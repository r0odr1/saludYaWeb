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
    expect(screen.getByText('Laura Suárez')).toBeInTheDocument();
  });

  test('renderiza los chips de filtro', () => {
    render(<MiAgenda />);
    expect(screen.getByText('Todas')).toBeInTheDocument();
    expect(screen.getByText('Agendadas')).toBeInTheDocument();
    expect(screen.getByText('Completadas')).toBeInTheDocument();
  });

  test('filtra citas por "Agendadas"', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getByText('Agendadas'));

    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('Laura Suárez')).toBeInTheDocument();
    expect(screen.queryByText('Ana López')).not.toBeInTheDocument();
    expect(screen.queryByText('Carlos Ruiz')).not.toBeInTheDocument();
  });

  test('filtra citas por "Completadas"', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getByText('Completadas'));

    expect(screen.getByText('Ana López')).toBeInTheDocument();
    expect(screen.queryByText('Juan Pérez')).not.toBeInTheDocument();
    expect(screen.queryByText('Carlos Ruiz')).not.toBeInTheDocument();
    expect(screen.queryByText('Laura Suárez')).not.toBeInTheDocument();
  });

  test('volver a "Todas" restaura todas las citas', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getByText('Agendadas'));
    fireEvent.click(screen.getByText('Todas'));

    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('Ana López')).toBeInTheDocument();
    expect(screen.getByText('Carlos Ruiz')).toBeInTheDocument();
    expect(screen.getByText('Laura Suárez')).toBeInTheDocument();
  });

  test('muestra la nota solo en citas que la tienen', () => {
    render(<MiAgenda />);
    expect(
      screen.getByText(/Masaje descontracturante espalda/i)
    ).toBeInTheDocument();
  });

  test('solo las citas agendadas muestran botones de acción', () => {
    render(<MiAgenda />);
    // Hay exactamente 2 citas agendadas inicialmente (Juan y Laura)
    expect(screen.getAllByRole('button', { name: /completar/i })).toHaveLength(2);
    expect(screen.getAllByRole('button', { name: /no asistió/i })).toHaveLength(2);
    expect(screen.getAllByRole('button', { name: /reasignar/i })).toHaveLength(2);
  });

  test('al marcar una cita como "Completar", el badge cambia a COMPLETADA', () => {
    render(<MiAgenda />);
    const botones = screen.getAllByText(/Completar/i);
    fireEvent.click(botones[0]);
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
    expect(screen.getByRole('heading', { name: /reasignar cita/i })).toBeInTheDocument();
    expect(screen.getByText(/el paciente será notificado/i)).toBeInTheDocument();
  });

  test('el modal se cierra al hacer clic en Cancelar', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getAllByText(/Reasignar/i)[0]);
    fireEvent.click(screen.getByRole('button', { name: /^cancelar$/i }));
    expect(screen.queryByText(/el paciente será notificado/i)).not.toBeInTheDocument();
  });

  test('el modal se cierra al confirmar reasignación', () => {
    render(<MiAgenda />);
    fireEvent.click(screen.getAllByText(/Reasignar/i)[0]);
    fireEvent.click(screen.getByRole('button', { name: /^reasignar cita$/i }));
    expect(screen.queryByText(/el paciente será notificado/i)).not.toBeInTheDocument();
  });

});