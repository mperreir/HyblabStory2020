/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 10:44:52 am
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View12Gratuit extends View {
  constructor (el) {
    super('view12gratuit', el)
  }

  linkElements () {
    showSplash();
    setBackgroundColor('#CB563E1A', 'red');
    // Background elements
    this.ellipse = document.getElementById('view-12-ellipse');
    this.persoImg = document.getElementById('view-12-perso');
    this.persoImg.src = window.colorPersoManager.getAsset().side;

    // Parallax for background elements
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      this.ellipse.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.1}px)`;
    });

    this.btNext = setOverlayButton('Voir l\'hôtel du Centre', false);
    this.btNext.addEventListener('click', ()=>{
      hideOverlayButton();
      this.switchToView12Premium();
    });
  }

  async switchToView12Premium(){
    transitionHorizontalInvert(this.view, View12Premium);
  }
}
