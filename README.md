# Vertex Group — Sitio Web Institucional

Proyecto universitario · Sprint II · Desarrollo Front-End
Basado en el Documento Maestro y el Manual de Marca aprobados en el Sprint I.

## 👤 Responsable de este entregable

**Integrante 1 — Estructura HTML5**
- Esqueleto HTML5 semántico de todas las páginas del sitio.
- Organización de la estructura de carpetas del proyecto.
- Administración del repositorio de GitHub.

> Los estilos avanzados de interfaz, componentes interactivos de Bootstrap (carrusel, alertas dinámicas, validación de formularios) y la adaptación 100% responsive se completan en fases posteriores del proyecto, según la ruta de trabajo del Sprint II y III.

## 🎨 Identidad visual

El sitio implementa la paleta institucional definida en el Manual de Marca (sección 4.5):

| Color | Hex | Significado |
|---|---|---|
| Azul Principal | `#007BFF` | Innovación, tecnología |
| Morado | `#8A2BE2` | Creatividad, imaginación |
| Azul Oscuro | `#001F5B` | Solidez, profesionalismo |
| Gris | `#E0E0E0` | Equilibrio, neutralidad |
| Negro | `#000000` | Elegancia, contraste |
| Blanco | `#FFFFFF` | Pureza, claridad |

Tipografías: **Sora** (títulos), **Inter** (texto de cuerpo), **JetBrains Mono** (navegación y botones).

## 📁 Estructura de carpetas

```
vertex-group/
├── index.html              # Página principal (Home)
├── pages/
│   ├── nosotros.html       # Historia, misión, visión, valores
│   ├── servicios.html      # Servicios, portafolio, video
│   ├── faq.html            # Preguntas frecuentes
│   ├── blog.html           # Listado de artículos del blog
│   └── contacto.html       # Formulario y datos de contacto
├── css/
│   └── styles.css          # Hoja de estilos base institucional
├── js/
│   └── main.js             # Menú móvil y utilidades base
├── img/
│   ├── logo/                # Logotipo y favicon
│   ├── hero/                 # Imágenes del banner principal
│   ├── nosotros/             # Fotografías de equipo / historia
│   ├── servicios/            # Portafolio, íconos, video-portada
│   └── blog/                  # Miniaturas de artículos
├── media/                   # Videos institucionales (.mp4)
├── .gitignore
└── README.md
```

### Etiquetas semánticas utilizadas
`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>/<figcaption>`, `<details>/<summary>` (FAQ).

## 🧩 Estado del contenido

Las páginas están simplificadas: se conservan el **encabezado con el menú de navegación**, el **footer**, `css/styles.css` y `js/main.js`. El contenido de cada sección se reemplazó por el texto de relleno **"Aquí va texto."** para que cada integrante lo complete:

- **Integrante 3:** Home (hero + tarjetas), Nosotros, Servicios / Portafolio.
- **Integrante 4:** FAQ, Blog, Contacto y footer.
- **Integrante 2 / 5:** estilos y componentes Bootstrap sobre la estructura existente.

## 🔧 Cómo visualizar el proyecto localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o servirlo con una extensión tipo *Live Server* para evitar problemas de rutas relativas.

## 🌿 Flujo de trabajo en GitHub

**Ramas**
- `main` → versión estable, lista para revisión del docente.
- `develop` → integración de cambios de todo el equipo.
- `feature/<nombre-corto>` → una rama por tarea o integrante (ej. `feature/estructura-html`, `feature/estilos-interfaz`).

**Flujo sugerido**
1. Crear rama desde `develop`: `git checkout -b feature/estructura-html develop`
2. Hacer commits pequeños y descriptivos.
3. Subir la rama: `git push origin feature/estructura-html`
4. Abrir Pull Request hacia `develop` para revisión del equipo.
5. Al cerrar el sprint, fusionar `develop` en `main`.

**Convención de commits**
```
tipo: descripción breve en presente

feat: agregar estructura HTML de la página de contacto
fix: corregir ruta relativa del logo en subpáginas
style: aplicar paleta institucional al header
docs: actualizar README con estructura de carpetas
```

**Buenas prácticas**
- No subir carpetas vacías sin `.gitkeep`.
- No commitear archivos de sistema (`.DS_Store`, `Thumbs.db`) — ya excluidos en `.gitignore`.
- Revisar que las rutas relativas (`../css/`, `../img/`, etc.) sigan funcionando antes de cada push.

## 👥 Equipo

| Integrante | Rol / Responsabilidad |
|---|---|
| Integrante 1 | Estructura HTML5, organización de carpetas, administración de GitHub |
| Integrante 2 | *(pendiente de asignar según ruta de trabajo)* |
| Integrante 3 | *(pendiente de asignar según ruta de trabajo)* |

---
Universidad — Proyecto de Desarrollo Web · Sprint II
