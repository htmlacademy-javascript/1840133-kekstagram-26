import { showAlert } from './utils.js';

const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((descriptionPictures) => {
      onSuccess(descriptionPictures);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных. Обновите страницу');
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(API_URL, {
    method:'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
