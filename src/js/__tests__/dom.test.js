import PopButton from '../PopButton';

test('button should render self', () => {
  document.body.innerHTML = '<div id="pop-button" data-content="Click to toggle popover" data-popover-header="Popover title" data-popover-content="And here\'s some amazing content. It\'s very engaging. Right?"></div>';
  const container = document.querySelector('#pop-button');
  const popButton = new PopButton(container);
  popButton.bindToDOM();

  const content = 'Click to toggle popover';
  const popoverHeader = 'Popover title';
  const popoverContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

  expect(container.innerHTML).toEqual(PopButton.markup(content, popoverHeader, popoverContent));
});

test('button should show popover', () => {
  document.body.innerHTML = '<div id="pop-button"></div>';
  const container = document.querySelector('#pop-button');
  const popButton = new PopButton(container);
  popButton.bindToDOM();
  const popover = container.querySelector(PopButton.popoverSelector);
  const button = container.querySelector(PopButton.popButtonSelector);

  button.click();

  expect(popover.hidden).toBeFalsy();
});
