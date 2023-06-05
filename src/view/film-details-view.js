import { createElement } from '../render.js';

const createFilmDetailsView = () => `
FilmDetailsView`;

export default class FilmDetailsView {
  getTemplate() {
    return createFilmDetailsView();
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
