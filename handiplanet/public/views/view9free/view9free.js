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
    this.nextButton = setOverlayButton('Voir l\'hôtel du Centre', false, 'sound/hover/voir_hotel_centre.mp3');

    this.nextButton.addEventListener('click', () => {
      this.switchToPremium();
    });

    this.bulle1 = document.getElementById('view9f-bulle1');
    this.bulle2 = document.getElementById('view9f-bulle2');
    this.bulle3 = document.getElementById('view9f-bulle3');
    this.bulle4 = document.getElementById('view9f-bulle4');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        this.bulle1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
        this.bulle2.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.1}px)`;
        this.bulle3.style.transform = `translateX(${x * 0.08}px) translateY(${y * 0.05}px)`;
        this.bulle4.style.transform = `translateX(${x * 0.05}px) translateY(${y * -0.1}px)`;
    });
  }

  async switchToPremium() {
    transitionHorizontalInvert(this.view, View9Premium);
  }

  play() {
    window.soundManager.play('sound/Choix_1_contact.mp3');
  }
}