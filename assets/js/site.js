/* Shared header, footer and behaviour for every page */
(function () {
  const page = document.body.dataset.page || "";
  const IMG = "assets/img/";
  const PHONE = "0208 450 0845", TEL = "tel:02084500845";
  const EMAIL = "info@williammcgowanlettings.com";
  const FB = "https://www.facebook.com/profile.php?id=61590482489536";
  const NAV = [["index.html", "Home", "home"], ["about.html", "About Us", "about"], ["rentals.html", "Rentals", "rentals"], ["contact.html", "Contact", "contact"]];
  const link = ([h, t, k]) => `<a href="${h}" class="${page === k ? "active" : ""}">${t}</a>`;

  /* ---------- Header ---------- */
  document.body.insertAdjacentHTML("afterbegin", `
  <div class="util"><div class="wrap">
    <span class="hide">300 Neasden Lane · London NW10 0AD</span>
    <span><a href="${TEL}">Call us now · ${PHONE}</a></span>
    <span class="hide"><a href="mailto:${EMAIL}">${EMAIL}</a></span>
  </div></div>
  <header id="hdr"><div class="wrap bar">
    <nav class="side">${NAV.slice(0, 2).map(link).join("")}</nav>
    <a href="index.html" class="logo" aria-label="McGowans home"><img src="${IMG}mcgowans-logo.png" alt="McGowans"></a>
    <nav class="side r">${NAV.slice(2).map(link).join("")}<a href="${TEL}" class="btn light sm">Call us now</a></nav>
    <button class="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div></header>
  <div class="drawer" id="drawer" role="dialog" aria-label="Menu">
    <button class="x" id="drawerX" aria-label="Close menu">×</button>
    ${NAV.map(link).join("")}
    <a href="${TEL}" class="btn solid">Call ${PHONE}</a>
  </div>`);

  /* ---------- Footer ---------- */
  document.body.insertAdjacentHTML("beforeend", `
  <div class="partners"><div class="wrap">
    <span class="kicker">We are partners with</span>
    <img src="${IMG}nrla.png" alt="NRLA members">
    <img src="${IMG}tpo.jpg" alt="The Property Ombudsman">
  </div></div>
  <footer><div class="wrap">
    <div class="f-grid">
      <div><a href="index.html" class="logo"><img src="${IMG}mcgowans-logo.png" alt="McGowans"></a>
        <p>Real estate specialists in properties around North West London.</p></div>
      <div><h4>Pages</h4><ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
      <div><h4>Services</h4><ul><li>JWM HMO Holdings LLP</li><li>WMJH Ltd</li><li>O'Dea Properties</li><li>William McGowan Property Investments LLP</li><li>McGowan Lettings</li></ul></div>
      <div><h4>Contact information</h4><ul>
        <li><span class="lbl" style="color:rgba(255,255,255,.4)">Email address</span><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li><span class="lbl" style="color:rgba(255,255,255,.4)">Our offices</span>300 Neasden Lane, London NW10 0AD</li>
        <li><span class="lbl" style="color:rgba(255,255,255,.4)">Phone number</span><a href="${TEL}">${PHONE}</a></li>
        <li><a href="${FB}" target="_blank" rel="noopener">Facebook ↗</a></li></ul></div>
    </div>
    <div class="f-legal"><span>© ${new Date().getFullYear()} McGowans. All rights reserved.</span><span><a href="#" data-soon>Privacy Policy</a> · <a href="#" data-soon>Terms &amp; Conditions</a></span></div>
  </div></footer>
  <div class="mbook"><a href="${TEL}">Call us</a><a href="rentals.html">View rentals</a></div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`);

  /* ---------- Header behaviour ---------- */
  const hdr = document.getElementById("hdr");
  const onScroll = () => hdr.classList.toggle("fixed", scrollY > 120);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const drawer = document.getElementById("drawer");
  document.getElementById("burger").onclick = () => drawer.classList.add("open");
  document.getElementById("drawerX").onclick = () => drawer.classList.remove("open");
  addEventListener("keydown", e => { if (e.key === "Escape") drawer.classList.remove("open"); });

  /* ---------- Toast ---------- */
  let tt;
  window.toast = msg => {
    const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 3500);
  };
  document.querySelectorAll("[data-soon]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); toast("This page will be added in the full build."); }));

  /* ---------- Reveal + counters ---------- */
  window.observeReveal = root => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-n]").forEach(el => {
        const n = +el.dataset.n, suf = el.dataset.suf || ""; let i = 0;
        const t = setInterval(() => { i++; el.textContent = Math.round(n * i / 40) + suf; if (i >= 40) clearInterval(t); }, 35);
      });
      io.unobserve(e.target);
    }), { threshold: .1 });
    (root || document).querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));
  };
  observeReveal();

  /* ---------- Property card ---------- */
  window.propCard = p => `
    <article class="suite rv ${p.status === "let" ? "is-let" : ""}">
      <a href="property.html?id=${p.id}" class="ph">
        <img class="cover" src="${IMG}props/${p.imgs[0]}" alt="${p.title}" loading="lazy">
        <span class="badge ${p.status}">${p.status === "let" ? "Let agreed" : "Available"}</span>
        <span class="area">${p.area}</span>
      </a>
      <div class="info">
        <h3><a href="property.html?id=${p.id}">${p.title}</a></h3>
        <div class="amen"><span>${p.typeLabel}</span><span>${p.beds} bed${p.beds > 1 ? "s" : ""}</span>${p.billsIncluded ? "<span>Bills incl.</span>" : ""}</div>
        <div class="from"><b>${p.priceLabel}</b> / month</div>
        <a href="property.html?id=${p.id}" class="btn sm">View property</a>
      </div>
    </article>`;

  /* ---------- Forms: validation + success ---------- */
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const phoneOk = v => !v || /^[0-9 +()-]{10,16}$/.test(v);
  window.bindForms = root => {
  root.querySelectorAll("textarea[maxlength]").forEach(ta => {
    const c = ta.parentElement.querySelector(".counter"); if (!c) return;
    const upd = () => { c.textContent = `${ta.value.length} / ${ta.maxLength}`; c.classList.toggle("max", ta.value.length >= ta.maxLength); };
    ta.addEventListener("input", upd); upd();
  });
  root.querySelectorAll("form[data-validate]:not([data-bound])").forEach(f => {
    f.dataset.bound = 1; f.noValidate = true;
    f.addEventListener("submit", e => {
      e.preventDefault();
      let good = true;
      f.querySelectorAll(".fl").forEach(fl => {
        const el = fl.querySelector("input,textarea,select"); if (!el) return;
        const v = el.value.trim();
        let bad = (el.required && !v) || (el.type === "email" && v && !emailOk(v)) || (el.type === "tel" && !phoneOk(v));
        fl.classList.toggle("bad", !!bad); if (bad) good = false;
      });
      if (!good) { f.querySelector(".bad input,.bad textarea")?.focus(); return; }
      const ok = f.querySelector(".ok-msg");
      if (ok) { ok.classList.add("show"); ok.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      toast(f.dataset.success || "Thank you — we'll be in touch within 24 hours.");
      f.reset(); f.querySelectorAll("textarea[maxlength]").forEach(t => t.dispatchEvent(new Event("input")));
    });
    f.addEventListener("input", e => e.target.closest(".fl")?.classList.remove("bad"));
  });
  };
  bindForms(document);
})();
