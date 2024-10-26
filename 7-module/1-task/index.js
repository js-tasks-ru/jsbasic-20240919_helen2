import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();    
    this.initScroll();            
    this.initEventListeners();    
  }

  render() {
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');

    const leftArrow = document.createElement('button');
    leftArrow.classList.add('ribbon__arrow', 'ribbon__arrow_left');
    leftArrow.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;
    ribbon.append(leftArrow);

    const ribbonInner = document.createElement('nav');
    ribbonInner.classList.add('ribbon__inner');
    this.ribbonInner = ribbonInner;

    for (let category of this.categories) {
      const categoryItem = document.createElement('a');
      categoryItem.classList.add('ribbon__item');
      categoryItem.href = '#';
      categoryItem.dataset.id = category.id;
      categoryItem.textContent = category.name;

      if (category.id === '') {
        categoryItem.classList.add('ribbon__item_active');
      }

      ribbonInner.append(categoryItem);
    }

    ribbon.append(ribbonInner);

    
    const rightArrow = document.createElement('button');
    rightArrow.classList.add('ribbon__arrow', 'ribbon__arrow_right', 'ribbon__arrow_visible');
    rightArrow.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;
    ribbon.append(rightArrow);

    return ribbon;
  }

  initScroll() {
    let leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    let rightArrow = this.elem.querySelector('.ribbon__arrow_right');

    const ribbonInner = this.ribbonInner;

    rightArrow.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });

    leftArrow.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });

   
    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        leftArrow.classList.remove('ribbon__arrow_visible');
      } else {
        leftArrow.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        rightArrow.classList.remove('ribbon__arrow_visible');
      } else {
        rightArrow.classList.add('ribbon__arrow_visible');
      }
    });
  }

  initEventListeners() {
    this.elem.addEventListener('click', (event) => {
      const target = event.target.closest('.ribbon__item');
      if (!target) return;

      event.preventDefault();

      const activeItem = this.elem.querySelector('.ribbon__item_active');
      if (activeItem) {
        activeItem.classList.remove('ribbon__item_active');
      }

      target.classList.add('ribbon__item_active');

      
      const customEvent = new CustomEvent('ribbon-select', {
        detail: target.dataset.id,
        bubbles: true
      });

      this.elem.dispatchEvent(customEvent);
    });
  }
}
