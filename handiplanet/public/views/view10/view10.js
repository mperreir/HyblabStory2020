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
    hideSplash();
    const nextButton = setOverlayButton('Retrouver Wendy', false, 'sound/hover/go_to_wendy.mp3');
    nextButton.addEventListener('click', () => {
      this.switchToContext();
    });
  }

  async switchToContext() {
    showContextView(this.view);
  }

  play() {
    window.soundManager.play('sound/Data_2.mp3');
  }
}