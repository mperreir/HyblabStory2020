class SuperControler {

  constructor(modelSlide) {
    // Header
    let viewHeader = new ViewHeader();
    let updateHeader = new UpdateHeader(modelSlide, viewHeader.div);
    modelSlide.addObservers(updateHeader);

    // Footer
    var viewFooter = new ViewFooter();
    let updateFooter = new UpdateFooter(modelSlide, viewFooter.div);
    modelSlide.addObservers(updateFooter);

    // Center
    var viewCenter = new ViewCenter();

    // Right
    var viewRight = new ViewRight();

    // Left
    var viewLeft = new ViewLeft();

    // Stupid buttons
    var viewStupidButtons = new ViewStupidButtons();

    // ModelSlide1
    let modelSlide1 = new ModelSlide1();
    let updateSlide1 = new UpdateSlide1(modelSlide, viewCenter.div);
    modelSlide1.addObservers(updateSlide1);

    // Mediator of slide model
    let mediatorSlide = new MediatorSlide(modelSlide, modelSlide1, viewFooter, viewLeft, viewCenter, viewRight);
    modelSlide.addObservers(mediatorSlide);

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

class MediatorSlide extends Observer {

  constructor(modelSlide, modelSlide1, viewFooter, viewLeft, viewCenter, viewRight) {
    super();
    this.modelSlide = modelSlide;
    this.modelSlide1 = modelSlide1;
    this.viewFooter = viewFooter;
    this.viewCenter = viewCenter;
    this.viewLeft   = viewLeft  ;
    this.viewRight  = viewRight ;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val != 1) {
      this.modelSlide1.setValue(false);
    } else if (val == 1) {
      this.modelSlide1.setValue(true);
    }
  }
}

class UpdateSlide1 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val == true) {
      let hotel = observable.loadHotel();
      let studio = observable.loadStudio();
      hotel.addEventListener('DOMLoaded', function() {
        document.getElementById('svg_hotel').addEventListener('mouseover', function(){
          hotel.play();
        });
        document.getElementById('svg_hotel').addEventListener('mouseout', function(){
          hotel.pause();
        });
      });
      studio.addEventListener('DOMLoaded', function() {
        document.getElementById('svg_studio').addEventListener('mouseover', function(){
          studio.play();
        });
        document.getElementById('svg_studio').addEventListener('mouseout', function(){
          studio.pause();
        });
      })
    } else if (val == false) {
      observable.destroyHotel();
      observable.destroyStudio();
    }
  }
}
