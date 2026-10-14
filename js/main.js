const $=s=>document.querySelector(s);
const D=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
const A="11:00–15:00 · 17:00–24:00",B="11:00–14:30 · 17:00–24:00";
const H={1:[A,[[11,0,15,0],[17,0,24,0]]],2:[A,[[11,0,15,0],[17,0,24,0]]],3:[A,[[11,0,15,0],[17,0,24,0]]],4:[B,[[11,0,14,30],[17,0,24,0]]],5:[B,[[11,0,14,30],[17,0,24,0]]],6:[B,[[11,0,14,30],[17,0,24,0]]],0:["09:00–17:00",[[9,0,17,0]]]};
const now=new Date(),dy=now.getDay(),mn=now.getHours()*60+now.getMinutes();
const hrs=$("#hrs");
if(hrs)hrs.innerHTML=[1,2,3,4,5,6,0].map(k=>`<tr${k==dy?' class="today"':""}><th scope="row">${D[k]}</th><td>${H[k][0]}</td></tr>`).join("");
const op=H[dy][1].some(r=>mn>=r[0]*60+r[1]&&mn<r[2]*60+r[3]);
const msg=(op?"Aperti ora · ":"Chiuso ora · ")+"oggi "+H[dy][0];
["#st","#st2"].forEach(s=>{const e=$(s);if(e)e.textContent=msg});
const lb=$("#lb"),gal=$("#gal");
if(lb&&gal){gal.onclick=e=>{const im=e.target.closest("button")?.querySelector("img");if(im){lb.querySelector("img").src=im.src;lb.querySelector("img").alt=im.alt;lb.showModal()}};lb.onclick=()=>lb.close()}
