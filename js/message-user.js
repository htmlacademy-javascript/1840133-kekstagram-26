import { isEscapeKey } from './utils.js';

const body = document.body;
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showMessageUser = (type) => {
  const typeMessage = {
    'success': successTemplate,
    'error': errorTemplate,
  };

  const template = typeMessage[type];
  const messageElement = template.cloneNode(true);
  const closeElement = messageElement.querySelector(`.${type}__button`);
  body.append(messageElement);

  const onMessageEscKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      closeMessageUser();
    }
  };

  const onOutsideClick = (evt) => {
    if (evt.target.closest(`.${type}__inner`)) {
      return;
    }
    closeMessageUser();
  };

  closeElement.addEventListener('click', () => {
    closeMessageUser();
  });

  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOutsideClick);

  function closeMessageUser() {
    messageElement.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
    document.removeEventListener('click', onOutsideClick);
  }
};

export { showMessageUser };
