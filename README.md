<div align="center">

# 🩺 SaludYa

### Sistema web de gestión de citas médicas para consultorios de fisioterapia

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Status](https://img.shields.io/badge/status-MVP%20Sprint%204-success)]()
[![License](https://img.shields.io/badge/license-Académico-blue)]()
[![Coverage](https://img.shields.io/badge/coverage-≥70%25-brightgreen)]()

*Proyecto académico — Corporación Universitaria Iberoamericana · 2026*

</div>

---

## 📖 Sobre el proyecto

**SaludYa** es una aplicación web orientada a digitalizar y optimizar la gestión de citas médicas en consultorios privados y centros de atención de pequeña escala. Surge como respuesta a una problemática real: muchos consultorios continúan operando con métodos manuales de agendamiento (agendas físicas, llamadas telefónicas, hojas de cálculo compartidas) que generan ineficiencias, errores humanos y experiencias deficientes tanto para pacientes como para el personal de salud.

La plataforma elimina las barreras de comunicación entre pacientes y médicos, reduce el ausentismo mediante recordatorios automáticos y permite que el personal del consultorio administre su agenda de forma eficiente y en tiempo real.

### Objetivos

- Permitir que los pacientes reserven y gestionen sus citas de forma autónoma 24/7
- Eliminar el doble agendamiento mediante bloqueo de horarios en tiempo real
- Reducir el ausentismo hasta en un **30%** mediante recordatorios automáticos
- Brindar al consultorio una vista organizada de su jornada laboral

---

## ✨ Funcionalidades por rol

### 👤 Paciente

| Funcionalidad | Descripción |
|---|---|
| Registro e inicio de sesión | Con verificación por correo y recuperación de contraseña |
| Agendamiento de citas | Selección guiada por pasos (especialidad → doctor → fecha → hora) |
| Visualización en tiempo real | Calendario con horarios disponibles, ocupados y bloqueados |
| Gestión de citas | Editar y cancelar con anticipación mínima de 2 horas |
| Recordatorios automáticos | Correo de confirmación inmediato y recordatorio 24h antes |
| Historial completo | Acceso a citas pasadas, presentes y futuras con filtros por estado |
| Perfil editable | Actualización de datos personales con verificación |

### 👨‍⚕️ Doctor

| Funcionalidad | Descripción |
|---|---|
| Panel de control diario | KPIs del día (atendidas, pendientes, no asistieron) |
| Agenda diaria y semanal | Vista detallada con datos de contacto del paciente |
| Gestión de estados | Marcar citas como atendidas, no presentadas o canceladas |
| Notas clínicas | Agregar observaciones a cada cita |
| Reasignación | Transferir citas a otro doctor con notificación automática |

### ⚙️ Administrador

| Funcionalidad | Descripción |
|---|---|
| Gestión de usuarios | Cambio de roles entre paciente, doctor y administrador |
| Configuración de servicios | Administración de especialidades del consultorio |
| Reportes y estadísticas | KPIs mensuales, gráficos por especialidad, detalle por doctor |
| Exportación | Generación de reportes en PDF y CSV |

---

## 🛠 Tecnologías

| Categoría | Tecnología |
|---|---|
| **Framework** | React 19.2 |
| **Build tool** | Create React App (react-scripts 5.0.1) |
| **Estilos** | CSS3 con variables custom (Design Tokens) |
| **Tipografía** | Playfair Display + DM Sans (Google Fonts) |
| **Testing** | Jest + React Testing Library |
| **Linting** | ESLint con plugins de Testing Library |

### Decisiones de diseño

- **Sin librerías de UI externas** — los componentes se construyeron desde cero siguiendo el Design System definido en Figma, lo que permite control total sobre el aspecto visual.
- **Sin React Router** — la navegación se maneja con un router minimalista basado en `useState` apropiado para el MVP y fácil de migrar a React Router cuando el proyecto escale.
- **Sin gestión global de estado** — para el MVP, el estado local con `useState` es suficiente. Se puede migrar a Context API o Redux cuando se conecte al backend.

---

## 📁 Estructura del proyecto

```
saludya/
├── public/
│   ├── index.html              ← HTML base + Google Fonts
│   └── LogoSaludYa.ico         ← Favicon e identidad visual
│
└── src/
    ├── index.js                ← Punto de entrada
    ├── App.jsx                 ← Router principal (navegación entre pantallas)
    │
    ├── tokens/
    │   └── tokens.js           ← Design tokens en JS (colores, fuentes)
    │
    ├── styles/
    │   └── global.css          ← Variables CSS + sistema de clases
    │
    ├── layouts/
    │   ├── AuthLayout.jsx      ← Layout dual de autenticación (panel verde + form)
    │   └── Topbar.jsx          ← Barra de navegación contextual por rol
    │
    ├── components/ui/          ← Componentes reutilizables del Design System
    │   ├── Alert.jsx           ← Alertas informativas (info / warning / success / danger)
    │   ├── Avatar.jsx          ← Avatares circulares con inicial
    │   ├── Badge.jsx           ← Etiquetas de estado de citas y roles
    │   ├── Button.jsx          ← Botones con 5 variantes
    │   ├── Card.jsx            ← Contenedor tarjeta
    │   ├── Chip.jsx            ← Chips de filtro
    │   ├── CitaCard.jsx        ← Tarjeta especializada para citas
    │   ├── Input.jsx           ← Campos de formulario con label y validación
    │   ├── KpiCard.jsx         ← Tarjetas de indicadores numéricos
    │   ├── Modal.jsx           ← Modales con overlay
    │   └── Stepper.jsx         ← Indicador de pasos
    │
    └── modules/                ← Pantallas agrupadas por rol
        ├── auth/
        │   ├── Login.jsx
        │   ├── Registro.jsx
        │   └── AuthScreens.jsx (Verificar, Olvide, NuevaPass)
        ├── paciente/
        │   ├── DashboardPac.jsx
        │   ├── Especialidades.jsx
        │   ├── AgendarCita.jsx
        │   ├── ConfirmarExito.jsx
        │   ├── MisCitas.jsx
        │   └── MiPerfil.jsx
        ├── doctor/
        │   ├── DashboardDoc.jsx
        │   └── MiAgenda.jsx
        └── admin/
            ├── DashboardAdmin.jsx
            └── Reportes.jsx
```

---

## 🚀 Instalación y ejecución

### Requisitos previos

- **Node.js** 18 o superior — [descargar](https://nodejs.org)
- **npm** 9 o superior (incluido con Node.js)
- **Git** (opcional, para clonar)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/saludya.git
cd saludya

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en **http://localhost:3000**.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Construye la versión optimizada para producción |
| `npm test` | Ejecuta todas las pruebas unitarias (modo no interactivo) |
| `npm run test:watch` | Ejecuta las pruebas en modo interactivo |
| `npm run test:coverage` | Ejecuta las pruebas y genera reporte de cobertura |

---

## 🧪 Pruebas

El proyecto incluye una suite completa de pruebas unitarias con **Jest + React Testing Library**.

### Cobertura

| Categoría | Archivos | Casos de prueba |
|---|---|---|
| Componentes UI | 11 | ~45 |
| Layouts | 1 | 6 |
| Módulos (Auth, Paciente, Doctor, Admin) | 10 | ~60 |
| Routing | 1 | 7 |
| **Total** | **23** | **~118** |

### Ejecutar las pruebas

```bash
# Ejecutar todas una vez
npm test

# Modo interactivo (vuelve a correr al guardar)
npm run test:watch

# Con reporte de cobertura
npm run test:coverage
```

El reporte HTML de cobertura se genera en `coverage/lcov-report/index.html`. La cobertura objetivo es **≥ 80%** en módulos críticos, cumpliendo con el requisito no funcional **RNF-09** de la Especificación de Requisitos de Software.

---

## 🎨 Design System

El proyecto implementa fielmente el UI Kit definido en Figma. Los **design tokens** están centralizados en dos ubicaciones:

- `src/tokens/tokens.js` — para uso en componentes JavaScript
- `src/styles/global.css` — variables CSS para uso en hojas de estilo

### Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| Primary 600 | `#059669` | Color principal de marca, botones primarios |
| Primary 500 | `#10B981` | Hover, énfasis secundario |
| Primary 50 | `#ECFDF5` | Fondos de acento sutiles |
| Accent 500 | `#F59E0B` | Identidad visual (logo) |
| Danger | `#EF4444` | Cancelaciones, errores |
| Info | `#3B82F6` | Información, especialidad Evaluación |

### Tipografía

- **Playfair Display** (serif) — Títulos y elementos institucionales
- **DM Sans** (sans-serif) — Texto general de interfaz, formularios

---

## 🌐 Despliegue

El proyecto se desplego en vercel: **https://salud-ya-web.vercel.app/**

---

## 📚 Metodología

El proyecto se desarrolló aplicando:

- **Ciclo de Vida del Desarrollo de Software (CVDS)** — Planificación, análisis, diseño, implementación, pruebas, despliegue y mantenimiento.
- **Metodología ágil Scrum** — 4 sprints de 2 semanas cada uno, con un Sprint 0 inicial de planificación.
- **Design Thinking** — Investigación con usuarios, mapas de empatía, customer journey y user flows.
### Herramientas utilizadas

- **Trello** — Gestión del backlog y tablero Scrum
- **Figma** — Diseño del UI Kit y prototipo Hi-Fi
- **Maze** — Pruebas de usabilidad no moderadas (5+ usuarios por flujo)
- **GitHub** — Control de versiones y colaboración

---

## 👥 Equipo de desarrollo

| Integrante | Código |
|---|---|
| Angie Tatiana Pacalagua Mejía | 100162099 |
| Juan Camilo Fong León | 100193101 |
| Rodrigo Bonilla Torres | 100184518 |
| Juan Pablo Salazar Achicanoy | 100125553 |
| Elsa Sequeda Pacheco | 100177062 |

**Docente:** Tatiana Cabrera
**Asignatura:** Análisis y Diseño de Sistemas
**Facultad:** Ingeniería de Software
**Institución:** Corporación Universitaria Iberoamericana
**Ciudad:** Bogotá D.C.
**Año:** 2026

---

## 📄 Licencia

Este proyecto fue desarrollado con fines **académicos** como parte del programa de Ingeniería de Software de la Corporación Universitaria Iberoamericana. No está destinado para uso comercial sin autorización previa.

---

## 🔗 Enlaces relacionados

- [Prototipo Hi-Fi en Figma](https://www.figma.com/design/aR5Nn6BMKZRqO4lTRQXn4J/SaludYa---Analisis)

---

<div align="center">

**SaludYa** — *Tu salud, nuestra prioridad.*

Hecho con 💚 por estudiantes de Ingeniería de Software

</div>
