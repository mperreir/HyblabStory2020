class SuperControler {

  constructor(modelSlides) {
    // Header
    let viewHeader = new ViewHeader();
    let updateHeader = new UpdateHeader(modelSlides, viewHeader.div);
    modelSlides.addObservers(updateHeader);

    // Footer
    var viewFooter = new ViewFooter();
    let updateFooter = new UpdateFooter(viewFooter);

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

    //Conclusion
    var viewCenterConclusion = new ViewCenterConclusion();

    // ModelPopup
    let modelPopup = new ModelPopup();

    // ModelSlide0
    let modelIntroSlide = new ModelIntroSlide();
    let updateIntroSlide = new UpdateIntroSlide();
    modelIntroSlide.addObservers(updateIntroSlide);

    // ModelSlide1
    let modelSlide1 = new ModelSlide1();
    let updateSlide1 = new UpdateSlide1(modelPopup, viewCenter);
    modelSlide1.addObservers(updateSlide1);

    // ModelSlide2
    let modelSlide2 = new ModelSlide2();
    let updateSlide2 = new UpdateSlide2(modelPopup, viewCenter);
    modelSlide2.addObservers(updateSlide2);

    // ModelSlide3
    let modelSlide3 = new ModelSlide3();
    let updateSlide3 = new UpdateSlide3(modelPopup, viewCenter);
    modelSlide3.addObservers(updateSlide3);

    // ModelSlide4
    let modelSlide4 = new ModelSlide4();
    let updateSlide4 = new UpdateSlide4(modelPopup, viewCenter);
    modelSlide4.addObservers(updateSlide4);

    // ModelSlide5
    let modelSlide5 = new ModelSlide5();
    let updateSlide5 = new UpdateSlide5(modelPopup, viewCenter);
    modelSlide5.addObservers(updateSlide5);

    // ModelSlide6
    let modelSlide6 = new ModelSlide6();
    let updateSlide6 = new UpdateSlide6(modelPopup, viewCenter);
    modelSlide6.addObservers(updateSlide6);

    // ModelSlide7
    let modelSlide7 = new ModelSlide7();
    let updateSlide7 = new UpdateSlide7(modelPopup, modelSlides, viewCenter);
    modelSlide7.addObservers(updateSlide7);

    // ModelSlide8
    let modelSlide8 = new ModelSlide8();
    let updateSlide8 = new UpdateSlide8(viewCenter);
    modelSlide8.addObservers(updateSlide8);

    // ModelLastSlide
    let modelLastSlide = new ModelLastSlide();
    let updateLastSlide = new UpdateLastSlide(viewCenterConclusion);
    modelLastSlide.addObservers(updateLastSlide);

    // Mediator of slide model
    this.mediatorSlide = new MediatorSlide(  modelSlides,
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
                                            viewCenter
                                          );
    modelSlides.addObservers(this.mediatorSlide);
    modelSlides.addObservers(updateFooter);

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

    let mediatorConclusion = new MediatorConclusion(  modelSlides,
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
                                            viewCenterConclusion
                                          );
    modelSlides.addObservers(mediatorConclusion);

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

  loadSlideMediator() {
    return this.mediatorSlide.loadText();
  }

}

class MediatorSlide extends Observer {

   constructor(modelSlides, modelIntroSlide, modelSlide1, modelSlide2, modelSlide3, modelSlide4, modelSlide5, modelSlide6, modelSlide7, modelSlide8, modelLastSlide, viewCenter) {

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

    // this.loadText();
    this.composant = viewCenter;
    this.modelSlides = modelSlides;
  }

  update(observable, object) {
    let val = observable.getValue();

    const entries = Object.entries(this.slides);

    for (const [i, model] of entries) {
      if (i != val) {
        model.setValue(false);
      } else if (i == val) {
        model.setValue(true);
        if (i > 0 && i < 9) {
          this.composant.question.innerHTML = model.text.question;
          this.composant.speech.innerHTML = model.text.speech;
          this.modelSlides.setFooterText(model.text.page);
        } else if (i == 0) {
          this.composant.question.innerHTML = "";
          this.composant.speech.innerHTML = "";
          this.modelSlides.setFooterText(model.text.page);
        }
      } else {
        console.log('err : unhandled value (mediator slide controler)');
      }
    }
  }

  loadText() {
    return fetchJSON("data/text.json").then( (data) => {
      const entries = Object.entries(data);
      let count = 0;
      for (const [i, text] of entries) {
        this.slides[count].text = text;
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

      this.view.title.innerHTML = this.slides[i].text["title"];
      console.log(choice);
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

class MediatorConclusion extends Observer {

  constructor(modelSlides, modelIntroSlide, modelSlide1, modelSlide2, modelSlide3, modelSlide4, modelSlide5, modelSlide6, modelSlide7, modelSlide8, modelLastSlide, viewCenterConclusion) {

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
    this.model = modelSlides;
    this.composant = viewCenterConclusion;
  }

  update(observable, object) {
    let val = observable.getValue();

    const entries = Object.entries(this.slides);

    for (const [i, model] of entries) {
      if (i != val) {
        model.setValue(false);
      }
      else if (i == val) {
        model.setValue(true);
        if (i == 9) {
          this.composant.theme.innerHTML = model.text["theme"];
          this.composant.center_speech1.innerHTML = model.text["header-speech"];
          this.composant.center_speech2.innerHTML = model.text["center-speech"];
          this.composant.footer_speech.innerHTML = model.text["footer-speech"];
        }
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

class UpdateFooter extends Observer {

  constructor(composant) {
    super();
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();
    if (val == observable.obj.length - 1) {
      this.composant.div.style.visibility = 'hidden';
    } else if (val >= 0 || val < observable.obj.length - 1) {
      this.composant.div.style.visibility = 'visible';
      this.composant.text.innerHTML = observable.getFooterText()["down"];
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
    if (val == observable.obj.length - 1) {
      this.composant.style.visibility = 'hidden';
    } else if (val >= 0 || val < observable.obj.length - 1) {
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

  constructor(modelPopup, composant) {
    super();
    this.model = modelPopup;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();


    if (val == true) {
      let hotelDiv = document.createElement('div');
      hotelDiv.setAttribute('id', 'hotel');
      hotelDiv.setAttribute('class', 'onClick');

      let hotelText = document.createElement('div');
      hotelText.setAttribute('class', 'slide1Label unselectable');

      let studioDiv = document.createElement('div');
      studioDiv.setAttribute('id', 'studio');
      studioDiv.setAttribute('class', 'onClick');

      let studioText = document.createElement('div');
      studioText.setAttribute('class', 'slide1Label unselectable');

      hotelDiv.appendChild(hotelText);
      studioDiv.appendChild(studioText);

      this.composant.div.appendChild(hotelDiv);
      this.composant.div.appendChild(studioDiv);

      let hotel = observable.loadHotel(hotelDiv);
      let studio = observable.loadStudio(studioDiv);
      let model = this.model;

      hotel.addEventListener('DOMLoaded', function() {
        document.getElementById('hotel').addEventListener('mouseover', function() {
          hotel.play();
        });
        document.getElementById('hotel').addEventListener('mouseout', function() {
          hotel.pause();
        });
        document.getElementById('hotel').addEventListener('click', function() {
          observable.setChoice(0);
          model.setValue(true);
        });
      });
      studio.addEventListener('DOMLoaded', function() {
        document.getElementById('studio').addEventListener('mouseover', function() {
          studio.play();
        });
        document.getElementById('studio').addEventListener('mouseout', function() {
          studio.pause();
        });
        document.getElementById('studio').addEventListener('click', function() {
          observable.setChoice(1);
          model.setValue(true);
        });
      });

      hotelText.innerHTML = observable.text.labels[1];
      studioText.innerHTML = observable.text.labels[2];

    } else if (val == false) {
      document.getElementById('hotel').remove();
      document.getElementById('studio').remove();
      observable.destroyHotel();
      observable.destroyStudio();
    }
  }
}

class UpdateSlide2 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide2_micros');
      this.composant.div.appendChild(container);


      let divs = [];

      for (let micro in observable.text['labels']) {
        let div = document.createElement('div');
        div.setAttribute('id', 'slide2_' + micro + '_micro');
        div.setAttribute('class', 'micro');
        container.appendChild(div);

        let text_micro = document.createElement('div');
        text_micro.setAttribute('class', 'slide2Label unselectable');
        text_micro.innerHTML = observable.text['labels'][micro];

        div.appendChild(text_micro);
        divs.push(div);
      }

      let plug = document.createElement('div');
      plug.setAttribute('id', 'slide2_plug');

      let text = document.createElement('div');
      text.setAttribute('id', 'slide2_plugLabel');
      text.setAttribute('class', 'unselectable');
      text.innerHTML = observable.text.plug;

      container.appendChild(plug);
      plug.appendChild(text);

      let micros = observable.loadMicros(plug, divs);

    } else if (val == false) {
       this.composant.div.querySelector("#slide2_micros").remove();
       observable.setDestroyed();
    }
  }
}

class UpdateSlide3 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide3_voix');
      this.composant.div.appendChild(container);

      let bouche1 = document.createElement('div');
      bouche1.setAttribute('id', 'bouche1');
      bouche1.setAttribute('class', 'onClick');
      let bouche1Text = document.createElement('div');
      bouche1Text.setAttribute('class', 'slide3Label unselectable');
      bouche1.appendChild(bouche1Text);

      let bouche2 = document.createElement('div');
      bouche2.setAttribute('id', 'bouche2');
      bouche2.setAttribute('class', 'onClick');
      let bouche2Text = document.createElement('div');
      bouche2Text.setAttribute('class', 'slide3Label unselectable');
      bouche2.appendChild(bouche2Text);

      container.appendChild(bouche1);
      container.appendChild(bouche2);

      bouche1Text.innerHTML = observable.text.labels[1];
      bouche2Text.innerHTML = observable.text.labels[2];

      observable.loadIcons(bouche1, bouche2);

      let model = this.model;

      bouche1.addEventListener('click', function() {
        observable.setChoice(1);
        model.setValue(true);
      });
      bouche2.addEventListener('click', function() {
        observable.setChoice(2);
        model.setValue(true);
      });

    } else if (val == false) {
       this.composant.div.querySelector("#slide3_voix").remove();
       observable.setDestroyed();
    }
  }
}

class UpdateSlide4 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide4_tournage');
      this.composant.div.appendChild(container);

      let div_valide = document.createElement('div');
      div_valide.setAttribute('id','slide4_valide');
      container.appendChild(div_valide);

      div_valide.addEventListener('click', () => {
        let checked = document.getElementsByClassName('slide4Label_checked');
        if (checked.length >= 1) {
          observable.setChoice();
          this.model.setValue(true);
        } else {
          console.log('err : expeted checked animation');
        }
      });

      let div_valide_text = document.createElement('div');
      div_valide_text.setAttribute('id','slide4_valide_text');
      div_valide_text.setAttribute('class', 'unselectable');
      container.appendChild(div_valide_text);
      div_valide_text.innerHTML = 'valider';

      let divs = {};

      let checkboxes = {};

      for (let i = 1; i < 5; i++) {
        let etape = document.createElement('div');
        etape.setAttribute('id', 'etape'+i);
        etape.setAttribute('class', 'slide4Animations');

        let div_checkbox = document.createElement('div');
        div_checkbox.setAttribute('class','slide4_checkbox');
        etape.appendChild(div_checkbox);

        let text = document.createElement('div');
        text.setAttribute('class', 'slide4Label unselectable');
        text.innerHTML = observable.text.labels[i];
        etape.appendChild(text);

        container.appendChild(etape);
        divs[i] = etape;
        checkboxes[i] = div_checkbox;
      };

      let animations = observable.load(container, divs, checkboxes, div_valide);

      Object.keys(animations).forEach( function(key) {
        animations[key].addEventListener('DOMLoaded', function() {
          document.getElementById(key).addEventListener('mouseover', function(){
            animations[key].play();
          });
          document.getElementById(key).addEventListener('mouseout', function(){
            animations[key].pause();
          });
        });
      });

    } else if (val == false) {
      observable.destroy();
      this.composant.div.querySelector("#slide4_tournage").remove();
    }
  }

}



class UpdateSlide5 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide5_derush');
      this.composant.div.appendChild(container);

      for (let i = 1; i < 4; i++) {
        let label = document.createElement('div');
        label.setAttribute('id', 'slide5_' + i + '_label');
        label.setAttribute('class', 'slide5Label unselectable');
        label.innerHTML = observable.text.labels[i];
        container.appendChild(label);
      }
    } else if (val == false) {
      this.composant.div.querySelector('#slide5_derush').remove();
    }
  }
}

class UpdateSlide6 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide6_mixtable');
      this.composant.div.appendChild(container);

      let micros = observable.loadMixTable(container);

    } else if (val == false) {
       this.composant.div.querySelector("#slide6_mixtable").remove();
       observable.setDestroyed();
    } else {
      console.log('err : unhandled slide 6 value');
    }
  }
}



class UpdateSlide7 extends Observer {

  constructor(model, slides, composant) {
    super();
    this.model = model;
    this.slides = slides;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide7_choice');
      this.composant.div.appendChild(container);

      let divs = {};

      for (let i = 1; i < 3; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'slide7_' + i + '_choice');
        let label = document.createElement('div');
        label.setAttribute('class', 'slide7Label unselectable');

        label.innerHTML = observable.text.labels[i];

        div.appendChild(label);
        container.appendChild(div);
        divs[i] = div;
      }

      let animations = observable.getAnimations(divs);

      animations[1].addEventListener('DOMLoaded', () => {
        document.getElementById('slide7_ondes').addEventListener('click', () => {
          this.slides.setValue(9);
        })
      });
      animations[2].addEventListener('DOMLoaded', () => {
        document.getElementById('slide7_casque').addEventListener('click', () => {
          this.model.setValue(true);
        })
      });

    } else if (val == false) {
      observable.setDestroyed();
      this.composant.div.querySelector('#slide7_choice').remove();
    } else {
      console.log('err : unhandled slide 7 value');
    }
  }
}

class UpdateSlide8 extends Observer {

  constructor(model, composant) {
    super();
    this.model = model;
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

    } else if (val == false) {

    } else {
      console.log('err : unhandled slide 8 value');
    }
  }
}

class UpdateLastSlide extends Observer {

  constructor(composant) {
    super();
    this.composant = composant;
  }

  update(observable, object) {

    let val = observable.getValue();

    if (val == true) {
      this.composant.div.style.visibility = "visible";
      observable.loadContent(this.composant.div);
      this.frame = document.createElement('iframe');
      this.frame.setAttribute('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/685582138&amp;color=807aa7');
      this.frame.setAttribute('id', 'soundcloud');
      this.composant.div.appendChild(this.frame);
    } else if (val == false) {
      this.composant.div.removeChild(this.frame);
      this.composant.div.style.visibility = "hidden";
    }
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
