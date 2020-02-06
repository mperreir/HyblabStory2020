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
      this.switchToContext();
    });
  }

  async switchToContext() {
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '100%';

    // Création de la prochaine view
    if (!window.contextView) {
      window.contextView = new Contexte(tempDiv);
    } else {
      tempDiv.appendChild(window.contextView.view);
    }
    
    // window.contextView = new Contexte(tempDiv);
    this.view.style.animation = 'scrollTransition 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
    tempDiv.style.animation = 'scrollTransition 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
    window.scrollBarController.setPosition(4);
    setTimeout(() => {
      document.getElementById('view-container').innerHTML = '';
      document.getElementById('view-container').appendChild(window.contextView.view);
      // this.view.remove();
    }, 1000);
  }
}