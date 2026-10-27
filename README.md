<div align="center">

# La mordida divina

**Sitio web de repostería artesanal · Proyecto de portafolio**

[Ver demo en vivo](https://carlosandrescl.github.io/la-mordida-divina/) · **Español** · [English](README.en.md)

[![CI](https://github.com/CarlosAndresCL/la-mordida-divina/actions/workflows/ci.yml/badge.svg)](https://github.com/CarlosAndresCL/la-mordida-divina/actions/workflows/ci.yml)
[![Deploy](https://github.com/CarlosAndresCL/la-mordida-divina/actions/workflows/deploy.yml/badge.svg)](https://github.com/CarlosAndresCL/la-mordida-divina/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Licencia MIT](https://img.shields.io/badge/licencia-MIT-green)

</div>

---

## Capturas de pantalla

### Inicio

![Página de inicio en escritorio](docs/screenshots/home.webp)

### Sabores

![Página de sabores en escritorio](docs/screenshots/sabores.webp)

### Contacto y mapa

![Página de contacto con el mapa de ubicación](docs/screenshots/contacto.webp)

## Sobre el proyecto

**La mordida divina** es un proyecto de portafolio inspirado en una pastelería real de Guadalupe, San José, Costa Rica. Lo desarrollé con el conocimiento y la autorización del negocio, que me permitió usar sus fotos y su logo únicamente con este fin.

Es un sitio de presentación (solo frontend, sin backend) pensado para mostrar los productos, los sabores y la ubicación del negocio, y para que un cliente pueda escribir por WhatsApp o visitar su Instagram con un solo clic.

> Este sitio **no es la página oficial** del negocio. Para consultas o pedidos reales, los canales oficiales son su Instagram: [@lamordidadivina](https://www.instagram.com/lamordidadivina/).

## Características

- Cuatro páginas: Inicio, Nosotros, Sabores y Contacto, con navegación sin recargas gracias a React Router.
- Portada con un carrusel de imágenes que cambia cada 7 segundos.
- Pantalla de carga con el logo, que se muestra una sola vez por sesión.
- Galería con enlace al Instagram del negocio: superposición al pasar el cursor en escritorio y un botón único en celular.
- Botón flotante de WhatsApp con un mensaje prellenado.
- Mapa de Google Maps incrustado y un botón para abrir la ruta en la aplicación de mapas del teléfono.
- Diseño responsivo para celular, tableta y escritorio.
- Imágenes optimizadas en formato WebP.
- Textos alternativos en las imágenes, etiquetas `aria-label` en los enlaces de redes y HTML semántico.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Interfaz | React 19, React Router 7 |
| Estilos | Tailwind CSS 4 (tema propio con `@theme`), tipografías Dancing Script y Quicksand |
| Iconos | react-icons, lucide-react, Flaticon UIcons |
| Empaquetado | Vite 8 |
| Mapas | Google Maps (mapa incrustado) |
| Calidad de código | oxlint, Prettier, Husky, lint-staged |
| Automatización | GitHub Actions, GitHub Pages |

## Calidad de código y automatización

El proyecto cuenta con un flujo automatizado para mantener el código ordenado y funcional:

| Herramienta | Qué hace |
| --- | --- |
| **oxlint** | Revisa el código en busca de errores y malas prácticas (`npm run lint`). |
| **Prettier** | Da un formato uniforme a todos los archivos (`npm run format`). |
| **Husky + lint-staged** | Antes de cada commit, formatea y revisa solo los archivos que se van a guardar. |
| **GitHub Actions (CI)** | En cada push ejecuta la instalación limpia, el lint, la verificación de formato y el build. |
| **GitHub Actions (despliegue)** | Al actualizar `main`, construye el sitio y lo publica en GitHub Pages. |

## Cómo ejecutarlo en local

Requisitos: [Node.js](https://nodejs.org/) (el proyecto se desarrolló con la versión 24) y Git.

```bash
git clone https://github.com/CarlosAndresCL/la-mordida-divina.git
cd la-mordida-divina/LaMordidaDivina
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente `http://localhost:5173/`).

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión final en la carpeta `dist`. |
| `npm run preview` | Muestra una vista previa local del build. |
| `npm run lint` | Revisa el código con oxlint. |
| `npm run format` | Formatea todos los archivos con Prettier. |
| `npm run format:check` | Comprueba el formato sin modificar nada. |

Para probar el sitio tal como se publica en GitHub Pages, que usa una dirección base distinta:

```bash
npm run build -- --base=/la-mordida-divina/
npm run preview
```

## Estructura del repositorio

Estructura resumida:

```text
la-mordida-divina/
├── .github/
│   └── workflows/
│       ├── ci.yml            # lint, formato y build en cada push
│       └── deploy.yml        # publicación en GitHub Pages
├── docs/
│   └── screenshots/          # capturas usadas en este README
├── LaMordidaDivina/          # el proyecto (los comandos npm se ejecutan aquí)
│   ├── .husky/               # hook de pre-commit
│   ├── public/
│   ├── src/
│   │   ├── assets/           # imágenes en WebP
│   │   ├── components/       # componentes agrupados por sección
│   │   ├── layouts/          # estructura compartida (navegación, pie, carga)
│   │   ├── pages/            # inicio, nosotros, sabores y contacto
│   │   └── styles/
│   ├── index.html
│   └── package.json
├── LICENSE
├── README.md
└── README.en.md
```

## Despliegue

El sitio se publica en **GitHub Pages** mediante un flujo de GitHub Actions (`deploy.yml`). Como la página vive en una subcarpeta (`/la-mordida-divina/`), el proceso:

1. Construye el proyecto indicando esa dirección base.
2. Copia `index.html` como `404.html`, para que las rutas internas (por ejemplo `/sabores`) sigan funcionando al recargar la página, ya que GitHub Pages no admite reglas de redirección.
3. Publica el resultado.

Este repositorio es la versión de publicación del proyecto; el desarrollo se hizo en un repositorio privado aparte.

## Aprendizajes

Este es **mi primer proyecto con React** (desarrollo frontend) y **mi primer proyecto publicado en GitHub**. Además de construir el sitio, aprendí varias cosas que no sabía hacer al empezar:

- **React y React Router:** componentes funcionales, hooks (`useState`, `useEffect`) y navegación entre páginas sin recargar, organizando los componentes por sección.
- **Tailwind CSS:** clases utilitarias, variantes responsivas (`sm:`, `md:`, `lg:`), estados como `hover` y `group-hover`, y un tema propio con colores y tipografías.
- **Git y GitHub:** ramas, commits con mensajes claros, pull requests y publicar un repositorio cuidando la privacidad (correo anónimo en los commits).
- **Formato de código con Prettier:** qué es un formateador, cómo configurarlo y cómo automatizarlo para que el estilo sea uniforme sin tener que pensarlo.
- **Rendimiento de imágenes:** convertí las fotos a WebP y las redimensioné; el peso de las imágenes pasó de unos 20 MB a menos de 2 MB, y la carga mejoró notablemente.
- **Automatización:** configurar hooks de Git y un flujo de integración y despliegue continuos con GitHub Actions.

### Lo que más me costó

- Configurar las herramientas en Windows: Git no se reconocía en la terminal, el hook de Husky fallaba por la falta de `bash` y los saltos de línea (CRLF y LF) daban errores.
- La sangría del YAML en GitHub Actions y los errores de sincronización del `package-lock.json` en la instalación automática.
- Hacer que el sitio se viera bien en celular: el óvalo de la portada, la onda del pie de página y el mapa.
- Publicar en GitHub Pages: la dirección base, el router y las rutas al recargar.

## Ideas a futuro

- Formulario de contacto.
- Catálogo con más detalle de productos.
- Revisión de accesibilidad y mejoras de SEO.
- Convertir a WebP las imágenes PNG que quedan.
- Dominio propio.

## Licencia y créditos

- **Código:** [Licencia MIT](LICENSE).
- **Imágenes, logo y nombre "La mordida divina":** © La mordida divina. Se usan con autorización del negocio, únicamente para este proyecto de portafolio, y **no están incluidos en la licencia MIT**: no pueden reutilizarse sin su permiso.

## Autor

**Carlos Andrés Calderón Leiva**

- LinkedIn: [calderonleivacarlosandres](https://www.linkedin.com/in/calderonleivacarlosandres)
- GitHub: [CarlosAndresCL](https://github.com/CarlosAndresCL)
- Correo: [ccal30454@gmail.com](mailto:ccal30454@gmail.com)
