import { render, screen } from '@testing-library/react';
import Stepper from './Stepper';

/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

describe('<Stepper />', () => {

  const STEPS = ['Doctor', 'Fecha', 'Hora', 'Confirmar'];

  test('renderiza todos los labels de los pasos', () => {
    render(<Stepper steps={STEPS} current={0} />);
    STEPS.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('marca con check (✓) los pasos completados', () => {
    const { container } = render(<Stepper steps={STEPS} current={2} />);
    const doneCircles = container.querySelectorAll('.stepper__circle--done');
    expect(doneCircles).toHaveLength(2); // Doctor y Fecha
  });

  test('marca el paso actual como activo', () => {
    const { container } = render(<Stepper steps={STEPS} current={2} />);
    expect(container.querySelectorAll('.stepper__circle--active')).toHaveLength(1);
  });

  test('marca los conectores entre pasos completados', () => {
    const { container } = render(<Stepper steps={STEPS} current={2} />);
    expect(container.querySelectorAll('.stepper__connector--done')).toHaveLength(2);
  });

});
