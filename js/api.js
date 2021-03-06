const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
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
      onError('Ошибка загрузки данных. Обновите страницу');
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
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData, sendData };
