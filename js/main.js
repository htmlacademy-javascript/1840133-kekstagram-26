import {PHOTOS_COUNT, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';
import {uploadForm} from './form-uploading.js';
const descriptionPictures = generatePhotos(PHOTOS_COUNT);

createUsersPhotos(descriptionPictures);
uploadForm();


