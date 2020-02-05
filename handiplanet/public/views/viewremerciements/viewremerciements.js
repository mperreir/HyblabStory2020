/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class ViewThanks extends View {
  constructor(el) {
    super('viewremerciements', el || document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        // this.linkElements();
      });
  }

  linkElements() {
    this.createName('agr', 'Benoit', 'Frehel');
    this.createName('agr', 'Maéva', 'Pasquier');

    this.createName('audencia', 'Clément', 'Godet');
    this.createName('audencia', 'Jean', 'Pechère');

    this.createName('polytech', 'Eric', 'Bizet');
    this.createName('polytech', 'Alban', 'Lecuivre');
    this.createName('polytech', 'Pierre', 'Le Guen');
    this.createName('polytech', 'Pierre', 'Maupin');
    this.createName('polytech', 'Christophe', 'Sonneville');

    const hyblabImg = document.createElement('img');
    hyblabImg.src = 'assets/logo-hyblab.svg';
    hyblabImg.classList = 'sponsor';
    document.getElementById('view-thanks-agr').appendChild(hyblabImg);

    const omlImg = document.createElement('img');
    omlImg.src = 'assets/logo-oml.svg';
    omlImg.classList = 'sponsor';
    document.getElementById('view-thanks-audencia').appendChild(omlImg);

    const replayButton = document.getElementById('view-thanks-replay');
    replayButton.addEventListener('click', () => {
      this.switchToView1();
    });
  }

  createName(icon, firstname, lastname) {
    const article = document.createElement('article');
    article.classList = 'view-thanks-name';
    const iconDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = `assets/${icon}-icon.svg`;
    img.alt = `Logo ${icon}`;
    imgContainer.appendChild(img);
    iconDiv.appendChild(imgContainer);
    article.appendChild(iconDiv);

    const nameDiv = document.createElement('div');
    const titleName = document.createElement('h1');
    const bold = document.createElement('em');
    const firstnameElement = document.createTextNode(firstname + ' ');
    bold.appendChild(firstnameElement);
    const lastnameElement = document.createTextNode(lastname);
    titleName.appendChild(bold);
    titleName.appendChild(lastnameElement);
    nameDiv.appendChild(titleName);
    article.appendChild(nameDiv);

    const containerElement = document.getElementById(`view-thanks-${icon}`);
    containerElement.appendChild(article);
  }

  async switchToView1() {
    scrollPosition(1);
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = 'absolute';
    tempDiv.style.bottom = '100%';

    // Création de la prochaine view
    const nextView = new View1(tempDiv);
    await nextView.load();
    this.view.style.animation = 'scrollTransitionInvert 1s forwards';
    this.view.style.webkitAnimation = 'scrollTransitionInvert 1s forwards';
    tempDiv.style.animation = 'scrollTransitionInvert 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionInvert 1s forwards';
    setTimeout(() => {
      document.getElementById('view-container').innerHTML = '';
      document.getElementById('view-container').appendChild(nextView.view);
      this.view.remove();
    }, 1000);
  }
}