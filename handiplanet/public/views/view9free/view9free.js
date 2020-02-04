/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View9Free extends View {
  constructor() {
    super('view9free', document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
    this.nextButton = document.getElementById('view-9f-next-button');

    this.nextButton.addEventListener('click', () => {
      this.switchToPremium();
    });
  }

  async switchToPremium() {
    scrollPosition(1);
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
    setTimeout(() => {
      document.getElementById('view-container').innerHTML = '';
      document.getElementById('view-container').appendChild(nextView.view);
      this.view.remove();
    }, 1000);
  }
}