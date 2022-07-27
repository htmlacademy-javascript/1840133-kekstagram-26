const uploadImgPreviewElement = document.querySelector('.img-upload__preview img');
const uploadFileForm = document.querySelector('.img-upload__form');
const effectLevelElement = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const EFFECTS = {
  none: {
    filter: 'none',
    unit: '',
    min: 0,
    max: 100,
    step: 1,
  },
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },
  heat: {
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
  }
};

const DEFAULT_EFFECT = EFFECTS.none;

let selectedEffect = DEFAULT_EFFECT;

const isDefault = () => selectedEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });

  uploadImgPreviewElement.className = '';
  sliderElement.classList.remove('hidden');
  sliderContainer.classList.remove('hidden');
  if (isDefault()) {
    sliderElement.classList.add('hidden');
    sliderContainer.classList.add('hidden');
    return;
  }
  uploadImgPreviewElement.classList.add(`effects__preview--${selectedEffect.name}`);
};

const onFormChange = (evt) => {
  if (evt.target.closest('.effects__radio')) {
    selectedEffect = EFFECTS[evt.target.value];
    updateSlider();
  }
};

const onSliderUpdate = () => {
  uploadImgPreviewElement.style.filter = 'none';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  uploadImgPreviewElement.style.filter = `${selectedEffect.filter}(${sliderValue}${selectedEffect.unit})`;
  effectLevelElement.value = sliderValue;
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

uploadFileForm.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
