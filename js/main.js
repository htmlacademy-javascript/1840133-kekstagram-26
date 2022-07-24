import {createUsersPhotos} from './miniatures.js';
import {uploadForm, setFileFormSubmit} from './form-uploading.js';
import { changeScale } from './scale.js';
import { resetEffects } from './effect.js';
import { getData } from './api.js';


uploadForm();
changeScale();
resetEffects();

getData((descriptionPictures) => {
  createUsersPhotos(descriptionPictures);
});

setFileFormSubmit();
