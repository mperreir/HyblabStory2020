/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View9Free extends View {
  constructor(el) {
    super('view9free', el);
  }

  linkElements() {
    this.nextButton = document.getElementById('view-9f-next-button');

    this.nextButton.addEventListener('click', () => {
      this.nextButton.style.transition = "opacity 0.2s";
      this.nextButton.style.opacity = "0";
      this.switchToPremium();
    });
  }

  async switchToPremium() {
    transitionHorizontalInvert(this.view, View9Premium);
  }
}