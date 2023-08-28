document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function() {
    body.classList.toggle("light-mode");
  });
  themeToggle.addEventListener('click', toggleTheme);

// Get all timeline title elements
const timelineTitles = document.querySelectorAll('.timeline-title');

// Attach click event listeners to each title
timelineTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Toggle the display of the content when clicked
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});














  
});