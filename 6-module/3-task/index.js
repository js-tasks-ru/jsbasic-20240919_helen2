import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.render(); 
    this.initCarousel();
  }

  render() {
    let carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(slide => this.createSlide(slide)).join('')}
        </div>
      </div>
    `);

    return carousel;
  }

  
  createSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  
  initCarousel() {
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselInner = this.elem.querySelector('.carousel__inner');

    arrowLeft.style.display = 'none'; 

    
    arrowRight.addEventListener('click', () => {
      this.currentSlideIndex++;
      this.updateCarousel(carouselInner, arrowRight, arrowLeft);
    });

    
    arrowLeft.addEventListener('click', () => {
      this.currentSlideIndex--;
      this.updateCarousel(carouselInner, arrowRight, arrowLeft);
    });

  
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        let slideId = event.target.closest('.carousel__slide').dataset.id;
        let productAddEvent = new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true
        });
        this.elem.dispatchEvent(productAddEvent);
      }
    });
  }

  
  updateCarousel(carouselInner, arrowRight, arrowLeft) {
    const slideWidth = this.elem.querySelector('.carousel__slide').offsetWidth;
    carouselInner.style.transform = `translateX(-${this.currentSlideIndex * slideWidth}px)`;

  
    if (this.currentSlideIndex === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }
}
