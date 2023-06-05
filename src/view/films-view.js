import { createElement } from '../render.js';

const createFilmsView = () => `
filmsView`;

export default class FilmsView {
  getTemplate() {
    return createFilmsView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


