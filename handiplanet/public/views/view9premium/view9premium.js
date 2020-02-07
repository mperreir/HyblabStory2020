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
    this.nextButton = document.getElementById('view-9p-next-button');
    this.nextButton.addEventListener('click', () => {
      this.nextButton.style.transition = "opacity 0.2s";
      this.nextButton.style.opacity = "0";
      this.switchToView10();
    });
  }

  async switchToView10() {
    transitionHorizontal(this.view, View10);
  }
}