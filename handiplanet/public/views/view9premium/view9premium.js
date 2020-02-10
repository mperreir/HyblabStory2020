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
    this.nextButton = setOverlayButton('Quelques chiffres', true, 'sound/hover/chiffres.mp3');
    this.nextButton.addEventListener('click', () => {
      this.switchToView10();
    });
  }

  async switchToView10() {
    transitionHorizontal(this.view, View10);
  }

  play() {
    window.soundManager.play('sound/Choix_2_contact.mp3');
  }
}