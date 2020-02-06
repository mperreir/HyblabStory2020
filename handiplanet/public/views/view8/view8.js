/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View8 extends View {
  constructor(el) {
    super('view8', el || document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
    this.nextPremiumView = document.getElementById('view-8-circle-b');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Premium();
    });

    this.nextPremiumView = document.getElementById('view-8-circle-a');
    this.nextPremiumView.addEventListener('click', () => {
      this.switchToView9Free();
    });
  }

  async switchToView9Premium() {
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '100%';

    // Création de la prochaine view
    const nextView = new View9Premium(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransition 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
    tempDiv.style.animation = 'scrollTransition 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
    window.scrollBarController.setPosition(4);
    setTimeout(() => {
      document.getElementById('view-container').innerHTML = '';
      document.getElementById('view-container').appendChild(nextView.view);
      this.view.remove();
    }, 1000);
  }

  async switchToView9Free() {
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '100%';

    // Création de la prochaine view
    const nextView = new View9Free(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransition 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
    tempDiv.style.animation = 'scrollTransition 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
    window.scrollBarController.setPosition(4);
    setTimeout(() => {
      document.getElementById('view-container').innerHTML = '';
      document.getElementById('view-container').appendChild(nextView.view);
      this.view.remove();
    }, 1000);
  }
}