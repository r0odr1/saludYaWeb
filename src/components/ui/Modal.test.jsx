import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {

  test('NO renderiza nada cuando open=false', () => {
    render(
      <Modal open={false} onClose={() => {}} title="Título">
        <p>Contenido</p>
      </Modal>
    );
    expect(screen.queryByText('Título')).not.toBeInTheDocument();
    expect(screen.queryByText('Contenido')).not.toBeInTheDocument();
  });

  test('renderiza el contenido cuando open=true', () => {
    render(
      <Modal open onClose={() => {}} title="Confirmar" subtitle="Detalles">
        <p>Cuerpo del modal</p>
      </Modal>
    );
    expect(screen.getByText('Confirmar')).toBeInTheDocument();
    expect(screen.getByText('Detalles')).toBeInTheDocument();
    expect(screen.getByText('Cuerpo del modal')).toBeInTheDocument();
  });

  test('dispara onClose al hacer clic en el botón de cerrar', () => {
    const onClose = jest.fn();
    render(<Modal open onClose={onClose} title="X"><p>x</p></Modal>);
    fireEvent.click(screen.getByLabelText('Cerrar'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('dispara onClose al hacer clic en el overlay (afuera del modal)', () => {
    const onClose = jest.fn();
    render(<Modal open onClose={onClose} title="Confirmar"/>);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(onClose).toHaveBeenCalled();
  });

});
