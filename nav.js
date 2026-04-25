// ─────────────────────────────────────────────
//  POW417 — Nav Config
//  Toggle buttons on/off here for all pages
// ─────────────────────────────────────────────

const NAV_BUTTONS = [
  {
    label: 'Releases',
    href:  'releases.html',
    filled: false,
    enabled: true,   // ← flip to false to hide on all pages
  },
  {
    label: 'Submit Film',
    href:  'submission.html',
    filled: true,
    enabled: true,   // ← flip to false to hide on all pages
  },
];

// ─────────────────────────────────────────────
//  Don't edit below this line
// ─────────────────────────────────────────────

(function () {
  const nav = document.createElement('nav');
  nav.id = 'nav';

  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.className = 'nav-logo';
  logo.innerHTML = 'POW<span style="color:var(--red)">4</span>17';
  nav.appendChild(logo);

  const ctas = document.createElement('div');
  ctas.className = 'nav-ctas';

  NAV_BUTTONS.filter(b => b.enabled).forEach(b => {
    const a = document.createElement('a');
    a.href = b.href;
    a.className = 'nav-cta' + (b.filled ? ' nav-cta-filled' : '');
    a.textContent = b.label;
    ctas.appendChild(a);
  });

  nav.appendChild(ctas);
  document.body.prepend(nav);

  // Scroll effect (index.html uses transparent nav)
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
})();
