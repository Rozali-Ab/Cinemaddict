import { createElement } from '../render.js';

const createFilmButtonMoreView = () => '<button class="films-list__show-more">Show more</button>';

export default class FilmButtonMoreView {
  #element = null;

  get template() {
    return createFilmButtonMoreView();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
