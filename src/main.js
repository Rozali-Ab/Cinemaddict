import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';

import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

import { render } from './render.js';

const body = document.querySelector('body');
const header = document.querySelector('.header');
const main = body.querySelector('.main');
const footerStatistics = document.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmsPresenter = new FilmsPresenter(main, filmsModel, commentsModel);

render(new HeaderProfileView(), header);
render(new FilterView(), main);
render(new FooterStatisticsView(), footerStatistics);

filmsPresenter.init();
