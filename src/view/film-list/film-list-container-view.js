import { createElement } from '../../render.js';

const createFilmListContainerView = () => `
<section class="films"></section>`;

export default class FilmListContainerView {
  getTemplate() {
    return createFilmListContainerView();
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
