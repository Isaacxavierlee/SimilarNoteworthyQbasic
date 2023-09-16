document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  themeToggle.addEventListener("click", function() {
    body.classList.toggle("light-mode");
  });

  // Get all timeline title elements
  const timelineTitles = document.querySelectorAll('.timeline-title');

  // Attach click event listeners to each title
  timelineTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });

  // Get all control icons
  const controlIcons = document.querySelectorAll('.control-icon');
  const controls = document.querySelector(".controls");
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", function() {
    controls.classList.toggle("hidden");
  });

  controlIcons.forEach(icon => {
    const currentPath = window.location.pathname;
    const iconLink = icon.parentElement.getAttribute("href");

    if (currentPath.includes(iconLink)) {
      controlIcons.forEach(otherIcon => {
        otherIcon.parentElement.classList.remove('active-btn');
      });
      icon.parentElement.classList.add('active-btn');
    }
  });

// Array of image sources
const images = ["img/aboutme.jpg", "img/aboutme.jpg", "img/aboutme.jpg"]; // Add more image sources as needed
let currentIndex = 0;

// Function to change the image
function changeImage(offset) {
  currentIndex += offset;

  // Ensure the index stays within the bounds of the images array
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Update the image source
  const imageElement = document.getElementById("image");
  imageElement.src = images[currentIndex];
}

 

});
