import {PHOTOS_COUNT, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';
import {createFullSizePicture} from './full-size-picture.js';

const descriptionPictures = generatePhotos(PHOTOS_COUNT);

createUsersPhotos(descriptionPictures, createFullSizePicture);
