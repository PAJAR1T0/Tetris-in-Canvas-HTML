var ie=Object.defineProperty;var se=(t,e,n)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>(se(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();let O,S,L,T,E,R,m,D,N,G,X,Y;const le=()=>new Promise(t=>{O=new Audio("../assets/sounds/cantRotate.mp3"),O.addEventListener("canplaythrough",()=>t(!0))}),ue=()=>new Promise(t=>{S=new Audio("../assets/sounds/clearLine.mp3"),S.addEventListener("canplaythrough",()=>t(!0))}),ce=()=>new Promise(t=>{L=new Audio("../assets/sounds/gameOver.mp3"),L.addEventListener("canplaythrough",()=>t(!0))}),de=()=>new Promise(t=>{D=new Audio("../assets/sounds/mainSounds/mainAudio1.mp3"),D.addEventListener("canplaythrough",()=>t(!0))}),he=()=>new Promise(t=>{N=new Audio("../assets/sounds/mainSounds/mainAudio2.mp3"),N.addEventListener("canplaythrough",()=>t(!0))}),fe=()=>new Promise(t=>{G=new Audio("../assets/sounds/mainSounds/mainAudio3.mp3"),G.addEventListener("canplaythrough",()=>t(!0))}),pe=()=>new Promise(t=>{X=new Audio("../assets/sounds/mainSounds/mainAudio4.mp3"),X.addEventListener("canplaythrough",()=>t(!0))}),we=async()=>{await de(),await he(),await fe(),await pe(),Y=[D,N,G,X]},me=()=>new Promise(t=>{T=new Audio("../assets/sounds/newPiece.mp3"),T.addEventListener("canplaythrough",()=>t(!0))}),ye=()=>new Promise(t=>{E=new Audio("../assets/sounds/newRecord.mp3"),E.volume=.5,E.addEventListener("canplaythrough",()=>t(!0))}),ge=()=>new Promise(t=>{R=new Audio("../assets/sounds/nextLevel.mp3"),R.addEventListener("canplaythrough",()=>t(!0))}),ve=()=>new Promise(t=>{m=new Audio("../assets/sounds/inWait.mp3"),m.volume=.25,m.addEventListener("canplaythrough",()=>t(!0))}),Ae=()=>L.addEventListener("ended",()=>{m.play()}),xe=async()=>{await le(),await ue(),await ce(),await we(),await me(),await ye(),await ge(),await ve(),Ae()},A=10,H=A*2,c=Math.max(window.innerWidth*.2,350),d=c*2,P=c/A,Pe=()=>{const t=document.getElementById("app"),e=document.createElement("canvas"),n=e.getContext("2d");return e.width=c,e.height=d,t.appendChild(e),n};let I=!1;const Ee=()=>{window.addEventListener("keydown",t=>{if(!I){I=!0,M&&(Le(),Ie(),De(),Ye(),re());let e=t.key;if(e==="ArrowLeft"||e==="a")return g(-1);if(e==="ArrowRight"||e==="d")return g(1);if(e==="ArrowUp"||e==="w")return g("up");if(e==="ArrowDown"||e==="s"||t.code==="Space")return g("downKeyDown")}}),window.addEventListener("keyup",t=>{let e=t.key;(e==="ArrowDown"||e==="s"||t.code==="Space")&&g("upKeyDown"),I=!1})};let M=!1;const Le=()=>M=!1,Me=()=>{clearInterval(oe),M=!0,w.pause(),L.play(),w.currentTime=0,i.save(),i.beginPath(),i.fillStyle="white",i.fillRect(0,d/2*.9,c,d*.1),i.fill(),i.font='37px "Press Start 2P"',i.textAlign="center",i.textBaseline="middle",i.fillStyle="black",i.fillText("Game Over",c/2,d/2),i.fill(),i.restore()},q=40,J=10,_=20,V=2e3,be=V/_,ke=q/_;let Q=q,$=0,p=40;const Ie=()=>p=40,g=t=>{if($=Math.floor(f/be),p=Math.floor(f)<V?q-Math.round(ke*$):J,p!==Q&&(R.play(),Q=p),typeof t=="number"){let e=l.pop(),n=!1;e.forEach(r=>{(r.x-1<0&&t<0||r.x+1===A&&t>0)&&(n=!0),l.forEach(a=>{a.forEach(o=>{n=r.x-1===o.x&&r.y===o.y&&t<0||r.x+1===o.x&&r.y===o.y&&t>0?!0:n})})}),n||e.forEach(r=>{r.move(t)}),l.push(e);return}if(t==="downKeyDown"&&(p=J),t==="up"){let e=l.pop();Te(e),l.push(e)}},Ce=()=>{let t=[];for(let e=H-1;e>=0;e--){if(l.forEach((n,r)=>{n.forEach(a=>{a.y===e&&t.push(r)})}),t.length===A){F(Xe),t=t.filter((n,r,a)=>a.indexOf(n)===r),t.sort((n,r)=>n-r);for(let n=0;n<t.length;n++){let r=t[n]-n;l.splice(r,1)}S.play()}t=[]}};let C=0;const Oe=()=>{m.pause(),m.currentTime=0,C+=1,i.clearRect(0,0,c,d);let t=l.pop(),e=!1;if(t.forEach(n=>{e||(e=n.colitionChecker())}),!e&&C%p===0&&(F(Ne),t.forEach(n=>{n.gravity()}),Ce()),C%10===0&&l.forEach((n,r)=>{let a=!1;n.forEach(o=>{a||(a=o.colitionChecker(r))}),a||n.forEach(o=>{o.gravity()})}),l.push(t),l.forEach(n=>{n.forEach(r=>{r.draw()})}),Ke(),e){let n=!1;t.forEach(r=>{r.y===0&&(n=!0)}),n&&Me()}e&&(F(Ge),ee(),T.play())};let B=Math.PI/2,h=B;const Se=()=>h=0,Te=t=>{h-=B;let e=t[1],n=[],r=[],a=!1;if(t.forEach(o=>{let u=o.initialX-e.x,z=o.initialY-e.y,y=e.x+Math.round(u*Math.cos(h)-z*Math.sin(h)),b=e.y+Math.round(u*Math.sin(h)+z*Math.cos(h));n.push(y),r.push(b),l.forEach(ae=>{ae.forEach(x=>{a=y-1===x.x&&b===x.y||y+1===x.x&&b===x.y?!0:a})}),(y<0||y>A-1)&&(a=!0)}),a)return O.play(),h+=B;t.forEach((o,u)=>{o.x=n[u],o.y=r[u]})};class s{constructor(e,n,r){k(this,"initialX");k(this,"initialY");this.x=e,this.y=n,this.color=r,this.initialX=e,this.initialY=n}draw(){i.save(),i.beginPath(),i.fillStyle=this.color,i.strokeStyle="gray",i.rect(this.x*P,this.y*P,P,P),i.fill(),i.stroke(),i.restore()}move(e){this.x+=e,this.initialX+=e}gravity(){this.y+=1,this.initialY+=1}colitionChecker(e=9999){let n=!1;return this.y===H-1&&(n=!0),l.forEach((r,a)=>{e!==a&&r.forEach(o=>{this.y+1===o.y&&this.x===o.x&&(n=!0)})}),n}}let l=[];const Re=["#00e4ff","#ff8d01","#ff8d01","#faff00","#9e0196","#f60001","#68b624"],De=()=>l=[],ee=()=>{let t=Math.round(Math.random()*6),e=Re[t],n=[];switch(t){case 0:{let r=Math.round(Math.random()*6),a=0;for(let o=0;o<4;o++)n.push(new s(r+o,a,e));break}case 1:{let r=Math.round(Math.random()*7),a=1;for(let o=0;o<3;o++)n.push(new s(r+o,a,e)),o||n.push(new s(r+o,a-1,e));break}case 2:{let r=Math.round(Math.random()*7),a=1;for(let o=0;o<3;o++)n.push(new s(r+o,a,e)),o===2&&n.push(new s(r+o,a-1,e));break}case 3:{let r=Math.round(Math.random()*8),a=0;for(let o=0;o<2;o++)n.push(new s(r+o,a,e)),n.push(new s(r+o,a+1,e));break}case 4:{let r=Math.round(Math.random()*7),a=1;for(let o=0;o<3;o++)n.push(new s(r+o,a,e)),o===1&&n.push(new s(r+o,a-1,e));break}case 5:{let r=Math.round(Math.random()*7),a=1;for(let o=0;o<3;o++)switch(o){case 0:n.push(new s(r+o,a,e));break;case 1:n.push(new s(r+o,a-1,e)),n.push(new s(r+o,a,e));break;case 2:n.push(new s(r+o,a-1,e));break}break}case 6:{let r=Math.round(Math.random()*7),a=1;for(let o=0;o<3;o++)switch(o){case 0:n.push(new s(r+o,a-1,e));break;case 1:n.push(new s(r+o,a-1,e)),n.push(new s(r+o,a,e));break;case 2:n.push(new s(r+o,a,e));break}break}}l.push(n),Se()};let U="00000",j="00000",v=0,te=20,K=!1,f=0,Ne=te*.5/H,Ge=1+te*.5,Xe=50;const Ye=()=>(K=!1,f=0),$e=()=>{localStorage.setItem("historicalPoints",U)},Be=()=>{v=Number(localStorage.getItem("historicalPoints"))|0,j=W(v)},W=t=>{let e=Math.floor(t),n=e.toString().length;return n===1?`0000${e}`:n===2?`000${e}`:n===3?`00${e}`:`${e}`},F=t=>{f+=t,U=W(f),f>v&&(K||E.play(),K=!0,v=f,j=W(v),$e())},Ke=()=>{i.save(),i.beginPath(),i.font='15px "Press Start 2P"',i.fillText(j,c*.02,d*.05),i.fillText(U,c*.77,d*.05),i.fill(),i.textAlign="center",i.fillText(`Level ${$}`,c/2,d*.05),i.fill(),i.restore()};let oe,w,i,Z=!1,ne=document.getElementById("app"),We=document.getElementById("loading");const re=()=>{w=Y[Math.floor(Math.random()*Y.length)],w.loop=!0,w.volume=.5,w.play(),ee(),M||Ee(),oe=setInterval(Oe,10)},Fe=()=>{re()},He=()=>window.addEventListener("keydown",()=>{Z||Fe(),Z=!0}),qe=async()=>{let t=new Image;t.src="../assets/backgroundImage.png",await t.decode(),ne.style.backgroundImage=`url(${t.src})`},Ue=async()=>{Be(),await xe(),await qe(),ne.removeChild(We),i=Pe(),He()};Ue();
