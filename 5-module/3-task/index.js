function initCarousel() {

    let carouselInner = document.querySelector('.carousel__inner');
    let carouselArrows = document.querySelectorAll('.carousel__arrow');
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let arrowLeft = document.querySelector('.carousel__arrow_left');
  
    let currentSlide = 0;
    let totalSlides = 4; 
    let slideWidth = carouselInner.offsetWidth; 
  
    arrowLeft.style.display = 'none';
  
    arrowRight.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
      }
    });
  
    arrowLeft.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  
      carouselArrows.forEach(arrow => {
        if (currentSlide === 0) {
          arrowLeft.style.display = 'none';
          arrowRight.style.display = '';
        } else if (currentSlide === totalSlides - 1) {
          arrowRight.style.display = 'none';
          arrowLeft.style.display = '';
        } else {
          arrow.style.display = '';
        }
      });  
    }
}


  // ваш код...
}
