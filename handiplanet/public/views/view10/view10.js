/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 2:33:29 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View10 extends View {
  constructor(el) {
    super('view10', el || document.getElementById('view-container'));
  }

  linkElements() {
    const nextButton = document.getElementById('view-10-next-button');
    nextButton.addEventListener('click', () => {
      nextButton.style.transition = "opacity 0.2s";
      nextButton.style.opacity = "0";
      this.switchToContext();
    });
  }

  async switchToContext() {
    showContextView(this.view);
  }
}