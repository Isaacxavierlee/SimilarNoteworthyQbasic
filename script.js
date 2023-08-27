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

    // Mouse-based interaction
    container.addEventListener('mouseenter', function() {
      const imageContainer = this;
      imageContainer.classList.add('zoomed');
    });

    container.addEventListener('mouseleave', function() {
      const imageContainer = this;
      imageContainer.classList.remove('zoomed');
    });

    // Touch-based interaction
    let initialTouchPosition = null;
    container.addEventListener('touchstart', function(event) {
      initialTouchPosition = event.touches[0].clientX;
    });

    container.addEventListener('touchmove', function(event) {
      if (!initialTouchPosition) return;

      const currentTouchPosition = event.touches[0].clientX;
      const touchDelta = currentTouchPosition - initialTouchPosition;

      if (Math.abs(touchDelta) > 30) {
        const imageContainer = this;
        imageContainer.classList.toggle('zoomed');
        initialTouchPosition = null;
      }
    });

    container.addEventListener('touchend', function() {
      initialTouchPosition = null;
    });
  });
});
