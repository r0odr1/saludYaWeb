import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('<Avatar />', () => {

  test('renderiza la inicial recibida', () => {
    render(<Avatar initial="J" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  test('aplica el tamaño que recibe', () => {
    render(<Avatar initial="M" size={48} />);
    const el = screen.getByText('M');
    expect(el).toHaveStyle({ width: '48px', height: '48px' });
  });

  test('aplica color de fondo personalizado', () => {
    render(<Avatar initial="A" bg="#FF0000" />);
    expect(screen.getByText('A')).toHaveStyle({ background: '#FF0000' });
  });

});
