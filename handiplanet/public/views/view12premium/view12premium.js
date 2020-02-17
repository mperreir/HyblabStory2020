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
    showSplash();
    setBackgroundColor('#80BEA31A');
    this.btNext = setOverlayButton('Quelques chiffres', true, 'sound/hover/chiffres.mp3');
    this.btNext.addEventListener('click', ()=>{
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
  }

  async switchToView13(){
    transitionHorizontal(this.view, View13);
  }

  play() {
    window.soundManager.play('sound/Choix_2_informations.mp3');
  }
}
