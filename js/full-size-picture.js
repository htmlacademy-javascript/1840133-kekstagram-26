const createFullSizePicture = (photoDescription) => {
  const bigPictureContainer = document.querySelector('.big-picture');
  bigPictureContainer.classList.remove('hidden');

  const body = document.querySelector('body');
  body.classList.add('modal-open');

  const closePopupButton = bigPictureContainer.querySelector('.big-picture__cancel');
  closePopupButton.addEventListener('click', () => {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  body.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      bigPictureContainer.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

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
    imgElement.width = 35;
    imgElement.height = 35;
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

