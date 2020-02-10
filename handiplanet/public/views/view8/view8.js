/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View8 extends View {
  static titre = 'Prendre contact';
  constructor(el) {
    super('view8', el || document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
    showSplash();
    this.nextPremiumView = document.getElementById('view-8-hotelb-container');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Premium();
    });

    this.nextPremiumView = document.getElementById('view-8-hotela-container');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Free();
    });

    this.persoImg = document.getElementById('view-8-perso');
    this.persoImg.src = window.colorPersoManager.getAsset().face;
  }

  async switchToView9Premium() {
    transitionHorizontal(this.view, View9Premium);
  }

  async switchToView9Free() {
    transitionHorizontal(this.view, View9Free);
  }

  play() {
    window.soundManager.play('sound/Question_contact.mp3');
  }
}