const imgs = SWIFT_ITEMS.map(i => `<img src="${i.i}" alt="${i.n}" title="${i.n}">`);
const half = Math.ceil(imgs.length / 2);
document.getElementById("t1").innerHTML = imgs.slice(0, half).join("").repeat(2);
document.getElementById("t2").innerHTML = imgs.slice(half).join("").repeat(2);

const els = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add("in"));
