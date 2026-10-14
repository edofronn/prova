const M=[
["Menù stagionale",`#Antipasti
Frico friulano|7|13,00
Carpaccio di manzo, puntarelle, salsa Montasio e chips di Parmigiano|7|14,00
Uovo, nido di pasta kataifi, fonduta di Parmigiano e coda di manzo|1-3-7|12,00
Capesante di Marano gratinate|1-14|15,00
Calamaro scottato alla griglia con schiacciata di patate al limone|14|15,00
Insalatina di asparagi con uovo alla milanese croccante|1-3|13,00
Sfogliatina con ricotta di bufala e asparagi, crema di erbe spontanee|1-3-7|14,00
#Primi
Gnocchi di patate fatti in casa con ragù di cortile|1|13,00
Carbonara dei miracoli|1-3-7|13,00
La pasta e fagioli dell'hosteria|1|14,00
Paccheri con gamberi, calamari, pomodorini e salsa al pesto di pistacchio|1-2-3-7|15,00
Tagliatella con asparagi e gamberi|1-2-9|14,00
Ravioli di pasta fresca con ricotta e burrata alla norma|1-3-7|14,00
#Secondi
Frittura mista di Marano|1-2-4-14|17,00
Tagliata di tonno rosso|4|22,00
Guancetta di manzo al Raboso del Piave con polentina morbida|9|16,00
Coscia di coniglio ripiena con asparagi e salsiccia|9|17,00
Fegato alla veneziana con polenta alla griglia||16,00
Spiedone di carne mista con patate dell'Hosteria||18,00
#Dessert
Cubo ai due cioccolati|1-3-7|7,00
Tiramisù|1-3-7|6,00
Semifreddo al pistacchio con ganache al cioccolato|1-3-7-8|6,00
Gelato con frutti di bosco|7|5,00
Strudel dell'Hosteria con mele e crema alla vaniglia|1-3-7-8|6,00`],
["Carni e specialità",`#Carni
Spagna, Polonia, Irlanda · costata all'etto||7,00
Spagna, Polonia, Irlanda · fiorentina all'etto||8,50
Filetto di manzo||26,00
Tagliata di manzo con patate saltate||16,00
#Piatti speciali
Agnello scotta dei e patate saltate al rosmarino||18,00
Costicine di agnello fritte con patate|1-3|18,00
Bistecca di angus e patate 300 g||24,00
Secreto di maialino iberico con patate||17,00
#Contorni
Verdure alla griglia||6,00
Asparagi di Bassano alla griglia||7,00
Asparagi di Bassano bolliti||7,00
Patate saltate||5,00
Patate fritte||5,00
Patate rustiche dell'Hosteria||5,00
Insalata mista||5,00`],
["Cicchetti e taglieri",`#Taglieri|(classico / grande)
Tagliere Benedetto~con salumi, formaggi del territorio e sottaceti|7|16,00 / 24,00
Tagliere Formaggi~selezione Moro Formaggi e Latteria Visinale|7|12,00 / 18,00
Tagliere Pace e Bene~con salumi affettati||12,00 / 18,00
Tagliere "Galloni"~prosciutto crudo 36 mesi||13,00
Sottoli - Sottaceti~degustazione||4,50
Crostini~pane e i gusti del giorno||2,50
#Cicchetti dell'hostaria|3,50
Sarde in saor|1-4-8
Gamberi in saor|1-2-8
Polpette di carne in umido|1-3-7-9
Baccalà mantecato|4-7
Baccalà alla vicentina|4
Parmigiana di melanzane|1-7
Piovra, patate e pomodorini|14
Fiori di zucca fritti|19
Mozzarella in carrozza con acciughe|1-4-7
Mozzarella in carrozza con prosciutto cotto alla brace "Villani"|1-7
Arancini della tradizione|1-2-7`],
["Crudités di mare",`#Crudités di mare|4,00
Scampo|2
Gambero rosso|2
Ostrica fine de claire|14
Salmone|4
Mazzancolla|2
Capasanta|14
Plateau di crudo|2-4-14|38,00
Plateau di crudo + 1 calice di champagne|2-4-14|45,00`],
["|"],
["Bollicine",`#Trentino Alto Adige
Ferrari · Perlé 2018||60,00
Ferrari · Giulio Ferrari||340,00
Altemasi · Millesimato||45,00
Altemasi · Pas Dosé||70,00
Altemasi · Blanc de Noir 2019||48,00
Altemasi · Rosé Riserva 2018||80,00
#Lombardia
Famiglia Olivini · Spumante rosé||65,00
Ca' del Bosco · Anna Maria Clementi||300,00
Bellavista · Alma||55,00
Bellavista · Alma 0,375 l||29,00
Bellavista · Riserva Scala||70,00
Derbusco · Cives||55,00
Derbusco · Cives Rosé||60,00
Quadra · Carlo Nappo||40,00
Cavalleri · Blanc de Blanc Natur||58,00
Cavalleri · Au Contrair Riserva||110,00
#Veneto
Corte Abbati · Prosecco di Treviso||16,00
#Friuli Venezia Giulia
San Simone · Metodo Zero 2017||25,00`],
["Bianchi",`#Friuli Venezia Giulia
Aganis · Di Flabe Ribolla 2022||27,00
Doro Princic · Pinot Bianco 2022||30,00
Gigante · Friulano 2022||25,00
Robert Princic · Gradis' Ciutta Riserva 2018||35,00
Le Monde · Alma Pinot Bianco 2020||35,00
Venica · Ronco del Ceró Sauvignon 2022||38,00
Specogna · Pinot Grigio 2022||25,00
Russolo · Doi Raps 2021||40,00
La Castellada · Bianco della Castellada 2015||80,00
Miani · Sauvignon 2021||90,00
Miani · Chardonnay 2022||90,00
Manlio della Frattina · Malvasia 2024||22,00
#Veneto
Ca' di Rajo · "Nina" Manzoni Bianco 2022||25,00
Corte Abbati · Crial Tai 2023||35,00
Corte Abbati · Pinot Grigio 2024||22,00
Corte Abbati · Chardonnay 2024||22,00
Monte del Frá · Lugana 2023||36,00
Io Eos · Garganega 2021||36,00
#Toscana
Panizzi · Vernaccia Riserva 2019||60,00
#Trentino Alto Adige
Alois Lageder · Pinot Grigio 2023||25,00
#Abruzzo
Barone di Valforte · Pecorino 2022||28,00
#Francia
Minuty · Minuty (Provenza) 2022||42,00
Rolly Gassmann · Pinot Blanc (Alsazia) 2017||70,00
#Slovenia
Marian Simcic · Chardonnay 2022||40,00`],
["Rossi",`#Toscana
Biondi Santi · Rosso di Montalcino 2016||290,00
Ca' Marcanda · Promis 2021||80,00
Bolgheri · Ornellaia||S.Q.
Sassicaia||S.Q.
Carpineto · Chianti 2021||30,00
Braschi · Sangiovese 2016||30,00
Caparzo · Brunello di Montalcino 2018||100,00
#Piemonte
Francesco Clerico · Barolo 2020||140,00
Parusso · Barbera d'Alba 2022||50,00
Scarzello · Nebbiolo 2021||55,00
Gaja · Barbaresco 2016||320,00
Ca' di Frara · Pinot Nero 2020||40,00
#Veneto
Mazzi · Valpolicella 2024||25,00
Mazzi · Valpolicella Superiore 2022||35,00
Serafini & Vidotto · Phigaia 2021||30,00
Corte degli Abbati · Malbec 2024||22,00
Corte degli Abbati · Refosco 2024||22,00
#Abruzzo
Barone di Valforte · Montepulciano d'Abruzzo 2021||38,00
#Valle d'Aosta
La Crotta di Vegneron · Pinot Nero 2022||38,00
#Friuli Venezia Giulia
Tommasella · Cabernet Franc 2021||28,00
San Simone · Levante 2020||30,00
Doro Princic · Cabernet 2021||35,00
La Castellada · Rosso della Castellada 2011||90,00
Petrussa · Schioppettino 2018||50,00
#Trentino Alto Adige
Letrari · Teroldego 2019||38,00
#Francia
Dauzac · Bordeaux 2020||42,00
Louis Max · Pinot Noir 2022||25,00
St. Georges St. Emilion · Château Calon 2018||42,00`],
["Dessert e champagne",`#Vini da dessert
Maculan · Torcolato 0,375 l 2020||38,00
Frescobaldi · Vin Santo 0,375 l 2011||28,00
Frescobaldi · Santo Spirito 0,375 l||25,00
Specogna · Picolit 2019||58,00
#Champagne
Krug||380,00
Gosset||95,00
Don Pérignon · Vintage 2013||280,00
Ruinart||90,00
Ruinart · Blanc de Blanc||140,00
Louis Roederer · Cristal||550,00
Philipponnat · Selezione Carlo Nappo||85,00
Bollinger · Special Cuvée||95,00`],
["Casa, birre e cocktail",`#Vini della casa|(calice · 0,50 · 0,75 · 1 l)
Bianco||2,50 · 8,00 · 15,00 · 16,00
Rosso||2,50 · 8,00 · 15,00 · 16,00
Frizzante||3,50 · 9,00 · 16,00 · 18,00
#Birre
Pedavena 0,20 l||3,50
Pedavena 0,50 l||5,00
Hoegaarden blanche 0,33 l||3,50
Ceres Red Eric 0,33 l||4,00
#Cocktail
Americano||8,00
Negroni sbagliato||8,00
Rum e cola||8,00
Gin tonic||10,00
Mojito||8,00
Whiskey sour||8,00
#Liquori
Amaro||4,00
Whiskey premium||10,00
Rum premium||10,00
Grappa||4,50
Grappa superiore||5,00`]
];
const T=$("#tabs"),P=$("#panel");
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function show(i){
 [...T.querySelectorAll("button")].forEach(b=>b.setAttribute("aria-selected",b.dataset.i==i));
 let h="",d="";
 M[i][1].split("\n").forEach(l=>{
  if(l[0]=="#"){const[t,x=""]=l.slice(1).split("|");
   if(/^\d/.test(x)){d=x;h+=`<h3>${esc(t)}</h3>`}else{d="";h+=`<h3>${esc(t)}<small>${esc(x)}</small></h3>`}
   return}
  const[n,a="",p=""]=l.split("|"),[nm,ds]=n.split("~"),pr=p||d,pp=/^\d/.test(pr)?"€ "+pr:pr;
  h+=`<div class="it"><div><b>${esc(nm)}</b>${a?`<sup>${a}</sup>`:""}${ds?`<i>${esc(ds)}</i>`:""}</div><span>${pp}</span></div>`});
 P.innerHTML=h}
M.forEach((m,i)=>{
 if(m[0]=="|"){T.insertAdjacentHTML("beforeend",'<i class="sp" aria-hidden="true"></i>');return}
 const b=document.createElement("button");b.textContent=m[0];b.dataset.i=i;b.role="tab";b.onclick=()=>show(i);T.append(b)});
show(0);
