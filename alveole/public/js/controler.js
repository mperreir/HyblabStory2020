class SuperControler {

  constructor(modelSlide, modelFooter, modelHeader) {

    // Header
    var viewHeader = new ViewHeader();
    let updateHeader = new UpdateHeader(modelHeader, viewHeader.div);
    modelFooter.addObservers(updateHeader);

    // Right
    var viewRight = new ViewRight();

    // Footer
    var viewFooter = new ViewFooter();
    let updateFooter = new UpdateFooter(modelFooter, viewFooter.div);
    modelFooter.addObservers(updateFooter);



  }
}

class Update extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
  }
}

class UpdateFooter extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val == true) {
      this.composant.style.visibility = 'visible';
    } else if (val == false) {
      this.composant.style.visibility = 'hidden';
    } else {
      console.log("err : value not handled (updateFooter observer)");
    }
  }
}

class UpdateHeader extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val == true) {
      this.composant.style.visibility = 'visible';
    } else if (val == false) {
      this.composant.style.visibility = 'hidden';
    } else {
      console.log("err : value not handled (updateFooter observer)");
    }
  }
}
