/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class View8 extends View {
  constructor() {
    super('view8', document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
    document.getElementById('view-8-middle').style.backgroundImage='./assets/view8/tache.svg';
  }
}