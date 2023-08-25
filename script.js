document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");
  });

  // Handle smooth scrolling for navigation links
  // ... (existing smooth scrolling code)

  // Handle image container zoom and unzoom
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    container.addEventListener('click', function () {
      const imageContainer = this;

      // Toggle the zoomed class on click
      imageContainer.classList.toggle('zoomed');
    });

    container.addEventListener('mouseenter', function () {
      const imageContainer = this;

      // Add the zoomed class on hover
      imageContainer.classList.add('zoomed');
    });

    container.addEventListener('mouseleave', function () {
      const imageContainer = this;

      // Remove the zoomed class immediately on mouse leave
      imageContainer.classList.remove('zoomed');
    });
  });

  // Dropdown content
  // ... (existing dropdown content code)
});
