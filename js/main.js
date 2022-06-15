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

const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;
const MIN_RANGE_LIKES = 15;
const MAX_RANGE_LIKES = 200;
const MIN_RANGE_COMMENTS = 1;
const MAX_RANGE_COMMENTS = 3;
const PHOTOS_DESCRIPTIONS = 25;

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (id) => {
  const randomAvatarIndex = getRandomInteger(MIN_AVATAR_INDEX, MAX_AVATAR_INDEX);
  const imgAvatar = `img/avatar-${randomAvatarIndex}.svg`;
  return {
    id: id,
    avatar: imgAvatar,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const createPhotoDescription = (id) => {
  const randomLikesNumber = getRandomInteger(MIN_RANGE_LIKES, MAX_RANGE_LIKES);
  const randomCommentsNumber = getRandomInteger(MIN_RANGE_COMMENTS, MAX_RANGE_COMMENTS);
  const commentsList = Array.from({length: randomCommentsNumber}, (_, index) => createComment(index));
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Крутое фото!',
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
