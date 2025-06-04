// SIGA @eugustadev nas redes sociais


const text = " D͎E͎D͎I͎C͎A͎D͎O͎ ͎A͎O͎ ͎A͎M͎O͎R͎ ͎D͎A͎ ͎M͎I͎N͎H͎A͎ ͎V͎I͎D͎A͎ 💗";
const typedText = document.getElementById("typed-text");
const startButton = document.getElementById("start-button");
const music = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");

startButton.addEventListener("click", () => {
  music.play();
  startTyping();
  startButton.style.display = "none";
  generateHearts();
});

function startTyping() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        typedText.innerHTML += "<br>";
      } else {
        typedText.innerHTML += text.charAt(i);
      }
      i++;
    } else {
      clearInterval(interval);

      // Faz o texto sumir com animação
      setTimeout(() => {
        typedText.classList.add("fade-out");

        // Depois de sumir, mostra a imagem com fade-in
        setTimeout(() => {
          typedText.style.display = "none";
          showImage();
        }, 1000); // Tempo da animação de saída
      }, 1400); // Espera 3 segundos após digitação
    }
  }, 100);
}

function generateHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 15 + 25}px`;
    heart.innerHTML = "❤️ㅤㅤㅤㅤ🩷";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 168);
}

function showImage() {
  const img = document.createElement("img");
  img.src = "foto.png";
  img.alt = "Foto do casal";
  img.classList.add("fade-in-image");
  document.body.appendChild(img);
}
