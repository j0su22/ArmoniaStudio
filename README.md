# Armonía Estudio — Sitio Web

Sitio web institucional de Armonía Estudio, estudio de diseño de interiores y consultoría inmobiliaria con sede en El Salvador.

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 6** — build tool
- **Tailwind CSS v4** — configuración via `@theme` en CSS, sin archivo de configuración
- **Framer Motion v11** — animaciones de scroll y transiciones
- **Lucide React** — iconos

## Estructura del proyecto

```
website/
├── public/
│   └── images/
│       ├── logos/          # logo.png, logoFill.png
│       ├── projects/       # fotos del portafolio
│       └── properties/     # fotos de propiedades
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Portafolio, Propiedades, Testimonios...
│   │   └── ui/             # Button, ScrollReveal, SectionLabel, WhatsAppFloat
│   ├── data/               # Contenido del sitio (proyectos, propiedades, etc.)
│   ├── hooks/              # useNavScroll
│   ├── types/              # Interfaces TypeScript
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Tokens de marca via @theme
├── index.html
└── vite.config.ts
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # build de produccion en dist/
npm run preview   # preview del build
```

## Paleta de marca

| Token          | Hex       | Uso                        |
|----------------|-----------|----------------------------|
| `cream`        | `#F6F3EF` | Fondo principal            |
| `cream-mid`    | `#E7E0D6` | Secciones alternadas       |
| `cream-dark`   | `#C8BDAE` | Bordes, separadores        |
| `sage`         | `#8C947E` | Acento principal           |
| `sage-dark`    | `#6E7662` | Hover estados              |
| `charcoal`     | `#2B2B2B` | Texto principal, footer    |

Tipografia: **Cormorant Garamond** (display) + **Montserrat** (cuerpo)

## Agregar contenido real

Los proyectos, propiedades y testimonios se editan en `src/data/index.ts`. Las imagenes van en `public/images/projects/` o `public/images/properties/` y se referencian como `/images/projects/nombre.jpg`.

## Ramas

| Rama      | Proposito                        |
|-----------|----------------------------------|
| `main`    | Produccion                       |
| `release` | Staging / candidato a release    |
| `dev`     | Desarrollo activo                |
