const hearts = document.querySelector('.hearts');

function createHeart(){
  const h = document.createElement('span');
  h.className = 'floating-heart';
  h.textContent = ['♥','♡','❤','✦'][Math.floor(Math.random()*4)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (12 + Math.random()*18) + 'px';
  h.style.animationDuration = (6 + Math.random()*6) + 's';
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),13000);
}
setInterval(createHeart, 900);

const target = new Date('2026-10-05T00:00:00+05:30').getTime();

function updateCountdown(){
  const now = Date.now();
  let diff = target - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(mins).padStart(2,'0');
  document.getElementById('seconds').textContent = String(secs).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);
