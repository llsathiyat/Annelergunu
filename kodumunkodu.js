document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  const myName = document.querySelector(".my-name");

  setTimeout(() => {
    flower.style.display = "inherit";
    word.style.display = "none";
    
    // Çiçek göründüğünde "Created by İbrahim Yücetepe" yazısını gizle
    if (myName) {
      myName.style.display = "none";
    }
  }, 4000); // 4000 ms süre (4 saniye)
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);

// Mobil cihazlar için düzenlemeler
function adjustForMobile() {
  if (window.innerWidth <= 768) {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.style.fontSize = window.innerWidth <= 480 ? "2rem" : "2.5rem";
    }
  }
}

window.addEventListener("resize", adjustForMobile);
adjustForMobile();