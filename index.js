document.addEventListener('DOMContentLoaded', () => {
      const slidesEl   = document.getElementById('slides');
      const prevBtn    = document.getElementById('prev');
      const nextBtn    = document.getElementById('next');
      const slideEls   = slidesEl.querySelectorAll('.slide');
      const windowEl   = document.querySelector('.carousel-window');

      const style      = getComputedStyle(slideEls[0]);
      const slideWidth = slideEls[0].clientWidth + parseInt(style.marginRight, 10);

      let offset = 0;
      const maxOffset = slideWidth * slideEls.length - windowEl.clientWidth;

      prevBtn.addEventListener('click', () => {
        offset = Math.max(offset - slideWidth, 0);
        slidesEl.style.transform = `translateX(-${offset}px)`;
      });

      nextBtn.addEventListener('click', () => {
        offset = Math.min(offset + slideWidth, maxOffset);
        slidesEl.style.transform = `translateX(-${offset}px)`;
      });
    });