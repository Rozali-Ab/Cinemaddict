import { createElement } from '../render.js';

const createFilmButtonMoreView = () => '<button class="films-list__show-more">Show more</button>';

export default class FilmButtonMoreView {
  getTemplate() {
    return createFilmButtonMoreView();
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