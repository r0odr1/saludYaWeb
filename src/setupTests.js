// Configuración global de pruebas para Jest + React Testing Library
// Agrega los matchers de jest-dom (toBeInTheDocument, toHaveClass, etc.)
import '@testing-library/jest-dom';

Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});