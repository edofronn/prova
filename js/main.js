/* Osteria al Gallo – anteprima. Nessuna libreria, nessun tracciamento, nessun cookie o storage. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Menù a schede */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); show(n); n.focus(); }
    });
  });
  if (tabs.length) show(tabs[0]);

  /* Orari: evidenzia oggi (fuso orario di Roma) */
  var rows = document.querySelectorAll('.orari tr');
  if (rows.length) {
    var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var d;
    try {
      d = map[new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'Europe/Rome' }).format(new Date())];
    } catch (e) { d = new Date().getDay(); }
    var txt = { 0: 'Oggi: domenica 12:30–14:30', 1: 'Oggi: lunedì chiuso' };
    var dflt = 'Oggi: 12:30–14:30 e 19:30–22:30';
    Array.prototype.forEach.call(rows, function (r) {
      if (r.getAttribute('data-days').split(',').indexOf(String(d)) > -1) r.classList.add('is-today');
    });
    var today = document.getElementById('today');
    if (today) today.textContent = txt[d] || dflt;
  }

  /* Galleria: ingrandimento */
  var lb = document.getElementById('lb');
  if (lb) {
    var lbImg = document.getElementById('lb-img');
    var lbCap = document.getElementById('lb-cap');
    Array.prototype.forEach.call(document.querySelectorAll('.shot'), function (b) {
      b.addEventListener('click', function () {
        var img = document.getElementById(b.getAttribute('data-full'));
        lbImg.src = img.src; lbImg.alt = img.alt; lbCap.textContent = img.alt;
        if (lb.showModal) lb.showModal();
      });
    });
    document.getElementById('lb-close').addEventListener('click', function () { lb.close(); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  }
})();
