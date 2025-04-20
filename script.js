const messages = [
    "Tu es adorable comme un mochi 🥺💕",
    "Ne l’oublie jamais : tu es incroyable 🌸",
    "Un nuage de douceur rien que pour toi ☁️✨",
    "Souris, tu es trop mignon·ne ! 😽",
    "Ta gentillesse illumine le monde 🌟"
  ];
  
  window.onload = () => {
    document.body.addEventListener('click', createHeart);
    const msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('random-message').innerText = msg;
  };
  
  function createHeart(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.innerText = '💖';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
  
  function purr() {
    alert("Miaou~ 😻 *ronronnements*");
  }
  
  function toggleKawaiiMode() {
    document.body.classList.toggle("kawaii-mode");
  }
  
  function toggleMusic() {
    const music = document.getElementById("bg-music");
    music.paused ? music.play() : music.pause();
  }
  