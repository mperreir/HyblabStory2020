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

    this.bulle1 = document.getElementById('view9p-bulle1');
    this.bulle2 = document.getElementById('view9p-bulle2');
    this.bulle3 = document.getElementById('view9p-bulle3');
    this.bulle4 = document.getElementById('view9p-bulle4');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        this.bulle1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
        this.bulle2.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.1}px)`;
        this.bulle3.style.transform = `translateX(${x * 0.08}px) translateY(${y * 0.05}px)`;
        this.bulle4.style.transform = `translateX(${x * 0.05}px) translateY(${y * -0.1}px)`;
    });
  }

  async switchToView10() {
    transitionHorizontal(this.view, View10);
  }

  play() {
    window.soundManager.play('sound/Choix_2_contact.mp3');
  }
}