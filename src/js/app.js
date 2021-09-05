import PopButton from './PopButton';

const popBtnContainers = document.querySelectorAll('#pop-button');

popBtnContainers.forEach((container) => {
  const popButton = new PopButton(container);
  popButton.bindToDOM();
});
