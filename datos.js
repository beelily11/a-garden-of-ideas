/* =====================================================================
   DATOS.JS  ·  ACÁ EDITÁS EL CONTENIDO (no hace falta tocar nada más)
   Si un texto o una imagen queda vacío ("" ), se muestra un espacio provisorio.
   ===================================================================== */


/* ---------- 3. PROYECTOS / LÁMINAS ----------
   Cada bloque { ... } es una lámina. Escribí entre las comillas "" de cada campo.
   Si un campo queda vacío, se muestra un [ PLACEHOLDER ] visible en la página.
   imagen:   ruta de la foto de la lámina (todas están en assets/laminas/)
   ajuste:   "contain" (se ve entera, sin recortar) | "cover" (llena el marco, recorta)
   encuadre: con "cover", qué parte se ve: "center", "top", "bottom", "left", "right" o "30% 70%"
   lado:     "izquierda" | "derecha" (lado de la imagen). Vacío = se alterna solo.
   Todos los marcos son rectangulares dorados y horizontales.
   Para AGREGAR una lámina: copiá un bloque, pegalo con coma y cambiá la ruta de imagen.
   Para ELIMINAR: borrá el bloque. Para REORDENAR: cortá y pegá bloques. */
// ✎ Los textos de las láminas y de la reflexión final son un BORRADOR escrito imitando tu estilo (la lámina 4 es la tuya): retocalos con tus palabras.
const PROYECTOS = [   // tipo:"intro" = bloque de introducción · las demás son láminas (extras: fotos chicas debajo de la lámina)
  // ===== INTRODUCCIÓN · El cubo soma (editá los textos) =====
  {
    "tipo": "intro",
    "etiqueta": "Introducción",
    "titulo": "El cubo soma",
    "parrafos": [
      "El cubo soma es un rompecabezas tridimensional que consiste en ensamblar siete piezas para formar un cubo. Ayuda a desarrollar el pensamiento lógico, la creatividad y la visión tridimensional."
    ],
    "secciones": [
      {
        "titulo": "Características",
        "items": [
          "Lo diseñó Piet Hein en 1936, un ingeniero, escritor, artista, filósofo, diseñador e inventor danés.",
          "Está compuesto por 27 cubitos.",
          "Cada pieza es una combinación de tres o cuatro cubos unidos por sus caras.",
          "Tiene 240 soluciones distintas."
        ]
      },
      {
        "titulo": "Lo que trabajamos",
        "items": [
          "Explorar distintas formas de armar el cubo con las siete piezas.",
          "Recrear las piezas con el material que quisiéramos, cada una de un color distinto.",
          "Representarlo en perspectiva isométrica y en proyecciones ortogonales."
        ]
      }
    ],
    "imagenes": [
      {
        "src": "assets/intro/soma-cubo.jpg",
        "pie": "El cubo soma armado",
        "ratio": "579/692"
      },
      {
        "src": "assets/intro/soma-piezas.jpg",
        "pie": "Las siete piezas",
        "ratio": "1287/910"
      }
    ]
  },
  // ===== LÁMINA 1 =====
  { titulo: "Cubo soma de papel",   // ← TÍTULO de la lámina 1
    consigna: "Recrear el cubo soma construyendo las piezas con el material que quisiera, con cada pieza de un color distinto.",
    objetivo: "Apunto a poder pasar de la idea al objeto y entender cómo encajan las piezas en el espacio.",
    referencias: "Tenía que mirar las imágenes de cubos soma hechos con distintos materiales que mostró la profe.",
    proceso: "Armé los cubitos con papel plegado y los uní para formar las siete piezas, cada una de un color. Después probé armar el cubo completo.",
    dificultades: "Que todos los cubitos quedaran del mismo tamaño y que las piezas encajaran bien.",
    reflexion: "Armarlo con mis manos me ayudó a entender mejor la estructura del cubo soma.",   // ← TEXTOS de la lámina 1
    imagen: "assets/laminas/lamina-11-soma-papel-piezas.jpg", ratio: "1700/1283", extras: ["assets/laminas/lamina-11-extra-cubo.jpg", "assets/laminas/lamina-11-extra-cubo-lateral.jpg"], ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 2 =====
  { titulo: "Cubo soma",   // ← TÍTULO de la lámina 2
    consigna: "Representar en perspectiva isométrica nuestro cubo soma, con sus colores y con un diseño a elección.",
    objetivo: "Apunto a poder explorar cómo el razonamiento lógico y el diseño pueden ir de la mano.",
    referencias: "Tenía que mirar el cubo soma armado para entender su estructura.",
    proceso: "Luego de proyectarlo en ambas, lo decoré con los mismos colores del cubo y con un diseño que se me fue ocurriendo.",
    dificultades: "Hacer bien las ocultas cuando hacía la proyección.",
    reflexion: "Decorarlo hizo que dejara de ser solo un rompecabezas y pasara a convertirse en un proyecto con estilo propio.",   // ← TEXTOS de la lámina 2
    imagen: "assets/laminas/lamina-04-cubos.jpg", ratio: "2200/1181", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 3 =====
  { titulo: "Vistas e isométrico del cubo soma",   // ← TÍTULO de la lámina 3
    consigna: "Generar dos volumetrías a partir de las piezas del cubo y representarlas en perspectiva isométrica y en proyecciones ortogonales (vistas).",
    objetivo: "Apunto a poder pasar de las vistas planas al volumen y entender cómo se relacionan.",
    referencias: "Tenía que armar las volumetrías con las piezas para entender qué se veía desde cada lado.",
    proceso: "Dibujé las vistas alineadas con líneas de proyección, con eso armé el isométrico y lo pinté por módulos, usando los colores de las piezas.",
    dificultades: "Saber qué líneas se veían y cuáles quedaban ocultas en cada vista.",
    reflexion: "Fue de los trabajos que más me costó, pero después me resultó más fácil imaginar un objeto desde varios lados.",   // ← TEXTOS de la lámina 3
    imagen: "assets/laminas/lamina-05-vistas-isometrico.jpg", ratio: "2200/1423", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== INTRODUCCIÓN · Proyecto de diseño: mesa y silla para el aula (editá los textos) =====
  {
    "tipo": "intro",
    "etiqueta": "Introducción",
    "titulo": "Proyecto de diseño: mesa y silla para el aula",
    "parrafos": [
      "Para este proyecto partimos de la Bauhaus, la escuela de arte, diseño y arquitectura fundada en Alemania en 1919 por Walter Gropius. Su objetivo era unificar el arte, la artesanía y la tecnología para crear diseños funcionales, estéticos y accesibles para todos.",
      "La consigna fue imaginar un nuevo diseño de mobiliario para el aula que reemplace la silla y la mesa tradicional, respondiendo a las necesidades reales de estudiantes de educación media superior: aprendizaje activo, comodidad, colaboración, movilidad e integración de tecnología."
    ],
    "secciones": [
      {
        "titulo": "Fundamentos de la Bauhaus",
        "items": [
          "Diseño integrado: unir arte, arquitectura, diseño gráfico, diseño industrial, mobiliario y textiles en una sola visión.",
          "Simplicidad y minimalismo: líneas limpias, colores primarios y geometría clara.",
          "Funcionalidad ante todo: “la forma sigue a la función”.",
          "Uso responsable y creativo de los nuevos materiales."
        ]
      },
      {
        "titulo": "El diseño debía contemplar",
        "items": [
          "Ergonomía, flexibilidad, tecnología integrada, sustentabilidad, estética e inclusión."
        ]
      },
      {
        "titulo": "Proceso",
        "items": [
          "Análisis de la experiencia como usuarios del mobiliario actual.",
          "Relevamiento de medidas y croquis de ideación y diseño.",
          "Recaudos gráficos: proyecciones ortogonales y perspectivas.",
          "Maqueta a escala y tablero de presentación."
        ]
      }
    ],
    "imagenes": [
      {
        "src": "assets/intro/bauhaus-edificio.jpg",
        "pie": "El edificio de la Bauhaus",
        "ratio": "1287/391"
      },
      {
        "src": "assets/intro/bauhaus-objetos.jpg",
        "pie": "Objetos de diseño de la Bauhaus",
        "ratio": "1287/482"
      },
      {
        "src": "assets/intro/bauhaus-sillas.jpg",
        "pie": "Wassily Chair (Marcel Breuer) y Barcelona Chair (Mies van der Rohe y Lilly Reich)",
        "ratio": "1184/819"
      }
    ]
  },
  // ===== LÁMINA 4 =====
  { titulo: "Cuaderno de bocetos",   // ← TÍTULO de la lámina 4
    consigna: "Hacer bocetos de ideas para la mesa y la silla y calcular sus medidas.",
    objetivo: "Apunto a poder mostrar el proceso que hay antes del diseño final.",
    referencias: "Me fijé en las sillas y mesas del aula y en las medidas del cuerpo.",
    proceso: "Fui haciendo bocetos de distintas formas y anotando las cuentas para la altura del asiento y del respaldo.",
    dificultades: "Decidir qué medidas usar y poder justificarlas.",
    reflexion: "Me gusta que esta lámina muestre cómo pienso, con tachones y todo.",   // ← TEXTOS de la lámina 4
    imagen: "assets/laminas/lamina-06-cuaderno-bocetos.jpg", ratio: "1614/2200", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 5 =====
  { titulo: "Silla: perspectiva y vistas",   // ← TÍTULO de la lámina 5
    consigna: "Dibujar la silla en perspectiva y en vistas (frente, lateral y superior).",
    objetivo: "Apunto a poder usar las vistas y la perspectiva con un objeto que diseñé yo.",
    referencias: "Tenía que mirar mis láminas anteriores de vistas y la silla de la colección.",
    proceso: "Hice la perspectiva y después las vistas alineadas con líneas auxiliares, cuidando que todo coincidiera.",
    dificultades: "Proyectar la base con ruedas y el respaldo curvo.",
    reflexion: "Me hizo sentir que ya podía explicar mi diseño con dibujo técnico.",   // ← TEXTOS de la lámina 5
    imagen: "assets/laminas/lamina-09-silla-vistas.jpg", ratio: "2200/1498", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 6 =====
  { titulo: "Mesa: perspectiva y vistas",   // ← TÍTULO de la lámina 6
    consigna: "Dibujar la mesa en perspectiva y en vistas (frente, lateral y superior).",
    objetivo: "Apunto a poder usar las vistas y la perspectiva con un objeto que diseñé yo.",
    referencias: "Tenía que mirar mis láminas anteriores de vistas y la mesa de la colección.",
    proceso: "Hice la perspectiva y después las vistas alineadas con líneas auxiliares, cuidando que todo coincidiera.",
    dificultades: "Que las vistas coincidieran con la perspectiva y con las medidas de la mesa.",
    reflexion: "Me ayudó a ver la mesa completa, desde todos sus lados.",   // ← TEXTOS de la lámina 6
    imagen: "assets/laminas/lamina-14-mesa-vistas.jpg", ratio: "2200/1562", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 7 =====
  { titulo: "Colección Ébano: mesa",   // ← TÍTULO de la lámina 7
    consigna: "Diseñar una mesa de trabajo y presentarla en una lámina con su descripción, sus materiales y sus medidas.",
    objetivo: "Apunto a poder comunicar un diseño de forma clara, juntando dibujo técnico, texto e imagen en una sola lámina.",
    referencias: "Me fijé en mesas de escritorio simples, de líneas rectas y patas de metal.",
    proceso: "Primero definí las medidas y los materiales, después dibujé las vistas con sus cotas y al final armé la lámina con la figura humana para dar escala.",
    dificultades: "Ordenar toda la información para que la lámina no quedara cargada.",
    reflexion: "Me hizo ver que diseñar un objeto también es saber explicarlo.",   // ← TEXTOS de la lámina 7
    imagen: "assets/laminas/lamina-01-mesa.jpg", ratio: "1556/2200", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 8 =====
  { titulo: "Colección Ébano: silla",   // ← TÍTULO de la lámina 8
    consigna: "Diseñar una silla que acompañe a la mesa y presentarla en una lámina con su descripción, sus materiales y sus medidas.",
    objetivo: "Apunto a poder pensar un objeto a partir de cómo se usa y del cuerpo de quien lo usa.",
    referencias: "Tenía que mirar sillas de escritorio con respaldo curvo y apoyabrazos.",
    proceso: "Partí de los bocetos del cuaderno, definí el respaldo y la base, y después dibujé las vistas con sus medidas.",
    dificultades: "Dibujar bien la base con ruedas y la curva del respaldo.",
    reflexion: "Con la silla y la mesa juntas, el diseño pasó a sentirse como una colección y no como dos objetos sueltos.",   // ← TEXTOS de la lámina 8
    imagen: "assets/laminas/lamina-02-silla.jpg", ratio: "1556/2200", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 9 =====
  { titulo: "Maqueta de mesa y silla: vista frontal",   // ← TÍTULO de la lámina 9
    consigna: "Fotografiar la maqueta de frente para ver cómo queda el conjunto.",
    objetivo: "Apunto a poder ver el diseño desde otro ángulo y revisar si está equilibrado.",
    referencias: "Tenía que mirar la foto lateral para repetir el mismo encuadre.",
    proceso: "Puse la silla debajo de la mesa y saqué la foto de frente con luz natural.",
    dificultades: "Alinear la cámara para que las proporciones no se deformaran.",
    reflexion: "Esta foto resume el proyecto: del boceto a un objeto que se puede ver.",   // ← TEXTOS de la lámina 9
    imagen: "assets/laminas/lamina-10-maqueta-frente.jpg", ratio: "2200/2200", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 10 =====
  { titulo: "Maqueta de mesa y silla: vista lateral",   // ← TÍTULO de la lámina 10
    consigna: "Hacer una maqueta de la mesa y la silla que diseñé y fotografiarla de costado.",
    objetivo: "Apunto a poder pasar del dibujo a un objeto en 3D y ver si las proporciones funcionan.",
    referencias: "Tenía que mirar mis láminas de la colección para respetar las medidas.",
    proceso: "Armé la mesa y la silla a escala con estructura negra y las apoyé sobre una mesa de madera para sacarles la foto con luz natural.",
    dificultades: "Que las patas quedaran derechas y que la silla tuviera la altura justa para la mesa.",
    reflexion: "Ver el diseño en tres dimensiones me hizo notar cosas que en el papel no se veían.",   // ← TEXTOS de la lámina 10
    imagen: "assets/laminas/lamina-03-maqueta-lateral.jpg", ratio: "2200/1650", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== INTRODUCCIÓN · Figuras imposibles (editá los textos) =====
  {
    "tipo": "intro",
    "etiqueta": "Introducción",
    "titulo": "Figuras imposibles",
    "parrafos": [
      "Las formas o figuras imposibles son imaginarias porque su construcción en las tres dimensiones no se puede realizar. Se representan mediante dibujos u otros recursos gráficos.",
      "Son posibles en dos dimensiones pero, geométricamente hablando, no se pueden construir. El triángulo de Penrose es uno de los ejemplos más conocidos."
    ],
    "secciones": [
      {
        "titulo": "Algunas figuras",
        "items": [
          "Blivet, cubo imposible, escalera de Penrose y triángulo de Penrose.",
          "Triángulo de Reutersvärd.",
          "Cinta de Moebius (no es imposible, pero es un objeto no orientable)."
        ]
      },
      {
        "titulo": "Lo que trabajamos",
        "items": [
          "Usar una plantilla de red isométrica de triángulos para crear una figura imposible compleja."
        ]
      }
    ],
    "cita": "“Sólo quienes intentan cosas absurdas alcanzarán lo imposible.” M. C. Escher",
    "imagenes": [
      {
        "src": "assets/intro/imposibles-formas.jpg",
        "pie": "Algunas formas imposibles",
        "ratio": "1287/710"
      },
      {
        "src": "assets/intro/imposibles-penrose.jpg",
        "pie": "El triángulo de Penrose paso a paso",
        "ratio": "1287/846"
      }
    ]
  },
  // ===== LÁMINA 11 =====
  { titulo: "Boceto de figuras geométricas en grafito",   // ← TÍTULO de la lámina 11
    consigna: "Crear una figura imposible a partir de una red isométrica de triángulos, empezando por el boceto en lápiz para después pasarlo a la hoja y ponerle color.",
    objetivo: "Apunto a poder planificar la composición antes de pasarla en limpio.",
    referencias: "Tenía que mirar la grilla para que cada figura encajara con la anterior.",
    proceso: "Dibujé hexágonos y rombos encadenados siguiendo la red isométrica, cuidando los cruces entre las figuras, hasta armar una sola composición larga.",
    dificultades: "Cualquier error en el trazo se notaba, así que tuve que ir despacio.",
    reflexion: "Hacer primero el boceto me ahorró errores cuando después lo pasé y le puse color.",   // ← TEXTOS de la lámina 11
    imagen: "assets/laminas/lamina-08-figuras-lapiz.jpg", ratio: "1499/2200", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 12 =====
  { titulo: "Figuras geométricas en azul",   // ← TÍTULO de la lámina 12
    consigna: "Pasar el boceto de la figura imposible a la hoja y ponerle color, usando un solo color en distintas intensidades.",
    objetivo: "Apunto a poder darle volumen a una figura geométrica usando un solo color.",
    referencias: "Tenía que mirar mi boceto en grafito para pasarlo igual.",
    proceso: "Pasé las figuras del boceto a la hoja con la grilla isométrica y después las pinté de azul, con más o menos intensidad para dar volumen.",
    dificultades: "Que el degradé quedara parejo y no se notara el trazo del lápiz.",
    reflexion: "Con un solo color la figura pasó de ser un dibujo plano a tener volumen.",   // ← TEXTOS de la lámina 12
    imagen: "assets/laminas/lamina-07-figuras-azul.jpg", ratio: "2200/1412", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== INTRODUCCIÓN · Fractales (editá los textos) =====
  {
    "tipo": "intro",
    "etiqueta": "Introducción",
    "titulo": "Fractales",
    "parrafos": [
      "Un fractal es un objeto cuya estructura se repite a diferentes escalas: por mucho que nos acerquemos o alejemos, observamos siempre la misma estructura.",
      "Hay fractales matemáticos, que surgen de iterar fórmulas, y fractales naturales, que aparecen espontáneamente en la naturaleza: en helechos, copos de nieve, nubes, en el romanesco y hasta en nuestros órganos."
    ],
    "secciones": [
      {
        "titulo": "Ideas clave",
        "items": [
          "Autosemejante significa que la estructura se compone de copias cada vez más pequeñas de sí misma.",
          "El nombre viene del latín “fractus”, fracturado, y sus dimensiones no son enteras sino fraccionarias.",
          "Es uno de los descubrimientos matemáticos más populares del siglo XX, con aplicaciones en medicina, geografía y bioquímica."
        ]
      },
      {
        "titulo": "Lo que trabajamos",
        "items": [
          "Construir el triángulo de Sierpinski a partir de un triángulo equilátero de 21 cm de lado.",
          "Construir el copo de nieve de Koch, también sobre un triángulo equilátero de 21 cm de lado.",
          "Colorear ambos de forma creativa."
        ]
      }
    ],
    "imagenes": [
      {
        "src": "assets/intro/fractales-collage.jpg",
        "pie": "Fractales en la naturaleza y en las matemáticas",
        "ratio": "1287/782"
      },
      {
        "src": "assets/intro/fractales-pasos.jpg",
        "pie": "El triángulo de Sierpinski paso a paso",
        "ratio": "1132/628"
      }
    ]
  },
  // ===== LÁMINA 13 =====
  { titulo: "Triángulo de Sierpinski",   // ← TÍTULO de la lámina 13
    consigna: "Construir un triángulo de Sierpinski a partir de un triángulo equilátero de 21 cm de lado y colorearlo de forma creativa.",
    objetivo: "Apunto a poder entender cómo una misma forma se repite en escalas cada vez más chicas.",
    referencias: "Tenía que mirar el video que mostró la profe para ver cómo se traza paso a paso.",
    proceso: "Uní los puntos medios de cada lado, dejé libre el triángulo del centro y repetí con los triángulos que quedaban. Después pinté cada grupo con una gama de colores y dejé algunos triángulos en negro.",
    dificultades: "Marcar bien los puntos medios y mantener la precisión a medida que los triángulos se hacían más chicos.",
    reflexion: "Colorearlo con distintas gamas hizo que una figura muy matemática se viera como una pieza de diseño.",   // ← TEXTOS de la lámina 13
    imagen: "assets/laminas/lamina-12-sierpinski.jpg", ratio: "1700/1700", ajuste: "contain", encuadre: "center", lado: "" },
  // ===== LÁMINA 14 =====
  { titulo: "Copo de nieve de Koch",   // ← TÍTULO de la lámina 14
    consigna: "Construir el copo de nieve de Koch a partir de un triángulo equilátero de 21 cm de lado y colorearlo de forma creativa.",
    objetivo: "Apunto a poder ver cómo el contorno se vuelve cada vez más complejo al repetir el mismo paso.",
    referencias: "Tenía que mirar el video de la profe y usar la escuadra de 30° y 60° para trazarlo.",
    proceso: "Dividí cada lado en tres partes iguales y agregué un triángulo en el medio, y repetí con los triángulos nuevos. Después lo pinté en celeste con el contorno azul más fuerte.",
    dificultades: "Que los ángulos y las medidas fueran exactos, porque cualquier error se notaba al repetir el paso.",
    reflexion: "Me gustó que con un paso tan simple se llegue a una figura tan detallada.",   // ← TEXTOS de la lámina 14
    imagen: "assets/laminas/lamina-13-koch.jpg", ratio: "1700/1700", ajuste: "contain", encuadre: "center", lado: "" }
];

/* Rótulos de cada campo (podés cambiar los nombres) y textos provisorios */
const CAMPOS = [
  ["consigna",     "Consigna"],
  ["objetivo",     "Objetivo y aprendizaje buscado"],
  ["referencias",  "Referencias e inspiración"],
  ["proceso",      "Descripción del proceso"],
  ["dificultades", "Dificultades y decisiones"],
  ["reflexion",    "Reflexión personal"]
];
const TITULO_PROVISORIO = "[ TÍTULO DE LA LÁMINA {n} ]";   // {n} = número de lámina
const TEXTO_PROVISORIO  = "[ ESCRIBÍ ACÁ: {campo} ]";       // {campo} = nombre del campo

/* ---------- 4. REFLEXIÓN FINAL ---------- */
const REFLEXION = [
  { titulo: "Mi evolución durante el año",            texto: "Al principio me costaba pasar una idea al papel y usar bien las herramientas de dibujo técnico. Con las láminas fui mejorando: mis trabajos quedaron más prolijos y más pensados." },
  { titulo: "Los aprendizajes adquiridos",            texto: "Aprendí a dibujar en perspectiva isométrica, a hacer vistas, a trabajar con escalas y medidas, y a explicar un diseño en una lámina. También a pensar en quién va a usar cada objeto." },
  { titulo: "Las dificultades que enfrenté",          texto: "Lo que más me costó fue la precisión: mantener las líneas rectas, alinear las vistas y tener paciencia cuando algo no salía." },
  { titulo: "Mi experiencia en la materia",           texto: "Me gustó que se mezclara lo técnico con lo creativo. Lo que más disfruté fueron las maquetas y los trabajos con color." },
  { titulo: "Lo que me llevo del proceso creativo",   texto: "Me llevo la costumbre de probar, equivocarme y volver a intentar. El proceso, con sus bocetos y errores, importa tanto como el resultado." }
];
/* ---------- FIRMA FINAL ----------
   imagen: tu firma (PNG con fondo transparente) · se muestra centrada al final de la página
   texto:  línea opcional debajo de la firma (dejala "" si no querés texto) */
const FIRMA = { imagen: "assets/firma.png", alt: "Firma de Belén Muela", texto: "" };

/* ---------- TEXTOS DE LA PÁGINA (títulos y pies que se ven en el sitio) ----------
   Escribí entre las comillas. Si un pie queda "" no se muestra. */
const PAGINA = {
  tituloAutorretrato: "Autorretrato visual",
  pieAutorretrato:    "",   // ✎ texto debajo del autorretrato (opcional)
  tituloProyectos:    "Proyectos y láminas",
  tituloReflexion:    "Reflexión final"
};

/* ---------- FLORES FLOTANTES DE FONDO ----------
   forma: "lirio" | "tulipan" | "hoja" | "mariposa"   lado: "izq" | "der"
   top: % de altura de pantalla   size: px   parallax: velocidad (0 = quieta) */
const FLOTANTES = [   // src: foto en assets/jardin/ · lado: "izq"|"der" · top: % altura · size: px · parallax: velocidad
  { src: "assets/jardin/lirio.webp",          lado: "izq", top: 12, size: 120, parallax: 0.12 },
  { src: "assets/jardin/tulipan-rosa.webp",   lado: "der", top: 30, size: 74,  parallax: 0.18 },
  { src: "assets/jardin/hoja-lirio.webp",     lado: "izq", top: 54, size: 60,  parallax: 0.08 },
  { src: "assets/jardin/tulipan-oscuro.webp", lado: "der", top: 66, size: 96,  parallax: 0.22 },
  { src: "assets/jardin/tulipan-rosa.webp",   lado: "izq", top: 80, size: 60,  parallax: 0.15 },
  { src: "assets/jardin/lirio.webp",          lado: "der", top: 90, size: 104, parallax: 0.10 }
];
