import { render, screen } from '@testing-library/react';
import Alert from './Alert';
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

describe('<Alert />', () => {

  test('renderiza el mensaje', () => {
    render(<Alert>Confirmación enviada</Alert>);
    expect(screen.getByText('Confirmación enviada')).toBeInTheDocument();
  });

  test('aplica clase info por defecto', () => {
    const { container } = render(<Alert>Texto</Alert>);

    expect(container.querySelector('.alert')).toHaveClass('alert-info');
  });

  test('renderiza diferentes tipos correctamente', () => {
    const { container, rerender } = render(<Alert type="success">OK</Alert>);

    expect(container.querySelector('.alert')).toHaveClass('alert-success');

    rerender(<Alert type="warning">Cuidado</Alert>);

    expect(container.querySelector('.alert')).toHaveClass('alert-warning');

    rerender(<Alert type="danger">Error</Alert>);

    expect(container.querySelector('.alert')).toHaveClass('alert-danger');
  });

});
