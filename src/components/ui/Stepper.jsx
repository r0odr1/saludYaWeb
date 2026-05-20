const Stepper = ({ steps, current }) => (
  <div className="stepper">
    {steps.map((label, i) => (
      <div
        key={label}
        style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'auto' }}
      >
        <div className="stepper__step">
          <div
            className={[
              'stepper__circle',
              i < current ? 'stepper__circle--done' : '',
              i === current ? 'stepper__circle--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {i < current ? '✓' : i + 1}
          </div>
          <span
            className={['stepper__label', i === current ? 'stepper__label--active' : '']
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </span>
        </div>

        {i < steps.length - 1 && (
          <div
            className={['stepper__connector', i < current ? 'stepper__connector--done' : '']
              .filter(Boolean)
              .join(' ')}
          />
        )}
      </div>
    ))}
  </div>
);

export default Stepper;
