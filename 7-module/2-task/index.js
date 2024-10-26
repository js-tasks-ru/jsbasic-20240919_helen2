import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalElement = this._createModalElement();
    this.closeButton = this.modalElement.querySelector('.modal__close');
    this.overlay = this.modalElement.querySelector('.modal__overlay');
    this.body = document.body;

    this._addEventListeners();
  }

  _createModalElement() {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    modalElement.innerHTML = `
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">Вот сюда нужно добавлять заголовок</h3>
        </div>
        <div class="modal__body">A сюда нужно добавлять содержимое тела модального окна</div>
      </div>
    `;
    return modalElement;
  }

  open() {
    this.body.append(this.modalElement);
    this.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this._onKeyDown);
  }

  close() {
    this.modalElement.remove();
    this.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this._onKeyDown);
  }

  setTitle(title) {
    const titleElement = this.modalElement.querySelector('.modal__title');
    titleElement.textContent = title;
  }

  setBody(node) {
    const bodyElement = this.modalElement.querySelector('.modal__body');
    bodyElement.innerHTML = ''; 
    bodyElement.append(node);   
  }

  _addEventListeners() {
    this.closeButton.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
    this._onKeyDown = (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    }
  }
}
