# Instrucciones para Copilot: La mordida divina

## Proyecto
Sitio web frontend (proyecto de portafolio) de una pastelería en Guadalupe, San José, Costa Rica. No tiene backend.

## Stack
Vite + React 19, react-router-dom 7, Tailwind CSS 4 (tema definido con `@theme` en `src/index.css`), react-icons, lucide-react y oxlint para el lint.

## Estructura
El proyecto vive en la subcarpeta `LaMordidaDivina`. Los comandos npm se ejecutan desde ahí.
- `src/pages`: páginas delgadas que solo ordenan secciones.
- `src/layouts/MainLayout.jsx`: navbar, footer, loader y botón de WhatsApp.
- `src/components/<sección>`: `aboutUs`, `contact`, `flavors`, `hero` y `common`.
- `src/styles` y `src/assets`: estilos específicos e imágenes.

## Convenciones
- Componentes funcionales con hooks, un componente por archivo, nombres en PascalCase.
- Preferir clases de Tailwind y los colores y fuentes del `@theme` en lugar de valores hex sueltos.
- Reutilizar componentes existentes (Button, SimpleWave, FooterWave) antes de crear nuevos.
- Usar `Link` de react-router-dom para la navegación interna, nunca `<a href>`.
- Los textos del sitio están en español.
- Imágenes con `alt` descriptivo y etiquetas HTML semánticas.

## Paleta y tipografía
Turquesa #3AAFA9, turquesa oscuro #1F4E4D, rosa #F06EA0, crema #FFFBF5, café #2E1A14. Títulos en Dancing Script y cuerpo en Quicksand.

## Reglas de trabajo
- Antes de modificar varios archivos, explica el plan y espera confirmación.
- Hacer cambios pequeños y enfocados; no refactorizar lo que no se pidió.
- No cambiar textos, datos del negocio ni el diseño sin que se pida.
- No agregar dependencias sin preguntar.
- Nunca escribir secretos, claves ni archivos `.env` en el código.
- No tocar `node_modules` ni `dist`.
- Al terminar, indicar que se ejecuten `npm run lint` y `npm run build`.