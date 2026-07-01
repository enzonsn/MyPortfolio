const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', (e) => {
  // Directly set the circle position to the mouse coordinates with no delay
  cursor.style.transform = `translate(-50%, -50%) translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// Optional: Keep the hover effect if you want it to expand over links
const interactiveElements = document.querySelectorAll('a, button, .interactive');
interactiveElements.forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});