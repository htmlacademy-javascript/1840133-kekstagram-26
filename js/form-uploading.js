import { checkStringLength, isEscapeKey } from './utils.js';

const body = document.querySelector('body');
const uploadFileForm = document.querySelector('.img-upload__form');
const uploadImage = uploadFileForm.querySelector('#upload-file');
const imageEditingForm = uploadFileForm.querySelector('.img-upload__overlay');
const closeImageEditingForm = uploadFileForm.querySelector('#upload-cancel');
const textHashtags = uploadFileForm.querySelector('.text__hashtags');
const textDescription = uploadFileForm.querySelector('.text__description');

const HASHTAGS_COUNT = 5;
const DESCRIPTION_LENGTH = 140;

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;


const closeUploadForm = () => {
  imageEditingForm.classList.add('hidden');
  body.classList.remove('madal-open');
  document.addEventListener('keydown', onUploadFormEscKeydown);
  uploadImage.value = '';
};

function onUploadFormEscKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
}

const uploadForm = () => {
  uploadImage.addEventListener('change', () => {
    imageEditingForm.classList.remove('hidden');
    body.classList.add('madal-open');
  });
  document.addEventListener('keydown', onUploadFormEscKeydown);
};

closeImageEditingForm.addEventListener('click', () => {
  closeUploadForm();
});

textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', onUploadFormEscKeydown);
});

textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', onUploadFormEscKeydown);
});

textHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', onUploadFormEscKeydown);
});

textHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', onUploadFormEscKeydown);
});

const checkDescriptionLength = () => checkStringLength(textDescription.value, DESCRIPTION_LENGTH);

//Хэш-теги превращает в массив, удаляет пробелы.
const checkHashtags = () => {
  const getHashtags = textHashtags.value.split(' ');
  const result = getHashtags.filter(Boolean);
  return result;
};

//Проверяет элементы массива checkHastags(). checkHastags() передается параметром метода every и выполняется для каждого элемента массива.
const checkHashtagSymbols = () => checkHashtags().every((item) => re.test(item));

//Преобразует все хэш-теги в один регистр. Позволяет не использовать один и тот же хэш-тег.
const checkUniquenessHashtags = () => {
  const hashtags = checkHashtags().map((item) => item.toLowerCase());
  const uniqueHashtag = new Set(hashtags);
  return hashtags.length === uniqueHashtag.size;
};

//Предупреждает о более пяти хэш-тегов
const checkHastagsCount = () => checkHashtags().length < HASHTAGS_COUNT;

const pristine = new Pristine(uploadFileForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  succesClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'text__error'
});

pristine.addValidator(
  textDescription,
  checkDescriptionLength,
  `Максимальная длина комментария ${DESCRIPTION_LENGTH} символов.`
);

pristine.addValidator(
  textHashtags,
  checkUniquenessHashtags,
  'Хэш-теги не должны повторяться.'
);

pristine.addValidator(
  textHashtags,
  checkHastagsCount,
  `Можно указать не более ${HASHTAGS_COUNT} хэш-тегов.`
);

pristine.addValidator(
  textHashtags,
  checkHashtagSymbols,
  'Хэш-тег должен начинаться с символа #, содержать только буквы и числа. Хэш-тег не может состоять только из одного символа #. Максимальная длина одного хэш-тега 20 символов.'
);

uploadFileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(isValid) {
    uploadFileForm.submit();
  }
});

export { uploadForm };
