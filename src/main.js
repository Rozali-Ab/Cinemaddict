import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';

import FilmsPresenter from './presenter/films-presenter.js';

import { render } from './render.js';

const header = document.querySelector('.header');
const body = document.querySelector('body');
const main = body.querySelector('.main');
const footerStatistics = document.querySelector('.footer__statistics');


const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), header);
render(new FilterView(), main);
render(new FooterStatisticsView(), footerStatistics);

filmsPresenter.init(main);
