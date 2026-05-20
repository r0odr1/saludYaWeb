import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {

  test('renderiza el contenido (children) que recibe', () => {
    render(<Card><span>Contenido interno</span></Card>);
    expect(screen.getByText('Contenido interno')).toBeInTheDocument();
  });

  test('aplica la clase "card" por defecto', () => {
    const { container } = render(<Card>X</Card>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('card');
  });

  test('permite pasar className adicional', () => {
    const { container } = render(<Card className="extra-class">Y</Card>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('card');

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('extra-class');
  });

});
