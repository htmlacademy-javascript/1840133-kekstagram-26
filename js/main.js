import {PHOTOS_COUNT, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';
import {uploadForm} from './form-uploading.js';
import { onScaleClick } from './scale.js';
import { resetEffects } from './effect.js';

const descriptionPictures = generatePhotos(PHOTOS_COUNT);

createUsersPhotos(descriptionPictures);
uploadForm();
onScaleClick();
resetEffects();
