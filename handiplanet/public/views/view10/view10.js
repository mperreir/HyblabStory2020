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
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        // this.linkElements();
      });
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
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';

    // Création de la prochaine view
    const nextView = new Contexte(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransitionHorizontal 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    window.scrollBarController.setPosition(1);
    setTimeout(() => {
      tempDiv.replaceWith = nextView.view;
      this.view.parentNode.removeChild(this.view);
    }, 1000);
  }
}