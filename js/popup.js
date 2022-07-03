import { isEscapeKey } from './utils.js';

const bigPictureContainer = document.querySelector('.big-picture');
const body = document.querySelector('body');

const closePopup = () => {
  body.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');
  document.removeEventListener('keydown', handleEscClosePopup);
};

const openPopup = () => {
  body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  document.addEventListener('keydown', handleEscClosePopup);
};

function handleEscClosePopup (evt) {
  if(isEscapeKey(evt)) {
    closePopup();
  }
}

export {closePopup, openPopup};
