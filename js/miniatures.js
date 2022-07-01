import { createFullSizePicture } from './full-size-picture.js';

const createUsersPhotos = (descriptionPictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();

  descriptionPictures.forEach(({ url, comments, likes, description }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const descriptionPicture = { url, comments, likes, description };

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    pictureElement.addEventListener('click', () => {
      createFullSizePicture(descriptionPicture);
    });
    picturesFragment.append(pictureElement);
  });
  picturesContainer.append(picturesFragment);
};

export {createUsersPhotos};
