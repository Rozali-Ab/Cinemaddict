import AbstractView from '../../framework/view/abstract-view.js';
import { createFilmCardInfoTemplate } from './film-card-info-template.js';
import { createFilmCardControlsTemplate } from './film-card-controls-template.js';

const createFilmCardView = ({filmInfo, comments}) =>
  `
  <article class="film-card">

    ${createFilmCardInfoTemplate(filmInfo, comments.length)}

    ${createFilmCardControlsTemplate()}

  </article>
  `;

export default class FilmCardView extends AbstractView {
  #film = null;

  constructor(film) {
    super();
    this.#film = film;
  }

  get template() {
    return createFilmCardView(this.#film);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('a').addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();

    this._callback.click();
  };
}

