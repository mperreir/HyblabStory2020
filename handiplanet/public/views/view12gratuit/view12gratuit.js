/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 10:18:02 am
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View12Gratuit extends View {
  constructor (el) {
    super('view12gratuit', el || document.getElementById('view-container'))
    this.load().then(() => {
      this.view = document.getElementById(this.viewName)
      this.linkElements()
    })
  }

  linkElements () {
    // Background elements
    this.interrogation1 = document.getElementById('interrogation1')
    this.interrogation2 = document.getElementById('interrogation2')
    this.loupe = document.getElementById('loupe')
    this.ellipse = document.getElementById('ellipse')

    // Parallax for background elements
    const vc = document.getElementById('view-container')
    vc.addEventListener('mousemove', e => {
      var relX = e.pageX - vc.offsetLeft
      var relY = e.pageY - vc.offsetTop

      TweenMax.to(this.interrogation1, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.interrogation2, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.loupe, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.ellipse, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
    })
  }
}
