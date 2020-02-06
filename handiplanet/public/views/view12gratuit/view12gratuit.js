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
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.right = '100%';

    // Création de la prochaine view
    const nextView = new View12Premium(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    window.scrollBarController.setPosition(1);
    setTimeout(() => {
        tempDiv.replaceWith = nextView.view;
        this.view.parentNode.removeChild(this.view);
    }, 1000);
  }
}
