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

  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-id');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const navLinks = document.querySelectorAll(".nav-link");

  // Add a click event listener to each nav-link
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      // Get the target URL from the href attribute of the clicked nav-link
      const targetUrl = navLink.getAttribute("href");
      
      // Navigate to the target URL
      window.location.href = targetUrl;
    });
  });

  // Dropdown content
  // ... (existing dropdown content code)

  // Add this script to trigger the animation

const nameElement = document.querySelector('.name');

setTimeout(() => {
  nameElement.classList.add('show');
}, 500);


  
  
});
