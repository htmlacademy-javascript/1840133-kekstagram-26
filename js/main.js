const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
getRandomInteger(0, 6);

const checkStringLength = (testLine, maxLength) => testLine.length <= maxLength;
checkStringLength('Вау, классная фотка! Это где?', 100);
