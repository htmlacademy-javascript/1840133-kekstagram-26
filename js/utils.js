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

//Вспомогательная функция для получения случайного числа
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger};
export {getRandomElement};
