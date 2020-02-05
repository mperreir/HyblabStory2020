/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Wednesday, 5th February 2020 10:23:44 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View12Gratuit extends View {
    constructor(el) {
      super('view12gratuit', el || document.getElementById('view-container'));
      this.load()
        .then(() => {
          this.view = document.getElementById(this.viewName);
          this.linkElements();
        });
    }
  
    linkElements() {
      
    }
  }