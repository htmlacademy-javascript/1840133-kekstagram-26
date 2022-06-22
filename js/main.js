import {PHOTOS_COUNT, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';

const descriptionPictures = generatePhotos(PHOTOS_COUNT);

createUsersPhotos(descriptionPictures);
