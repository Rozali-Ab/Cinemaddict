import { createElement } from '../render.js';

const createFooterStatisticsView = () => '<p>130 291 movies inside</p>';

export default class FooterStatisticsView {
  getTemplate() {
    return createFooterStatisticsView();
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


