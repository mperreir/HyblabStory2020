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
    setBackgroundColor('#CB563E1A');
    // Background elements
    this.ellipse = document.getElementById('ellipse')

    // Parallax for background elements
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      this.ellipse.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.1}px)`;
    });

    this.btNext = document.getElementById('view-12g-next-button')
    this.btNext.addEventListener('click', ()=>{
      this.btNext.style.transition = "opacity 0.2s";
      this.btNext.style.opacity = "0";
      this.switchToView12Premium();
    });
  }

  async switchToView12Premium(){
    transitionHorizontalInvert(this.view, View12Premium);
  }
}
