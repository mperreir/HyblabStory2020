class SuperControler {

  constructor(modelSlides) {
    // Header
    let viewHeader = new ViewHeader();
    let updateHeader = new UpdateHeader(modelSlides, viewHeader.div);
    modelSlides.addObservers(updateHeader);

    // Footer
    var viewFooter = new ViewFooter();
    let updateFooter = new UpdateFooter(viewFooter.div);
    modelSlides.addObservers(updateFooter);

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
    let updateSlide1 = new UpdateSlide1();
    modelSlide1.addObservers(updateSlide1);

    // ModelSlide2
    let modelSlide2 = new ModelSlide2();
    let updateSlide2 = new UpdateSlide2(viewCenter.div);
    modelSlide2.addObservers(updateSlide2);

    // Mediator of slide model
    let mediatorSlide = new MediatorSlide(modelSlides, modelSlide1, modelSlide2, viewLeft, viewCenter, viewRight);
    modelSlides.addObservers(mediatorSlide);

    // Adding Listenners
    viewStupidButtons.next.addEventListener('click', function() {
      modelSlides.nextSlide();
    });
    viewStupidButtons.prev.addEventListener('click', function() {
      modelSlides.prevSlide();
    });
  }
}

class MediatorSlide extends Observer {

  constructor(modelSlide, modelSlide1, modelSlide2, viewLeft, viewCenter, viewRight) {
    super();
    this.modelSlide = modelSlide;
    this.modelSlide1 = modelSlide1;
    this.modelSlide2 = modelSlide2;

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

    if (val != 2) {
      this.modelSlide2.setValue(false);
    } else if (val == 2) {
      this.modelSlide2.setValue(true);
    }
  }
}

class UpdateFooter extends Observer {

  constructor(div, svg) {
    super();
    this.div = div;
    this.svg = svg;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val == 0 || val == observable.obj.length - 1) {
      this.div.style.visibility = 'hidden';
    } else if (val > 0 || val < observable.obj.length - 1) {
      this.div.style.visibility = 'visible';
      let titles = Object.values(observable.getFooterValues()).toString();
      document.getElementById('footer_titles').textContent = titles;
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



class UpdateSlide1 extends Observer {

  constructor() {
    super();
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

class UpdateSlide2 extends Observer {

  constructor(composant) {
    super();
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide2_micros');
      this.composant.appendChild(container);

      let micros = observable.loadMicros(container);

    } else if (val == false) {
       this.composant.querySelector("#slide2_micros").remove();
       observable.setDestroyed();
    }
  }
}
