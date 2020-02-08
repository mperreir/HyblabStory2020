/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Saturday, 8th February 2020 8:56:00 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View14 extends View {
  constructor (el) {
    super('view14', el)
    super.load();
  }

  linkElements () {
    showSplash();
    setBackgroundColor('#CB563E1A', 'red');
    // Background elements
    this.ellipse = document.getElementById('view-14-ellipse');
    this.cercle1 = document.getElementById('view14-cercle-1');
    this.cercle2 = document.getElementById('view14-cercle-2');
    this.cercle3 = document.getElementById('view14-cercle-3');
    this.cercle4 = document.getElementById('view14-cercle-4');

    this.persoImg = document.getElementById('view-14-perso');
    this.persoImg.src = window.colorPersoManager.getAsset().face;

    // Parallax for background elements
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      this.ellipse.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.1}px)`;
      this.cercle1.style.transform = `translateX(${x * 0.1}px) translateY(${y * -0.1}px)`;
      this.cercle2.style.transform = `translateX(${x * -0.1}px) translateY(${y * 0.1}px)`;
      this.cercle3.style.transform = `translateX(${x * 0.1}px) translateY(${y * -0.1}px)`;
      this.cercle4.style.transform = `translateX(${x * 0.1}px) translateY(${y * 0.1}px)`;

    });

    this.btNext = setOverlayButton('Regardons pourquoi ...', false);
    this.btNext.addEventListener('click', ()=>{
      hideOverlayButton();
      this.switchToComparatif();
    });
  }

  async switchToComparatif(){
    transitionHorizontal(this.view, Comparatif);
  }
}
