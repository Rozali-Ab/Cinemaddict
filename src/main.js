import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';

import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

import { render } from './framework/render.js';
import { getUserStatus } from './utils/user.js';
import { generateFilter } from './mock/filter.js';

const body = document.querySelector('body');
const header = document.querySelector('.header');
const main = body.querySelector('.main');
const footerStatistics = document.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmsPresenter = new FilmsPresenter(main, filmsModel, commentsModel);

const userStatus = getUserStatus(filmsModel.get());
const filters = generateFilter(filmsModel.get());
const filmCount = filmsModel.get().length;

render(new HeaderProfileView(userStatus), header);
render(new FilterView(filters), main);
render(new FooterStatisticsView(filmCount), footerStatistics);

filmsPresenter.init();
