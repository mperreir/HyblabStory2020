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
    showSplash();
    this.nextPremiumView = document.getElementById('view-8-hotelb-container');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Premium();
    });

    this.nextFreeView = document.getElementById('view-8-hotela-container');
    this.nextFreeView.addEventListener('click', () => {
      this.switchToView9Free();
    });

    this.nextFreeView.addEventListener('mouseenter', () => {
      window.soundManager.play('sound/hover/hotel_chateau.mp3');
    });
    this.nextPremiumView.addEventListener('mouseenter', () => {
      window.soundManager.play('sound/hover/hotel_centre.mp3');
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

  deactivate() {
    this.nextFreeView.remove();
    this.nextPremiumView.remove();
  }
}

View8.titre = 'Prendre contact';