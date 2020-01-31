class SuperControler {

  constructor(modelSlide) {

    // Header
    let viewHeader = new ViewHeader();
    let updateHeader = new UpdateHeader(modelSlide, viewHeader.div);
    modelSlide.addObservers(updateHeader);

    // Right
    var viewRight = new ViewRight();

    // Stupid buttons
    var viewStupidButtons = new ViewStupidButtons();

    // Footer
    var viewFooter = new ViewFooter();
    let updateFooter = new UpdateFooter(modelSlide, viewFooter.div);
    modelSlide.addObservers(updateFooter);

    // Adding Listenners
    viewStupidButtons.next.addEventListener('click', function() {
      modelSlide.nextSlide();
    });
    viewStupidButtons.prev.addEventListener('click', function() {
      modelSlide.prevSlide();
    });
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
    let val = this.model.getValue();
    if (val == 0 || val == observable.obj.length - 1) {
      this.composant.style.visibility = 'hidden';
    } else if (val > 0 || val < observable.obj.length - 1) {
      this.composant.style.visibility = 'visible';
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
    if (val == 0 || val == observable.obj.length - 1) {
      this.composant.style.visibility = 'hidden';
    } else if (val > 0 || val < observable.obj.length - 1) {
      this.composant.style.visibility = 'visible';
    } else {
      console.log("err : value not handled (updateFooter observer)");
    }
  }
}
