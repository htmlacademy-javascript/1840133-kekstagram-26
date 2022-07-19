const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const uploadImgPreviewElement = document.querySelector('.img-upload__preview img');

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
  DEFAULT: 100
};

const radix = 10;

const onScaleClick = () => {
  scaleValueElement.value = `${Scale.DEFAULT}%`;
  minusButton.addEventListener('click', () => {
    let currentValue = parseInt(scaleValueElement.value, radix); // приведение строки к числу
    if (currentValue > Scale.MIN && currentValue <= Scale.MAX) {
      currentValue = currentValue - Scale.STEP;
      scaleValueElement.value = `${currentValue}%`;
      uploadImgPreviewElement.style.transform = `scale(${currentValue}%)`;
    }
  });

  plusButton.addEventListener('click', () => {
    let currentValue = parseInt(scaleValueElement.value, radix);
    if (currentValue >= Scale.MIN && currentValue < Scale.MAX) {
      currentValue = currentValue + Scale.STEP;
      scaleValueElement.value = `${currentValue}%`;
      uploadImgPreviewElement.style.transform = `scale(${currentValue}%)`;
    }
  });
};

export { onScaleClick };
