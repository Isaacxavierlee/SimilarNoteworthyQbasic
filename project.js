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
  const controlsContainer = document.querySelector(".controls-container");
  const controls = document.querySelector(".controls");
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", function() {
    controls.classList.toggle("hidden");
  });
});
