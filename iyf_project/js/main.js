// Testimonial slider logic
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.testimonial-slide');
  const leftBtn = document.querySelector('.testimonial-arrow.left');
  const rightBtn = document.querySelector('.testimonial-arrow.right');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
  }
  showSlide(current);

  leftBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  rightBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});
