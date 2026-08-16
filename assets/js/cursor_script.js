const cursor = document.querySelector('.custom-cursor');
const finePointer = window.matchMedia('(pointer: fine)');
let animationFrame;
let pointerX = 0;
let pointerY = 0;

if (cursor) {
  const renderCursor = () => {
    cursor.style.transform = `translate(-50%, -50%) translate3d(${pointerX}px, ${pointerY}px, 0)`;
    animationFrame = undefined;
  };

  const moveCursor = (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(renderCursor);
    }
  };

  const interactiveElements = document.querySelectorAll('a, button, .interactive');
  const setHovered = () => cursor.classList.add('hovered');
  const clearHovered = () => cursor.classList.remove('hovered');

  const updateCursor = () => {
    const enabled = finePointer.matches;

    document.body.classList.toggle('cursor-active', enabled);
    window.removeEventListener('mousemove', moveCursor);
    interactiveElements.forEach((element) => {
      element.removeEventListener('mouseenter', setHovered);
      element.removeEventListener('mouseleave', clearHovered);
    });

    if (enabled) {
      window.addEventListener('mousemove', moveCursor);
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', setHovered);
        element.addEventListener('mouseleave', clearHovered);
      });
    } else {
      cursor.classList.remove('hovered');
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
      }
    }
  };

  finePointer.addEventListener('change', updateCursor);
  updateCursor();
}
