import { createElement } from '../../render.js';

const createFilmListView = () => `
FilmListView`;

export default class FilmListView {
  getTemplate() {
    return createFilmListView();
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


