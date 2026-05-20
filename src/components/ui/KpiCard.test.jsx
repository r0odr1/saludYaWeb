import { render, screen } from '@testing-library/react';
import KpiCard from './KpiCard';

describe('<KpiCard />', () => {

  test('renderiza el número y el label', () => {
    render(<KpiCard number="24" label="Total citas" />);
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('Total citas')).toBeInTheDocument();
  });

  test('renderiza el ícono cuando se le pasa', () => {
    render(<KpiCard number="5" label="Pendientes" icon="✅" />);
    expect(screen.getByText('✅')).toBeInTheDocument();
  });

  test('aplica el color al número', () => {
    render(<KpiCard number="3" label="Citas" color="#10B981" />);
    expect(screen.getByText('3')).toHaveStyle({ color: '#10B981' });
  });

});
