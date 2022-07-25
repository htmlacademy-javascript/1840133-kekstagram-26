import { createUsersPhotos } from './miniatures.js';
import { getRandomInteger } from './utils.js';
import { debounce } from './utils.js';

const RANDOM_PHOTOS_COUNT = 10;
const imgFiltersElement = document.querySelector('.img-filters');
const buttonDefaultElement = document.querySelector('#filter-default');
const buttonRandomElement = document.querySelector('#filter-random');
const buttonDiscussedElement = document.querySelector('#filter-discussed');

const removeAllPhotos = () => {
  const listPictureElements = document.querySelectorAll('.picture');
  listPictureElements.forEach((element) => {
    element.remove();
  });
};

const getRandomPhotos = () => getRandomInteger(-25, 25);

const getDiscussedPhotos = (a, b) =>  b.comments.length - a.comments.length;

let currentActiveButton = document.querySelector('.img-filters__button--active');

const renderWithDelay = debounce(createUsersPhotos);

const showFilters = (descriptionPictures) => {
  imgFiltersElement.classList.remove('img-filters--inactive');

  buttonDefaultElement.addEventListener('click', () => {
    currentActiveButton.classList.remove('img-filters__button--active');
    buttonDefaultElement.classList.add('img-filters__button--active');
    currentActiveButton = buttonDefaultElement;
    removeAllPhotos();
    renderWithDelay(descriptionPictures);
  });

  buttonRandomElement.addEventListener('click', () => {
    currentActiveButton.classList.remove('img-filters__button--active');
    buttonRandomElement.classList.add('img-filters__button--active');
    currentActiveButton = buttonRandomElement;
    removeAllPhotos();
    const randomPhotos = descriptionPictures.slice().sort(getRandomPhotos).slice(0, RANDOM_PHOTOS_COUNT);
    renderWithDelay(randomPhotos);
  });

  buttonDiscussedElement.addEventListener('click', () => {
    currentActiveButton.classList.remove('img-filters__button--active');
    buttonDiscussedElement.classList.add('img-filters__button--active');
    currentActiveButton = buttonDiscussedElement;
    removeAllPhotos();
    const discussedPhotos = descriptionPictures.slice().sort(getDiscussedPhotos);
    renderWithDelay(discussedPhotos);
  });
};

export { showFilters };
