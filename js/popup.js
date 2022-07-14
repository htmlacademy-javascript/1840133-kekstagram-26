import { isEscapeKey } from './utils.js';

const bigPictureContainer = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closePopupButton = bigPictureContainer.querySelector('.big-picture__cancel');

const closePopup = () => {
  body.classList.remove('modal-open');
  bigPictureContainer.classList.add('hidden');
  document.removeEventListener('keydown', onEscKewdown);
  closePopupButton.removeEventListener('click', onCloseButtonClick);
};

const openPopup = () => {
  body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  document.addEventListener('keydown', onEscKewdown);
  closePopupButton.addEventListener('click', onCloseButtonClick);
};

function onEscKewdown (evt) {
  if(isEscapeKey(evt)) {
    closePopup();
  }
}

function onCloseButtonClick () {
  closePopup();
}

export {openPopup, closePopup, onEscKewdown};
