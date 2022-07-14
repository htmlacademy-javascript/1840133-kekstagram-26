const getRandomInteger = (min, max) => {
  if (min > max) {
    return 'Неверно переданы аргументы';
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
getRandomInteger(0, 6);

const checkStringLength = (testLine, maxLength) => testLine.length <= maxLength;
checkStringLength('Вау, классная фотка! Это где?', 100);

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomElement, isEscapeKey, checkStringLength};

