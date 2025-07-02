document.addEventListener('DOMContentLoaded', () => {
  const slidesEl = document.getElementById('slides');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slideEls = slidesEl.querySelectorAll('.slide');
  const windowEl = document.querySelector('.carousel-window');

  let slideWidth = 0;
  let maxOffset = 0;
  let offset = 0;

  function updateMeasurements() {
    const style = getComputedStyle(slideEls[0]);
    slideWidth = slideEls[0].offsetWidth + parseInt(style.marginRight, 10);
    const totalSlidesWidth = slideWidth * slideEls.length;
    const windowWidth = windowEl.clientWidth;
    maxOffset = Math.max(totalSlidesWidth - windowWidth, 0);
  }

  function updatePosition() {
    slidesEl.style.transform = `translateX(-${offset}px)`;
  }
prevBtn.addEventListener('click', () => {
  const newOffset = offset - slideWidth;
  if (newOffset < 0) return; // уже на первом слайде, не двигаемся

  offset = newOffset;
  updatePosition();
});

nextBtn.addEventListener('click', () => {
  const newOffset = offset + slideWidth;
  if (newOffset > maxOffset) return; // уже на последнем слайде, не двигаемся

  offset = newOffset;
  updatePosition();
});



  updateMeasurements();
  window.addEventListener('resize', () => {
    updateMeasurements();
    offset = Math.min(offset, maxOffset);
    updatePosition();
  });
});
