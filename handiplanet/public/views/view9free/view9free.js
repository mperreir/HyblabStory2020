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
    this.nextButton = document.getElementById('view-9f-next-button');

    this.nextButton.addEventListener('click', () => {
      this.nextButton.style.transition = "opacity 0.2s";
      this.nextButton.style.opacity = "0";
      this.switchToPremium();
    });
  }

  async switchToPremium() {
    // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.right = '100%';

        // Création de la prochaine view
        const nextView = new View9Premium(tempDiv);
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