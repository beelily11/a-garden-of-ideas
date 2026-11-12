/* =====================================================================
   SCRIPT.JS · Funcionalidad. El contenido vive en datos.js.
   Secciones: 1) utilidades  2) flores flotantes  3) (sin sobre)  4) láminas e introducciones
              5) reflexión   6) scroll (aparición, parallax, menú)
   ===================================================================== */
const NS = "http://www.w3.org/2000/svg";
const reducir = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1) Utilidades */
function el(tag, clase, texto) {
  const e = document.createElement(tag);
  if (clase) e.className = clase;
  if (texto !== undefined) e.textContent = texto;   // textContent: seguro, no interpreta HTML
  return e;
}
function flor(forma) {
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("class", "flor");
  s.setAttribute("aria-hidden", "true");
  const u = document.createElementNS(NS, "use");
  u.setAttribute("href", "#" + forma);
  s.appendChild(u);
  return s;
}
/* Muestra la imagen si existe; si falta o la ruta está mal, deja el espacio provisorio */
function imagenOVacio(src, alt, etiqueta, estilo) {
  const caja = el("div", "contenedor-img");
  const vacio = el("div", "vacio");
  vacio.append(flor("lirio"), el("span", "", etiqueta));
  caja.appendChild(vacio);
  if (src) {
    const img = new Image();
    img.alt = alt; img.loading = "lazy";
    Object.assign(img.style, estilo || {});
    img.onload = () => vacio.remove();
    img.onerror = () => { img.remove(); vacio.lastChild.textContent = "No se encontró: " + src; };
    caja.appendChild(img);          // se agrega ya al documento para que la carga diferida funcione
    img.src = src;
  }
  return caja;
}

/* 2) Flores flotantes de fondo (datos: FLOTANTES) */
const flotantes = [];
FLOTANTES.forEach((f, i) => {
  const cont = el("div", "flotante " + f.lado);
  cont.style.top = f.top + "%"; cont.style.width = f.size + "px";
  let fl; if (f.src) { fl = new Image(); fl.src = f.src; fl.alt = ""; fl.className = "flor"; fl.loading = "lazy"; fl.style.cssText = "width:100%;height:auto"; } else fl = flor(f.forma);
  fl.style.animationDelay = (-i * 1.3) + "s";
  cont.appendChild(fl);
  document.getElementById("capaFlotante").appendChild(cont);
  flotantes.push({ cont, p: f.parallax, i });
});

/* 4) Láminas (datos: PROYECTOS, CAMPOS, placeholders) */
const lista = document.getElementById("listaProyectos");
/* Bloque de introducción (texto + imágenes enmarcadas) */
function crearIntro(p) {
  const a = el("article", "intro-bloque reveal");
  a.appendChild(el("span", "etiqueta-intro", p.etiqueta || "Introducción"));
  a.appendChild(el("h3", "titulo-lamina", p.titulo));
  const cuerpo = el("div", "intro-cuerpo"), txt = el("div", "intro-texto"), gal = el("div", "intro-galeria");
  (p.parrafos || []).forEach((t) => txt.appendChild(el("p", "", t)));
  (p.secciones || []).forEach((sec) => { txt.appendChild(el("h4", "", sec.titulo)); const ul = el("ul"); sec.items.forEach((t) => ul.appendChild(el("li", "", t))); txt.appendChild(ul); });
  if (p.cita) txt.appendChild(el("blockquote", "", p.cita));
  (p.imagenes || []).forEach((m) => {
    const fig = el("figure", "intro-figura"), marco = el("div", "marco rectangular mini"), c = imagenOVacio(m.src, m.pie || "", "", { objectFit: "contain" });
    const [w, h] = m.ratio.split("/").map(Number); c.style.aspectRatio = w + " / " + h; marco.appendChild(c); fig.appendChild(marco);
    if (m.pie) fig.appendChild(el("figcaption", "", m.pie)); gal.appendChild(fig);
  });
  cuerpo.append(txt, gal); a.appendChild(cuerpo); return a;
}
let num = 0;
PROYECTOS.forEach((p) => {
  if (p.tipo === "intro") { lista.appendChild(crearIntro(p)); return; }
  const i = num++;   // i cuenta solo las láminas (no las introducciones)
  const fotoIzq = p.lado ? p.lado === "izquierda" : i % 2 === 0;
  const art = el("article", "proyecto reveal" + (fotoIzq ? "" : " invertido") + (p.enProceso ? " en-proceso" : ""));
  // Título propio, encima de la imagen y del texto
  art.appendChild(el("h3", "titulo-lamina" + (p.titulo ? "" : " provisorio"), p.titulo || TITULO_PROVISORIO.replace("{n}", i + 1)));
  const cuerpo = el("div", "proyecto-cuerpo");

  // Columna de la imagen: marco rectangular dorado, siempre horizontal
  const colFoto = el("div", "col-foto");
  const marco = el("div", "marco rectangular");
  marco.appendChild(imagenOVacio(p.imagen, p.titulo || "Lámina " + (i + 1), p.enProceso ? "En proceso · foto próximamente" : "Tu lámina aquí",
    { objectFit: p.ajuste || "contain", objectPosition: p.encuadre || "center" }));
  // El marco toma la proporción de la imagen (campo ratio "ancho/alto" o, si falta, su tamaño real)
  const cImg = marco.querySelector(".contenedor-img"), rz = (p.ratio || "").split("/").map(Number);
  const fijar = (w, h) => { cImg.style.aspectRatio = w + " / " + h; marco.style.setProperty("--r", w / h); art.classList.toggle("vertical", h > w * 1.1); };
  if (rz.length === 2 && rz[0] && rz[1]) fijar(rz[0], rz[1]);
  else { const im = marco.querySelector("img"); if (im) im.addEventListener("load", () => fijar(im.naturalWidth, im.naturalHeight)); }
  ["lirio", "tulipan", "tulipan", "lirio"].forEach((f, k) => {
    const fl = flor(f); fl.classList.add("adorno", "a" + (k + 1)); marco.appendChild(fl);
  });
  colFoto.appendChild(marco);
  if (p.enProceso) colFoto.appendChild(el("span", "etiqueta-proceso", "Trabajo en proceso"));
  if (p.extras) {   // fotos chicas extra debajo de la lámina
    const fila = el("div", "extras");
    p.extras.forEach((src) => { const m = el("div", "marco rectangular mini"), c = imagenOVacio(src, p.titulo, "", { objectFit: "cover" }); c.style.aspectRatio = "1 / 1"; m.appendChild(c); fila.appendChild(m); });
    colFoto.appendChild(fila);
  }

  // Columna de texto
  const colTexto = el("div", "col-texto");
  CAMPOS.forEach(([clave, rotulo]) => {
    const bloque = el("div", "campo");
    bloque.appendChild(el("h4", "", rotulo));
    bloque.appendChild(el("p", p[clave] ? "" : "provisorio", p[clave] || TEXTO_PROVISORIO.replace("{campo}", rotulo.toUpperCase())));
    colTexto.appendChild(bloque);
  });
  cuerpo.append(colFoto, colTexto);
  art.appendChild(cuerpo);
  lista.appendChild(art);
});

/* Ampliar lámina al hacer clic (se cierra con clic o Esc) */
const lb = el("div", "lightbox"), lbImg = new Image();
lb.appendChild(lbImg); document.body.appendChild(lb);
lb.addEventListener("click", () => lb.classList.remove("abierta"));
addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("abierta"); });
document.addEventListener("click", (e) => {
  const img = e.target.closest(".marco img");
  if (img) { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("abierta"); }
});

/* 5) Reflexión final (datos: REFLEXION, FIRMA) */
REFLEXION.forEach((r) => {
  const c = el("div", "hoja-papel reveal");
  c.appendChild(flor(Math.random() < 0.5 ? "lirio" : "tulipan"));
  c.appendChild(el("h3", "", r.titulo));
  c.appendChild(el("p", r.texto ? "" : "provisorio", r.texto || TEXTO_PROVISORIO));
  document.getElementById("listaReflexion").appendChild(c);
});
/* Textos de la página y firma (datos: PAGINA, FIRMA) */
["tituloAutorretrato", "tituloProyectos", "tituloReflexion"].forEach((k) => { document.getElementById(k).textContent = PAGINA[k]; });
const pie = document.getElementById("pieAutorretrato");
if (PAGINA.pieAutorretrato) pie.textContent = PAGINA.pieAutorretrato; else pie.remove();
const firmaEl = document.getElementById("firma");
if (FIRMA.imagen) { const im = new Image(); im.src = FIRMA.imagen; im.alt = FIRMA.alt || "Firma"; im.className = "firma-img"; firmaEl.appendChild(im); }
if (FIRMA.texto) firmaEl.appendChild(el("p", "firma-texto", FIRMA.texto));

/* 6) Scroll: aparición progresiva, parallax suave y menú */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

const menu = document.getElementById("menu");
const ramas = [...document.querySelectorAll("[data-parallax]")];
let pendiente = false;
function actualizar() {
  pendiente = false;
  const y = scrollY;
  menu.classList.toggle("visible", y > innerHeight * 0.6);
  if (reducir) return;
  flotantes.forEach((f) => {
    f.cont.style.transform = "translate3d(0," + Math.sin(y / 500 + f.i * 1.7) * 360 * f.p + "px,0)";
  });
  ramas.forEach((r) => {
    const t = r.parentElement.getBoundingClientRect().top;
    r.style.setProperty("--py", t * Number(r.dataset.parallax) + "px");
  });
}
addEventListener("scroll", () => { if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); } }, { passive: true });
actualizar();
