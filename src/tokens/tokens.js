/**
 * SaludYa — Design Tokens
 * Fuente: UI Kit / Design System (Figma)
 * Estos valores son la fuente de verdad para JS.
 * Las variables CSS en global.css los reflejan para uso en hojas de estilo.
 */

export const colors = {
  /* Paleta primaria — Verde */
  g50: '#ECFDF5',
  g100: '#D1FAE5',
  g200: '#A7F3D0',
  g400: '#34D399',
  g500: '#10B981',
  g600: '#059669',
  g700: '#047857',
  g900: '#064E3B',

  /* Paleta acento — Ambar */
  a50: '#FFFBEB',
  a100: '#FEF3C7',
  a200: '#FDE68A',
  a400: '#FBBF24',
  a500: '#F59E0B',
  a600: '#D97706',
  a700: '#B45309',
  a800: '#92400E',

  /* Neutros */
  n50: '#F9FAFB',
  n100: '#F3F4F6',
  n200: '#E5E7EB',
  n300: '#D1D5DB',
  n400: '#9CA3AF',
  n500: '#6B7280',
  n600: '#4B5563',
  n700: '#374151',
  n900: '#111827',

  /* Semanticos */
  success: '#10B981',
  danger: '#EF4444',
  info: '#3B82F6',
  warning: '#F59E0B',
};

/* Colores por especialidad */
export const specColors = {
  evaluacion: '#3B82F6',
  masoterapia: '#10B981',
  electro: '#F59E0B',
  rehab: '#EF4444',
  respiratoria:'#8B5CF6',
};

/* Tipografia */
export const fonts = {
  display: "'Playfair Display', serif",
  body: "'DM Sans', sans-serif",
};

/* Radios */
export const radius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '20px',
};

/* Sombras */
export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,.06)',
  md: '0 4px 16px rgba(0,0,0,.08)',
  lg: '0 8px 32px rgba(0,0,0,.12)',
};
