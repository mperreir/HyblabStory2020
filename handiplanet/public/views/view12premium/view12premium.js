/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 2:24:18 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View12Premium extends View {
  constructor(el) {
    super('view12premium', el);
  }

  linkElements () {
    console.log('Linking elements...');
    this.btNext = document.getElementById('view-12p-next-button');
    this.btNext.addEventListener('click', ()=>{
      this.btNext.style.transition = "opacity 0.2s";
      this.btNext.style.opacity = "0";
      this.switchToView13();
    });

    // Background elements
    this.arobase = document.getElementById('arobase');
    this.clock = document.getElementById('clock');
    this.facebook = document.getElementById('facebook');
    this.instagram = document.getElementById('instagram');
    this.mail = document.getElementById('mail');
    this.money = document.getElementById('money');
    this.youtube = document.getElementById('youtube');
    this.phone = document.getElementById('phone');
    this.localisation = document.getElementById('localisation');


    // Parallax for background elements
    /* const vc = document.getElementById('view-container');
    vc.addEventListener('mousemove', e => {
      var relX = e.pageX - vc.offsetLeft
      var relY = e.pageY - vc.offsetTop

      TweenMax.to(this.arobase, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.clock, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 20,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.facebook, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 20,
        ease: Power2.easeOut
      })
      TweenMax.to(this.instagram, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -25,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.mail, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 20,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.money, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -20,
        ease: Power2.easeOut
      })
      TweenMax.to(this.youtube, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.phone, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -20,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.localisation, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
    }) */
  }

  async switchToView13(){
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';

    // Création de la prochaine view
    const nextView = new View13(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransitionHorizontal 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    window.scrollBarController.setPosition(1);
    setTimeout(() => {
        tempDiv.replaceWith = nextView.view;
        this.view.parentNode.removeChild(this.view);
    }, 1000);
}
}
