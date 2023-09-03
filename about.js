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


  // Add your existing event listeners here
  
});
