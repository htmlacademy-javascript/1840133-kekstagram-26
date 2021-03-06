import { openPopup } from './popup.js';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

const defaultCommentsCount = 5;  //дефолтное количество комментов

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentsList = bigPictureContainer.querySelector('.social__comments');
const commentsLoaderButton = bigPictureContainer.querySelector('.comments-loader');
const renderedCommentsCountElement = document.querySelector('.rendered-comments-count');

let photoComments = [];
let renderedCommentsCount = 0; // количество отрисованных комментов
let commentsToRender = 0; // количество комментов к отрисовке по клику

const createComment = (comment) => {
  const liElement = document.createElement('li');
  liElement.classList.add('social__comment');

  const imgElement = document.createElement('img');
  imgElement.classList.add('social__picture');
  imgElement.src = comment.avatar;
  imgElement.alt = comment.name;
  imgElement.width = AVATAR_WIDTH;
  imgElement.height = AVATAR_HEIGHT;

  const pElement = document.createElement('p');
  pElement.classList.add('social__text');
  pElement.textContent = comment.message;

  liElement.append(imgElement);
  liElement.append(pElement);
  return liElement;
};

const onLoadCommentsButtonClick = () => {
  // Math.min выбирает наименьшее число между количеством комментов которое отрисовалось + количеством комментов,
  // которое ТЗ разрешает отрисовать и общим количеством комментариев
  commentsToRender = Math.min(renderedCommentsCount + defaultCommentsCount, photoComments.length);
  photoComments.slice(renderedCommentsCount, commentsToRender).forEach((comment) => {
    const liElement = createComment(comment);
    socialCommentsList.append(liElement);
  });

  renderedCommentsCount = commentsToRender; // следующий круг обновления отрисованных комментов

  // при клике на - Загрузить ещё - в разметку выводится число - кол-во отрисованных комментов
  renderedCommentsCountElement.textContent = renderedCommentsCount;

  if(renderedCommentsCount >= photoComments.length) {
    commentsLoaderButton.classList.add('hidden');
  }
};

const createFullSizePicture = (photoDescription) => {
  const totalCommentsCount = photoDescription.comments.length; // общее количество комментов
  photoComments = photoDescription.comments;
  openPopup();


  bigPictureContainer.querySelector('.big-picture__img img').src = photoDescription.url;
  bigPictureContainer.querySelector('.likes-count').textContent = photoDescription.likes;
  bigPictureContainer.querySelector('.comments-count').textContent = totalCommentsCount;

  socialCommentsList.innerHTML = '';

  commentsToRender = Math.min(defaultCommentsCount, photoComments.length);

  photoDescription.comments.slice(0, commentsToRender).forEach((comment) => {
    const liElement = createComment(comment);
    socialCommentsList.append(liElement);
  });

  if(totalCommentsCount <= defaultCommentsCount) {
    commentsLoaderButton.removeEventListener('click', onLoadCommentsButtonClick);

    // выводим в разметку число - кол-во отрисованных комментов
    renderedCommentsCountElement.textContent = commentsToRender;

    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');

    // обновляем кол-во отрисованных комментов
    renderedCommentsCount = commentsToRender;

    // при клике на - Загрузить ещё - в разметку выводится число - кол-во отрисованных комментов
    renderedCommentsCountElement.textContent = renderedCommentsCount;

    commentsLoaderButton.addEventListener('click', onLoadCommentsButtonClick);
  }
  bigPictureContainer.querySelector('.social__caption').textContent = photoDescription.description;
};

export {createFullSizePicture, onLoadCommentsButtonClick};
