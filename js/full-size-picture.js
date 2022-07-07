import {openPopup} from './popup.js';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

const createFullSizePicture = (photoDescription) => {
  const bigPictureContainer = document.querySelector('.big-picture');
  openPopup();

  //Убирает блоки счетчика комментариев и загрузки новых комментариев
  const socialCommentCount = bigPictureContainer.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  bigPictureContainer.querySelector('.big-picture__img img').src = photoDescription.url;
  bigPictureContainer.querySelector('.likes-count').textContent = photoDescription.likes;
  bigPictureContainer.querySelector('.comments-count').textContent = photoDescription.comments.length;

  const socialCommentsList = bigPictureContainer.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';

  photoDescription.comments.forEach((comment) => {
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
    socialCommentsList.append(liElement);
  });

  bigPictureContainer.querySelector('.social__caption').textContent = photoDescription.description;
};

export {createFullSizePicture};

