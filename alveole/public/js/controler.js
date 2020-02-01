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

    // ModelSlide0
    let modelIntroSlide = new ModelIntroSlide();
    let updateIntroSlide = new UpdateIntroSlide();
    modelIntroSlide.addObservers(updateIntroSlide);

    // ModelSlide1
    let modelSlide1 = new ModelSlide1();
    let updateSlide1 = new UpdateSlide1();
    modelSlide1.addObservers(updateSlide1);

    // ModelSlide2
    let modelSlide2 = new ModelSlide2();
    let updateSlide2 = new UpdateSlide2(viewCenter.div);
    modelSlide2.addObservers(updateSlide2);

    // ModelSlide3
    let modelSlide3 = new ModelSlide3();
    let updateSlide3 = new UpdateSlide3(viewCenter.div);
    modelSlide3.addObservers(updateSlide3);

    // ModelSlide4
    let modelSlide4 = new ModelSlide4();
    let updateSlide4 = new UpdateSlide4(viewCenter.div);
    modelSlide4.addObservers(updateSlide4);

    // ModelSlide5
    let modelSlide5 = new ModelSlide5();
    let updateSlide5 = new UpdateSlide5(viewCenter.div);
    modelSlide5.addObservers(updateSlide5);

    // ModelSlide6
    let modelSlide6 = new ModelSlide6();
    let updateSlide6 = new UpdateSlide6(viewCenter.div);
    modelSlide6.addObservers(updateSlide6);

    // ModelSlide7
    let modelSlide7 = new ModelSlide7();
    let updateSlide7 = new UpdateSlide7(viewCenter.div);
    modelSlide7.addObservers(updateSlide7);

    // ModelSlide8
    let modelSlide8 = new ModelSlide8();
    let updateSlide8 = new UpdateSlide8(viewCenter.div);
    modelSlide8.addObservers(updateSlide8);

    // ModelLastSlide
    let modelLastSlide = new ModelLastSlide();
    let updateLastSlide = new UpdateLastSlide();
    modelLastSlide.addObservers(updateLastSlide);

    // Mediator of slide model
    let mediatorSlide = new MediatorSlide(  modelIntroSlide,
                                            modelSlide1,
                                            modelSlide2,
                                            modelSlide3,
                                            modelSlide4,
                                            modelSlide5,
                                            modelSlide6,
                                            modelSlide7,
                                            modelSlide8,
                                            modelLastSlide
                                          );
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

  constructor(modelIntroSlide, modelSlide1, modelSlide2, modelSlide3, modelSlide4, modelSlide5, modelSlide6, modelSlide7, modelSlide8, modelLastSlide) {

    super();

    this.slides = {
      "0": modelIntroSlide,
      "1": modelSlide1,
      "2": modelSlide2,
      "3": modelSlide3,
      "4": modelSlide4,
      "5": modelSlide5,
      "6": modelSlide6,
      "7": modelSlide7,
      "8": modelSlide8,
      "9": modelLastSlide
    }
  }

  update(observable, object) {
    let val = observable.getValue();

    const entries = Object.entries(this.slides);

    for (const [i, model] of entries) {
      if (i != val) {
        model.setValue(false);
      } else {
        model.setValue(true);
      }
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

class UpdateIntroSlide extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

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

class UpdateSlide3 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateSlide4 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateSlide5 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateSlide6 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateSlide7 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateSlide8 extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}

class UpdateLastSlide extends Observer {

  constructor() {
    super();
  }

  update(observable, object) {

  }
}
