/* =====================================================================
   JARDIN.JS · Animaciones ligadas al scroll (sin librerías: funciona offline)
   1) Crecimiento del tulipán  2) Parallax por capas y zoom de cámara
   3) Enredaderas que crecen   4) Pétalos
   Todo se calcula con la posición del scroll: al bajar crece y al subir retrocede.
   ===================================================================== */
(() => {
  const reducir = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const seg = (p, a, b) => { const t = clamp((p - a) / (b - a)); return t * t * (3 - 2 * t); };   // 0→1 suavizado entre a y b
  const clip = (e, t) => { e.style.clipPath = "inset(0 0 " + ((1 - t) * 100) + "% 0)"; };           // crece hacia abajo

  /* ---------- Raíces: sistema de raíces generado (principales, laterales y raicillas), cónicas y con borde irregular ---------- */
  function generarRaices() {
    const g = document.getElementById("raices"), NS = "http://www.w3.org/2000/svg", out = [];
    let sem = 11; const rnd = () => (sem = (sem * 16807) % 2147483647) / 2147483647;   // azar fijo: siempre las mismas raíces
    const fx = (p) => p[0].toFixed(1) + " " + p[1].toFixed(1);
    function rama(x0, y0, ang, len, w, prof, t0, dur) {
      const n = Math.max(6, Math.round(len / 9)), pts = [[x0, y0]]; let a = ang, x = x0, y = y0;
      for (let i = 1; i <= n; i++) { a += (rnd() - .5) * .5; a += (Math.PI / 2 - a) * .06; x += Math.cos(a) * len / n; y += Math.sin(a) * len / n; pts.push([x, y]); }
      const Li = [], Ri = [];
      pts.forEach((p, i) => { const q = pts[Math.min(i + 1, n)], o = pts[Math.max(i - 1, 0)], dx = q[0] - o[0], dy = q[1] - o[1], d = Math.hypot(dx, dy) || 1, ww = w * Math.pow(1 - i / (n + 1), .8) / 2 + .15;
        Li.push([p[0] - dy / d * ww, p[1] + dx / d * ww]); Ri.push([p[0] + dy / d * ww, p[1] - dx / d * ww]); });
      const gg = document.createElementNS(NS, "g"), pa = document.createElementNS(NS, "path");
      pa.setAttribute("d", "M" + Li.map(fx).join("L") + "L" + Ri.reverse().map(fx).join("L") + "Z");
      pa.setAttribute("fill", "url(#gRaiz)"); pa.setAttribute("stroke", "#7d6544"); pa.setAttribute("stroke-width", ".35");
      gg.appendChild(pa); g.appendChild(gg); out.push({ g: gg, x: x0, y: y0, t0, dur });
      if (prof < 3) for (let k = 2; k < n; k += 2 + (rnd() * 3 | 0)) {
        if (rnd() > .78) continue; const lado = rnd() < .5 ? -1 : 1, f = k / n;
        rama(pts[k][0], pts[k][1], a + lado * (.55 + rnd() * .8), len * (.28 + rnd() * .3) * (1 - f * .4), w * .5, prof + 1, t0 + f * dur, dur * .45);
      }
    }
    [[1.2, 150, 6.5, .08], [1.45, 185, 7, .10], [1.7, 165, 6, .12], [1.95, 140, 5.5, .14]].forEach(([a, l, w, t]) => rama(200, 604, a, l, w, 0, t, .3));
    return out;
  }

  const sec = $("#jardin"), semilla = $("#semilla"), raices = generarRaices(), tallo = $("#tallo");
  const hojaI = $("#hojaI"), hojaD = $("#hojaD"), brote = $("#brote"), fondo = $("#fondoJardin");
  const capas = $$("#jardin [data-vel]"), crecen = $$("#jardin [data-grow]");

  /* ---------- 1) Tulipán: semilla → raíces → tallo → hojas → botón → flor abierta ---------- */
  function crecer(p) {
    semilla.setAttribute("transform", "translate(200 604) scale(" + (1 + .25 * seg(p, 0, .12) - .45 * seg(p, .12, .45)) + ")");
    semilla.style.opacity = 1 - .6 * seg(p, .3, .6);
    raices.forEach((r) => { const t = seg(p, r.t0, r.t0 + r.dur); r.g.setAttribute("transform", "translate(" + r.x + " " + r.y + ") scale(" + t + ") translate(" + -r.x + " " + -r.y + ")"); r.g.style.opacity = t > 0 ? 1 : 0; });
    const st = seg(p, .22, .68);
    tallo.style.clipPath = "inset(" + ((1 - st) * 100) + "% 0 0 0)";                                   // el tallo asciende desde la tierra
    const gi = seg(p, .42, .68), gd = seg(p, .5, .75);
    hojaI.style.transform = "translate(-100%,0) rotate(" + (-34 + 10 * (1 - gi)) + "deg) scale(" + -gi + "," + gi + ")";
    hojaD.style.transform = "translate(0%,0) rotate(" + (30 - 10 * (1 - gd)) + "deg) scale(" + gd + "," + gd + ")";
    const b = seg(p, .66, .84), a = seg(p, .86, 1);                                                   // b: botón que se forma · a: apertura
    const sx = b * (.42 + .58 * a), sy = b * (.62 + .38 * a);                                          // el botón es angosto y se ensancha al abrir
    brote.style.transform = "rotate(" + (-9 * (1 - a)) + "deg) scale(" + sx + "," + sy + ")";
    brote.style.filter = "saturate(" + (.8 + .2 * a) + ") brightness(" + (.88 + .12 * a) + ") drop-shadow(0 6px 8px rgba(40,28,18,.3))";
  }

  /* ---------- 3) Enredaderas: laterales (según toda la página) y de sección (según su posición) ---------- */
  function enredaderas(pagina) {
    $$("[data-lat]").forEach((e, i) => clip(e, seg(pagina, .02 + i * .06, .6 + i * .1)));
    $$("[data-crece]").forEach((e) => { const r = e.getBoundingClientRect(); clip(e, seg(innerHeight * .9 - r.top, 0, innerHeight * .6)); });
  }

  /* ---------- 4) Pétalos (foto de un pétalo de lirio) ---------- */
  if (!reducir) {
    const cont = $("#petalos");
    for (let i = 0; i < 10; i++) {
      const p = document.createElement("div"); p.className = "petalo-vuela";
      p.style.cssText = "left:" + (Math.random() * 100) + "%;--s:" + (22 + Math.random() * 26) + "px;--d:" + (18 + Math.random() * 22) + "s;--w:" + (-Math.random() * 36) + "s;--dx:" + (-140 + Math.random() * 280) + "px;--g:" + (3 + Math.random() * 4) + "s";
      p.innerHTML = '<img src="assets/jardin/petalo.webp" alt="">'; cont.appendChild(p);
    }
  }

  /* ---------- 2) Parallax, cámara y ciclo de scroll ---------- */
  let pend = false;
  function frame() {
    pend = false;
    const total = sec.offsetHeight - innerHeight, p = reducir ? 1 : clamp(-sec.getBoundingClientRect().top / total);
    crecer(p);
    crecen.forEach((e) => clip(e, seg(p, .05, .65)));
    if (!reducir) {
      capas.forEach((c) => { c.style.transform = "translate3d(0," + ((p - .5) * -Number(c.dataset.vel) * innerHeight) + "px,0)"; });
      fondo.style.transform = "scale(" + (1 + .22 * p) + ")";                                         // la cámara avanza hacia el jardín
    }
    enredaderas(reducir ? 1 : clamp(scrollY / (document.documentElement.scrollHeight - innerHeight)));
  }
  const pedir = () => { if (!pend) { pend = true; requestAnimationFrame(frame); } };
  addEventListener("scroll", pedir, { passive: true }); addEventListener("resize", pedir); addEventListener("load", frame); frame();
})();
