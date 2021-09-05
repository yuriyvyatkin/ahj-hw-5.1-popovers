export default class PopButton {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static markup(content, popoverHeader, popoverContent) {
    return `
      <button type="submit" class="pop-button">
        ${content}
        <div class="popover" hidden="">
          <div class="arrow"></div>
          <h3 class="popover-header">${popoverHeader}</h3>
          <div class="popover-body">${popoverContent}</div>
        </div>
      </button>
    `;
  }

  static get popButtonSelector() {
    return '.pop-button';
  }

  static get popoverSelector() {
    return '.popover';
  }

  bindToDOM() {
    const { content, popoverHeader, popoverContent } = this.parentEl.dataset;

    this.parentEl.innerHTML = this.constructor.markup(
      content,
      popoverHeader,
      popoverContent,
    );

    const button = this.parentEl.querySelector(this.constructor.popButtonSelector);

    button.addEventListener('click', (event) => {
      const { currentTarget } = event;
      const popover = currentTarget.querySelector('.popover');

      if (popover.hidden) {
        const arrow = currentTarget.querySelector('.arrow');
        popover.hidden = false;
        arrow.style.left = `${popover.offsetWidth / 2 - arrow.offsetWidth / 2}px`;
        popover.style.top = `${0 - arrow.offsetHeight - popover.offsetHeight}px`;
        popover.style.left = `${currentTarget.offsetWidth / 2 - popover.offsetWidth / 2}px`;
      } else {
        popover.hidden = true;
      }
    });
  }
}
