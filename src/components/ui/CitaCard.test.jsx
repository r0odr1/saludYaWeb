import { render, screen, fireEvent } from '@testing-library/react';
import CitaCard from './CitaCard';

describe('<CitaCard />', () => {

  const baseProps = {
    specialty: 'Electroterapia',
    doctor:    'Dra. María González',
    date:      'Lun 14 Abr',
    time:      '10:00–10:30',
    status:    'agendada',
    specColor: '#F59E0B',
  };

  test('renderiza especialidad, doctor y fecha', () => {
    render(<CitaCard {...baseProps} />);
    expect(screen.getByText('Electroterapia')).toBeInTheDocument();
    expect(screen.getByText(/Dra\. María González/)).toBeInTheDocument();
    expect(screen.getByText(/Lun 14 Abr/)).toBeInTheDocument();
  });

  test('renderiza el badge de estado', () => {
    render(<CitaCard {...baseProps} />);
    expect(screen.getByText('AGENDADA')).toBeInTheDocument();
  });

  test('renderiza nota cuando se le pasa', () => {
    render(<CitaCard {...baseProps} note="Paciente con mejoría" />);
    expect(screen.getByText(/Paciente con mejoría/)).toBeInTheDocument();
  });

  test('renderiza botón Editar solo si onEdit existe', () => {
    const { rerender } = render(<CitaCard {...baseProps} />);
    expect(screen.queryByText(/Editar/)).not.toBeInTheDocument();
    rerender(<CitaCard {...baseProps} onEdit={() => {}} />);
    expect(screen.getByText(/Editar/)).toBeInTheDocument();
  });

  test('dispara onCancel al hacer clic en Cancelar', () => {
    const onCancel = jest.fn();
    render(<CitaCard {...baseProps} onCancel={onCancel} />);
    fireEvent.click(screen.getByText(/Cancelar/));
    expect(onCancel).toHaveBeenCalled();
  });

});
