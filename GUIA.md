# Guía de tu Carpeta Digital

## Estructura

```
carpeta-digital/
├── index.html   → esqueleto de la página y flores/ornamentos (SVG)
├── styles.css   → colores, tipografías, marcos, sobre, animaciones
├── datos.js     → TODO tu contenido: sobre, láminas, reflexión  ← lo que más vas a editar
├── script.js    → funcionamiento (no hace falta tocarlo)
├── GUIA.md      → esta guía
└── assets/
    ├── portada.png   → tu portada original, sin modificar
    ├── ramas.jpg     → ramas floridas decorativas
    └── laminas/      → tus 10 láminas (optimizadas para web)
```

No usa internet ni librerías: funciona sin conexión.

## Abrirlo en Visual Studio Code

1. Descomprimí el ZIP.
2. En VS Code: **Archivo → Abrir carpeta…** y elegí `carpeta-digital`.
3. Para verlo: doble clic en `index.html` (se abre en el navegador). Opcional: instalá la extensión **Live Server**, clic derecho en `index.html` → *Open with Live Server*; se actualiza solo al guardar.

## Reemplazar la portada

Copiá tu nueva imagen a `assets/` con el nombre `portada.png` (reemplaza la actual). Si tiene otro nombre o formato, cambiá el `src` en `index.html`, dentro de `<header id="portada">`. Siempre se ve entera, sin deformarse. El color de fondo que completa los lados es `--beige` en `styles.css`.

## Elementos del sobre (`datos.js` → `SOBRE`)

- **Agregar**: copiá una línea `{ tipo: "foto", ... }` y pegala con coma.
- **Eliminar**: borrá la línea.
- **Reemplazar imagen**: guardá la foto en `assets/` y escribí `src: "assets/mi-foto.jpg"`.
- **Palabras**: `tipo: "palabra"` y cambiá `texto`.
- **Posición**: `x` e `y` en % (0 a 100). **Tamaño**: `ancho` en píxeles. **Giro**: `rot`.
- **Animación**: `anim: "salir"`, `"caer"` o `"girar"`. **Orden de salida**: `delay` (segundos).
- Nuevas animaciones: agregá una clase `.objeto.anim-nombre` en `styles.css`, sección 4, copiando `anim-girar`.

## Láminas (`datos.js` → `PROYECTOS`)

Tus 10 láminas ya están cargadas en `assets/laminas/` y conectadas en `datos.js`. Cada bloque dice `LÁMINA n` y tiene dos lugares marcados con `← TÍTULO` y `← TEXTOS`: escribí entre las comillas `""`.

```js
{ titulo: "Nombre del trabajo",
  consigna: "...", objetivo: "...", referencias: "...", proceso: "...", dificultades: "...", reflexion: "...",
  imagen: "assets/laminas/lamina-01-mesa.jpg", ajuste: "contain", encuadre: "center", lado: "" }
```

- Mientras un campo esté vacío (`""`), la página muestra un placeholder visible: `[ TÍTULO DE LA LÁMINA 3 ]` o `[ ESCRIBÍ ACÁ: Consigna ]`. Su formato se cambia en `TITULO_PROVISORIO` y `TEXTO_PROVISORIO`.
- Todos los marcos son rectangulares dorados y horizontales. La lámina se ve entera, sin deformarse; hacé clic para ampliarla (se cierra con clic o Esc).
- `ajuste`: `"contain"` (entera) o `"cover"` (llena el marco y recorta; con `encuadre` elegís qué parte se ve: `"top"`, `"30% 70%"`…).
- `lado`: `"izquierda"` o `"derecha"` para la imagen; vacío = se alterna solo.
- **Agregar** una lámina: guardá la imagen en `assets/laminas/`, copiá un bloque, pegalo con coma y cambiá `imagen`.
- **Eliminar**: borrá el bloque. **Reordenar**: cortá y pegá bloques.
- Los nombres de los campos (Consigna, Objetivo…) se editan en `CAMPOS`.

## Reflexión final

`datos.js` → `REFLEXION`: escribí el texto de cada bloque. Podés agregar o quitar bloques igual que las láminas. La firma está en `FIRMA`.

## Colores, flores y animaciones

- **Colores y tipografías**: variables al inicio de `styles.css` (sección 1).
- **Flores de fondo**: `datos.js` → `FLOTANTES` (forma, lado, altura, tamaño).
- **Marcos**: `styles.css`, sección 5 (`.marco`). Las flores de las esquinas se acomodan en `.a1` a `.a4`.
- **Dibujo de lirios, tulipanes, hojas y mariposa**: `index.html`, bloque `<defs>` del inicio.
- **Tipografías**: usa las que tenga el equipo. Para una tipografía propia, guardá el archivo en `assets/fonts/` y agregá `@font-face` al inicio de `styles.css`.

## Si algo no se ve

- Una imagen no aparece: revisá mayúsculas, extensión y ruta en `datos.js`. El marco mostrará "No se encontró: ruta".
- La página no carga contenido: abrí la consola del navegador (F12) y buscá errores; casi siempre es una coma o comilla faltante en `datos.js`.

## Dónde editar los textos (todo en `datos.js`)

- **Láminas**: cada bloque `LÁMINA n` tiene `← TÍTULO` y `← TEXTOS`.
- **Reflexión final**: `REFLEXION`.
- **Títulos de las secciones y pie del autorretrato**: `PAGINA`.
- **Firma final**: `FIRMA` (`imagen` = `assets/firma.png`; `texto` = línea opcional debajo de la firma).
- Textos de las introducciones: bloques con `"tipo": "intro"`.
