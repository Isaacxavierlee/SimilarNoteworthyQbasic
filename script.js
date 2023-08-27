document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function() {
    body.classList.toggle("light-mode");
  });
  themeToggle.addEventListener('click', toggleTheme);

  // Handle smooth scrolling for navigation links
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(navItem => {
    navItem.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-id');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

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
