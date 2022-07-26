const ALERT_SHOW_TIME = 5000;
const TIMEOUT = 500;

const getRandomInteger = (min, max) => {
  if (min > max) {
    return 'Неверно переданы аргументы';
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const checkStringLength = (testLine, maxLength) => testLine.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = TIMEOUT) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, isEscapeKey, checkStringLength, showAlert, debounce};
