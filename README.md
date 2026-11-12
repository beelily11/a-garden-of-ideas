# Carpeta digital · Jardín botánico interactivo (versión 3)

## Cómo abrirla (paso a paso)
1. Descomprimí el ZIP (clic derecho → "Extraer todo").
2. Abrí Visual Studio Code → **Archivo → Abrir carpeta…** → elegí `carpeta-digital`.
3. Instalá la extensión **Live Server** (ícono de cuadraditos a la izquierda → buscá "Live Server" → Instalar).
4. Clic derecho sobre `index.html` → **Open with Live Server**. (También podés hacer doble clic en `index.html`.)
No necesita internet ni ninguna instalación extra.

## Estructura
- `index.html` estructura y secciones · `styles.css` diseño original · `jardin.css` jardín, parallax y animaciones
- `jardin.js` animaciones ligadas al scroll · `script.js` funcionamiento · `datos.js` TU CONTENIDO (ver `GUIA.md`)
- `assets/jardin/` fotos botánicas (WebP con transparencia) y fondos (arco, fuente, campo) · `assets/laminas/` tus láminas

## Cómo se anima
`jardin.js` calcula cuánto bajaste y mueve cada capa: el tallo sube, las hojas se abren, el botón se ensancha hasta ser flor; el fondo se acerca como una cámara; las enredaderas bajan al avanzar. Al subir, todo retrocede. Con "movimiento reducido" activado en el dispositivo, aparece todo ya crecido y sin animaciones.

## Qué podés ajustar
- **Duración del crecimiento:** `height` de `.jardin` en `jardin.css` (más alto = más lento).
- **Fondo del jardín:** `index.html`, `id="fondoJardin"` (`assets/jardin/arco.jpg`; también hay `fuente.jpg` y `campo.jpg` para probar).
- **Flores de cada capa:** imágenes dentro de `capa media` y `capa frente` en `index.html` (`left`, `bottom`, `width`, `--ang`, `--dur`).
- **Flores que acompañan el recorrido:** `FLOTANTES` en `datos.js`.
- **Láminas en proceso:** los dos últimos bloques de `PROYECTOS` (`enProceso: false` cuando tengas la foto).

## GSAP
No hace falta: el proyecto usa JavaScript propio y funciona offline. Si más adelante quisieras GSAP, hay que descargar `gsap.min.js` y `ScrollTrigger.min.js` desde gsap.com y guardarlos en `libs/`.
