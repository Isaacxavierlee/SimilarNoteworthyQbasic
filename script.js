document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function() {
    body.classList.toggle("light-mode");
  });
  themeToggle.addEventListener('click', toggleTheme);

  // Handle image container zoom and unzoom
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    container.addEventListener('click', function() {
      const imageContainer = this;
      imageContainer.classList.toggle('zoomed');
    });

    container.addEventListener('mouseenter', function() {
      const imageContainer = this;
      imageContainer.classList.add('zoomed');
    });

    container.addEventListener('mouseleave', function() {
      const imageContainer = this;
      imageContainer.classList.remove('zoomed');
    });
  });
});

const phrases = [
    "Welcome to my webpage.",
    "Hi, I'm Isaac Xavier.",
    "I am a Web Developer.",
    "Sharing my thoughts and ideas.",
    "Showcasing my projects."
];

const typewriter = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
    }

    const currentPhrase = phrases[phraseIndex];
    const typingDelay = 100; // Adjust typing speed here
    const erasingDelay = 50; // Adjust erasing speed here

    if (charIndex < currentPhrase.length) {
        typewriter.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, erasingDelay);
    }
}

function erase() {
    const currentPhrase = phrases[phraseIndex];
    const typingDelay = 1000; // Adjust typing speed here
    const erasingDelay = 100; // Adjust erasing speed here

    if (charIndex > 0) {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        phraseIndex++;
        setTimeout(type, typingDelay);
    }
}

type(); // Start the typewriter animation




document.addEventListener("DOMContentLoaded", function () {
    const controlsContainer = document.querySelector(".controls-container");
    const controls = document.querySelector(".controls");
    const themeBtn = document.querySelector(".theme-btn");

    themeBtn.addEventListener("click", function () {
        controls.classList.toggle("hidden");
    });
});
