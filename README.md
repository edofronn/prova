# Osteria al Gallo – anteprima di restyling (BOZZA PRIVATA)

Proposta di nuovo sito vetrina per l'Osteria al Gallo, Mantova.
**Non è un sito pubblicato.** Serve solo per mostrarlo al titolare. Le pagine legali sono bozze, non un parere legale.

## Come vederlo
- **Il sito:** apri `index.html` con un doppio clic. Non serve nessun programma né un server.
- **La proposta da mostrare al titolare:** apri `presentazione/proposta.html`. Mostra il sito vero dentro uno smartphone, cosa include, prezzo e tempi (da compilare) e come si procede.

## Cosa c'è dentro
```
osteria-al-gallo-anteprima/
├── index.html            Home: presentazione, orari, menù, galleria, storia, servizi, dove siamo
├── privacy.html          Privacy policy (BOZZA)
├── cookie.html           Cookie policy (BOZZA)
├── note-legali.html      Note legali (BOZZA)
├── 404.html              Pagina "non trovata"
├── robots.txt            Blocca i motori di ricerca (solo anteprima)
├── favicon.png           Icona della scheda del browser (gallo ocra su marrone)
├── apple-touch-icon.png  Icona per chi aggiunge il sito alla schermata del telefono
├── css/style.css         Tutti gli stili (colori in cima, nelle variabili :root)
├── js/main.js            Schede del menù, orario di oggi, ingrandimento foto
├── img/                  Le 3 foto (ricavate dalle 2 del sito vecchio)
│   └── logo/             Logo: originale PNG + versioni vettoriali (SVG) chiara e ocra
├── presentazione/        Pagina di proposta per il titolare, con il sito dentro uno smartphone (NON va online)
└── docs/                 Documenti per te e per il titolare (non vanno online)
```

## Scelte tecniche
- Solo HTML, CSS e un po' di JavaScript. Nessuna libreria.
- Font di sistema: nessun Google Fonts o altri servizi esterni.
- Nessun analytics, pixel, chat, cookie o salvataggio nel browser.
- Mappa: solo il link "Apri su Google Maps". Nessuna mappa incorporata.
- Nessun modulo contatti: telefono ed email cliccabili.
- Il menù è testo vero nella pagina, con il posto per gli allergeni di ogni piatto.
- Pensato prima per il telefono: pulsanti grandi, barra "Chiama" fissa in basso, buoni contrasti, testi alternativi per le foto, menù usabile da tastiera.

## Il logo
Il gallo arriva dal file PNG che mi hai dato (`img/logo/logo-originale.png`). L'ho convertito in SVG: resta nitido a ogni dimensione e si può colorare. È nero nell'originale, qui è chiaro o ocra perché lo sfondo è scuro. Il PNG originale resta com'era.
Prima di pubblicare, conferma con il titolare che sia il suo logo ufficiale e che ne abbia i diritti.

## Come modificarlo
- **Segnaposto:** cerca `DA COMPILARE` in tutti i file. Sono evidenziati in giallo nella pagina. Elenco completo in `docs/DA-COMPILARE.md`.
- **Colori:** variabili all'inizio di `css/style.css`.
- **Menù:** in `index.html`, sezione `id="menu"`. Copia un blocco `<li class="dish">` per ogni piatto.
- **Orari:** in `index.html`, sezione `id="orari"`. Se cambiano i giorni, aggiorna anche `data-days` (0 = domenica ... 6 = sabato) e i testi in `js/main.js`.
- **Foto:** metti i file in `img/` e aggiorna i tag `<img>` (con un testo alternativo che descrive la foto).

## Prima di pubblicarlo
Segui `docs/CHECKLIST-PUBBLICAZIONE.md`. In particolare: togliere la striscia gialla "Anteprima", il `noindex` nelle pagine, il `robots.txt` e la cartella `presentazione/`.
