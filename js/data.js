import {getRandomInteger, getRandomElement} from './utils.js';

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
  MAX: 20,
};

const PHOTOS_COUNT = 25;

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

export {PHOTOS_COUNT, generatePhotos};
