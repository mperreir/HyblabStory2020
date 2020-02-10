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
    showSplash();
    setBackgroundColor('#CB563E1A', 'red');
    this.nextButton = setOverlayButton('Voir l\'hôtel du Centre', false);

    this.nextButton.addEventListener('click', () => {
      this.switchToPremium();
    });
  }

  async switchToPremium() {
    transitionHorizontalInvert(this.view, View9Premium);
  }

  play() {
    window.soundManager.play('sound/Choix_1_contact.mp3');
  }
}