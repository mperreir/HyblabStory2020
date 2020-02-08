/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View9Premium extends View {
  constructor(el) {
    super('view9premium', el);

  }

  linkElements() {
    showSplash();
    setBackgroundColor('#80BEA31A');
    this.nextButton = setOverlayButton('Quelques chiffres', true);
    this.nextButton.addEventListener('click', () => {
      hideOverlayButton();
      this.switchToView10();
    });
  }

  async switchToView10() {
    transitionHorizontal(this.view, View10);
  }
}