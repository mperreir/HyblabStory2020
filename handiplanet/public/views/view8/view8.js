/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View8 extends View {
  constructor(el) {
    super('view8', el || document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
    this.nextPremiumView = document.getElementById('view-8-circle-b');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Premium();
    });

    this.nextPremiumView = document.getElementById('view-8-circle-a');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Free();
    });
  }

  async switchToView9Premium() {
    transitionHorizontal(this.view, View9Premium);
  }

  async switchToView9Free() {
    transitionHorizontal(this.view, View9Free);
  }
}