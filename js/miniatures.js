const createUsersPhotos = (descriptionPictures, createFullSizePicture) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();

  descriptionPictures.forEach((descriptionPicture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = descriptionPicture.url;
    pictureElement.querySelector('.picture__comments').textContent = descriptionPicture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = descriptionPicture.likes;
    pictureElement.addEventListener('click', () => {
      createFullSizePicture(descriptionPicture);
    });
    picturesFragment.append(pictureElement);
  });
  picturesContainer.append(picturesFragment);
};

export {createUsersPhotos};
