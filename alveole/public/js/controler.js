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

    // Popup
    var viewModal = new ViewModal();

    // ModelPopup
    let modelPopup = new ModelPopup();
    // let updatePopup = new UpdatePopup(viewModal, modelSlides);
    // modelPopup.addObservers(updatePopup);

    // ModelSlide0
    let modelIntroSlide = new ModelIntroSlide();
    let updateIntroSlide = new UpdateIntroSlide();
    modelIntroSlide.addObservers(updateIntroSlide);

    // ModelSlide1
    let modelSlide1 = new ModelSlide1();
    let updateSlide1 = new UpdateSlide1(modelPopup);
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
    let mediatorSlide = new MediatorSlide(  modelSlides,
                                            modelIntroSlide,
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

    let mediatorModal = new MediatorModal(  modelSlides,
                                            modelIntroSlide,
                                            modelSlide1,
                                            modelSlide2,
                                            modelSlide3,
                                            modelSlide4,
                                            modelSlide5,
                                            modelSlide6,
                                            modelSlide7,
                                            modelSlide8,
                                            modelLastSlide,
                                            viewModal
                                          );
    modelPopup.addObservers(mediatorModal);

    // Adding Listenners
    viewStupidButtons.next.addEventListener('click', function() {
      modelSlides.nextSlide();
    });
    viewStupidButtons.prev.addEventListener('click', function() {
      modelSlides.prevSlide();
    });
    document.getElementById('button-next').addEventListener('click', function() {
      modelSlides.nextSlide();
      modelPopup.setValue(false);
    });
  }
}

class MediatorSlide extends Observer {

  constructor(modelSlides, modelIntroSlide, modelSlide1, modelSlide2, modelSlide3, modelSlide4, modelSlide5, modelSlide6, modelSlide7, modelSlide8, modelLastSlide, viewModal) {

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
    };

    this.loadText(this.slides);
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

  loadText(slides) {
    $.getJSON("data/text.json", function(data) {

      const entries = Object.entries(data);
      let count = 0;

      for (const [i, text] of entries) {
        slides[count].text = text;
        count++;
      }
    });
  }
}

class MediatorModal extends Observer {

  constructor(modelSlides, modelIntroSlide, modelSlide1, modelSlide2, modelSlide3, modelSlide4, modelSlide5, modelSlide6, modelSlide7, modelSlide8, modelLastSlide, viewModal) {

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
      };

      this.model = modelSlides;
      this.view = viewModal;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {
      let i = this.model.getValue();
      let choice = this.slides[i].getChoice();
      console.log(this.slides[i].text);

      this.view.title.innerHTML = this.slides[i].text["title"];
      this.view.mainText.innerHTML = this.slides[i].text["choices"][choice]['main'];
      this.view.subText.innerHTML = this.slides[i].text["choices"][choice]['sub'];

      this.view.div.style.visibility = "visible";
      this.view.div.style.opacity = 1;
    } else if (val == false) {
      this.view.div.style.visibility = "hidden";
      this.view.div.style.opacity = 0;
    } else {
      console.log("err : value not handled (mediatorModal controler)");
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

  constructor(modelPopup) {
    super();
    this.model = modelPopup;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {
      let hotel = observable.loadHotel();
      let studio = observable.loadStudio();
      let model = this.model;

      hotel.addEventListener('DOMLoaded', function() {
        document.getElementById('svg_hotel').addEventListener('mouseover', function() {
          hotel.play();
        });
        document.getElementById('svg_hotel').addEventListener('mouseout', function() {
          hotel.pause();
        });
        document.getElementById('svg_hotel').addEventListener('click', function() {
          observable.setChoice(0);
          model.setValue(true);
        });
      });
      studio.addEventListener('DOMLoaded', function() {
        document.getElementById('svg_studio').addEventListener('mouseover', function() {
          studio.play();
        });
        document.getElementById('svg_studio').addEventListener('mouseout', function() {
          studio.pause();
        });
        document.getElementById('svg_studio').addEventListener('click', function() {
          observable.setChoice(1);
          model.setValue(true);
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

  constructor(composant) {
    super();
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide3_mixtable');
      this.composant.appendChild(container);

      let micros = observable.loadMixTable(container);

    } else if (val == false) {
       this.composant.querySelector("#slide3_mixtable").remove();
       observable.setDestroyed();
    }
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

class UpdatePopup extends Observer {

  constructor(composant, modelSlides) {
    super();
    this.composant = composant;
    this.modelSlides = modelSlides;
  }

  update(observable, object) {

    let val = observable.getValue();

    if (val == true) {
      this.composant.div.style.visibility = "visible";
      this.composant.div.style.opacity = 1;
    } else if (val == false) {
      this.composant.div.style.visibility = "hidden";
      this.composant.div.style.opacity = 0;
    }
  }
}
