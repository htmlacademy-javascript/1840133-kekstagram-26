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

const NAMES = [
  'Петр',
  'Владлен',
  'Гульчачак',
  'Рустем',
  'Илон',
  'Руслан',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Быть первым – необязательно быть лучшим',
  'Крутое фото!',
  'Не падай духом – ушибешься',
  'Все идет хорошо, только мимо',
  'Я не подарок, но сюрприз',
  'Ушел в себя и заблудился',
];

const AvatarIndex = {
  MIN: 1,
  MAX: 6,
};

const RangeLike = {
  MIN: 15,
  MAX: 200,
};

const RangeComment = {
  MIN: 1,
  MAX: 3,
};

const PHOTOS_COUNT = 25;

//Вспомогательная функция для получения случайного числа
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (id) => {
  const randomAvatarIndex = getRandomInteger(AvatarIndex.MIN, AvatarIndex.MAX);
  const imgAvatar = `img/avatar-${randomAvatarIndex}.svg`;
  return {
    id,
    avatar: imgAvatar,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const createPhotoDescription = (id) => {
  const randomLikesNumber = getRandomInteger(RangeLike.MIN, RangeLike.MAX);
  const randomCommentsNumber = getRandomInteger(RangeComment.MIN, RangeComment.MAX);
  const commentsList = Array.from({length: randomCommentsNumber}, (_, index) => createComment(index));
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: randomLikesNumber,
    comments: commentsList,
  };
};

const generatePhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(createPhotoDescription(i));
  }
  return photos;
};
(generatePhotos(PHOTOS_COUNT));
