class SuperControler {

  constructor(modelSlides) {
    // Header
    let viewHeader = new ViewHeader();

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
    //var viewStupidButtons = new ViewStupidButtons();

    // Popup
    var viewModal = new ViewModal();

    //Conclusion
    var viewModalConclusion = new ViewModalConclusion();

    // ModelPopup
    let modelPopup = new ModelPopup();

    // ModelSlide0
    let modelIntroSlide = new ModelIntroSlide();
    let updateIntroSlide = new UpdateIntroSlide(modelPopup, viewCenter, modelSlides);
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
    let updateSlide6 = new UpdateSlide6(modelPopup, viewCenter, modelSlides);
    modelSlide6.addObservers(updateSlide6);

    // ModelSlide7
    let modelSlide7 = new ModelSlide7();
    let updateSlide7 = new UpdateSlide7(modelPopup, modelSlides, viewCenter);
    modelSlide7.addObservers(updateSlide7);

    // ModelSlide8
    let modelSlide8 = new ModelSlide8();
    let updateSlide8 = new UpdateSlide8(modelPopup, viewCenter);
    modelSlide8.addObservers(updateSlide8);

    // ModelLastSlide
    let modelLastSlide = new ModelLastSlide();
    let updateLastSlide = new UpdateLastSlide(viewCenter);
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

    // let mediatorConclusion = new MediatorConclusion(  modelSlides,
    //                                         modelIntroSlide,
    //                                         modelSlide1,
    //                                         modelSlide2,
    //                                         modelSlide3,
    //                                         modelSlide4,
    //                                         modelSlide5,
    //                                         modelSlide6,
    //                                         modelSlide7,
    //                                         modelSlide8,
    //                                         modelLastSlide,
    //                                         viewCenterConclusion
    //                                       );
    // modelSlides.addObservers(mediatorConclusion);

    // Adding Listenners
    /*
    viewStupidButtons.next.addEventListener('click', function() {
      modelSlides.nextSlide();
    });
    viewStupidButtons.prev.addEventListener('click', function() {
      modelSlides.prevSlide();
    });
    */
    document.getElementById('button-next').addEventListener('click', function() {
      let val = modelSlides.getValue();

      if (val == 7) {
        let choice = modelSlide7.getChoice();
        if (choice == 1) {
          modelSlides.setValue(9);
        } else {
          modelSlides.nextSlide();
        }
      } else {
        modelSlides.nextSlide();
      }
      modelPopup.setValue(false);
    });

    Amplitude.init({
        songs:[
        {
          "url":"sons/son-intro.mp3"
        },
        {
          "url":"sons/son lieu - studio.wav"
        },
          {
          "url":"sons/Son lieu-hôtel.wav"
        },
        {
          "url":"sons/VOIX_AMATEUR.mp3",
        },
        {
          "url":"sons/voix professionnelle.wav",
        },
        ],
        continue_next:false,
        volume:50,
        'callbacks':{
          'song_repeated':function(){
            console.log('repeat')
          }
        }
    });
    Amplitude.setVolume(30);
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
        } else if (i == 9) {
          this.composant.question.innerHTML = "";
          this.composant.speech.innerHTML = "";
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
      console.log(choice);

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

  constructor(composant) {
    super();
    this.composant = composant;
  }

  update(observable, object) {
    let val = observable.getValue();
    console.log(val);
    if (val == observable.obj.length - 1) {
      this.composant.div.style.visibility = 'hidden';
    } else if (val > 0 && val < observable.obj.length - 1) {
      this.composant.div.style.visibility = 'visible';
      this.composant.text.innerHTML = observable.getFooterText()["down"];
      this.composant.roue.play();
      setTimeout(() => {this.composant.roue.pause();}, 1000);
    } else {
      console.log("err : value not handled (updateFooter observer)");
    }
  }
}

class UpdateIntroSlide extends Observer {

  constructor(model, composant, slides) {
    super();
    this.model = model;
    this.composant = composant;
    this.slides = slides;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {
      
      let div = document.createElement('div');
      div.setAttribute('id', 'slideIntro');
      div.addEventListener('click',function(){
        Amplitude.playSongAtIndex(0);
      })
      this.composant.div.appendChild(div);

      let start = document.createElement('div');
      start.setAttribute('id', 'starts');

      let next = document.createElement('div');
      next.setAttribute('id', 'next');
      next.style.visibility = 'hidden';
      next.addEventListener('mouseenter', function() {
        $(this).toggleClass('next_checked');
      });
      next.addEventListener('mouseleave', function() {
        $(this).toggleClass('next_checked');
      });
      next.addEventListener('click', () => {
        this.slides.nextSlide();
      });

      div.appendChild(next);

      div.appendChild(start);
      observable.loadNext(next);

      let intro  = observable.loadIntro(div);

      intro.addEventListener('DOMLoaded', () => {
        intro.addEventListener('complete', () => {
          console.log('ended');
          next.style.visibility = 'visible';
        });
      });


    } else if (val == false) {
      this.composant.div.querySelector('#slideIntro').remove();
    }
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
      let container = document.createElement('div');
      container.setAttribute('id', 'slide1');

      let hotelDiv = document.createElement('div');
      hotelDiv.setAttribute('id', 'hotel');

      let hotelText = document.createElement('div');
      hotelText.setAttribute('class', 'slide1Label unselectable');

      let studioDiv = document.createElement('div');
      studioDiv.setAttribute('id', 'studio');

      let studioText = document.createElement('div');
      studioText.setAttribute('class', 'slide1Label unselectable');

      container.appendChild(hotelDiv);
      container.appendChild(studioDiv);

      hotelDiv.appendChild(hotelText);
      studioDiv.appendChild(studioText);

      this.composant.div.appendChild(container);

      let hotel = observable.loadHotel(hotelDiv);
      let studio = observable.loadStudio(studioDiv);
      let model = this.model;

      hotel.addEventListener('DOMLoaded', function() {
        hotelDiv.addEventListener('mouseenter', function() {
          hotel.play();
          $(this).toggleClass('animation_checked');
          Amplitude.playSongAtIndex(2);
        });
        hotelDiv.addEventListener('mouseleave', function() {
          hotel.pause();
          $(this).toggleClass('animation_checked');
          Amplitude.pause();
        });
        hotelDiv.addEventListener('click', function() {
          observable.setChoice(0);
          model.setValue(true);
        });
      });
      studio.addEventListener('DOMLoaded', function() {
        studioDiv.addEventListener('mouseenter', function() {
          studio.play();
          $(this).toggleClass('animation_checked');
          Amplitude.playSongAtIndex(1);
        });
        studioDiv.addEventListener('mouseleave', function() {
          studio.pause();
          $(this).toggleClass('animation_checked');
          Amplitude.pause();
        });
        studioDiv.addEventListener('click', function() {
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
      this.composant.div.querySelector("#slide1").remove();
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

      observable.loadMicros(plug, divs);

      //Wires
      let wires = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      wires.setAttributeNS(null, 'id', 'wires');
      container.appendChild(wires);
      for (var i = 0; i < 4; i++) {
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttributeNS(null, 'class', 'path'+i);
        wires.appendChild(path);
        //handles
        let h1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        h1.setAttributeNS(null, 'class', 'handle'+i);
        h1.setAttributeNS(null,'cx', 0);
        h1.setAttributeNS(null, 'cy', 0);
        h1.setAttributeNS(null, 'r', 4);
        h1.setAttributeNS(null, 'mic', i+1);
        let h2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        h2.setAttributeNS(null,'class', 'handle'+i);
        h2.setAttributeNS(null, 'cx', 0);
        h2.setAttributeNS(null, 'cy', 0);
        h2.setAttributeNS(null, 'r', 4);
        h2.setAttributeNS(null, 'mic', i+1);
        wires.appendChild(h1);
        wires.appendChild(h2);

        let handles = document.querySelectorAll(".handle"+i);


        if (i == 0){
          let node1 = [45, 395];
          let node2 = [100, 450];
          observable.loadWire(handles, path, plug, [node1, node2]);
        }
        else if (i == 1){
          let node1 = [210, 270];
          let node2 = [230, 280];
          observable.loadWire(handles, path, plug, [node1, node2]);
        }
        else if (i == 2){
          let node1 = [486, 272];
          let node2 = [500, 400];
          observable.loadWire(handles, path, plug, [node1, node2]);
        }
        else if (i == 3){
          let node1 = [636, 368];
          let node2 = [550, 450];
          observable.loadWire(handles, path, plug, [node1, node2]);
        }
      }

      //slide_validée
      let div_valide = document.createElement('div');
      div_valide.setAttribute('id','slide2_valide');
      container.appendChild(div_valide);

      div_valide.addEventListener('click', () => {
        observable.setChoice(1);
        this.model.setValue(true);
        Amplitude.pause();
      });

      observable.loadValide(div_valide);
    }
    else if (val == false) {
       this.composant.div.querySelector("#slide2_micros").remove();
       observable.setDestroyed();
    }
  }
}
//
// class UpdateSlide2 extends Observer {
//
//   constructor(model, composant) {
//     super();
//     this.model = model;
//     this.composant = composant;
//   }
//
//   update(observable, object) {
//     let val = observable.getValue();
//
//     if (val == true) {
//
//       let container = document.createElement('div');
//       container.setAttribute('id', 'slide2_micros');
//       this.composant.div.appendChild(container);
//
//
//       let divs = [];
//
//       for (let micro in observable.text['labels']) {
//         let div = document.createElement('div');
//         div.setAttribute('id', 'slide2_' + micro + '_micro');
//         div.setAttribute('class', 'micro');
//         container.appendChild(div);
//
//         let text_micro = document.createElement('div');
//         text_micro.setAttribute('class', 'slide2Label unselectable');
//         text_micro.innerHTML = observable.text['labels'][micro];
//
//         div.appendChild(text_micro);
//         divs.push(div);
//       }
//
//       let plug = document.createElement('div');
//       plug.setAttribute('id', 'slide2_plug');
//
//       let text = document.createElement('div');
//       text.setAttribute('id', 'slide2_plugLabel');
//       text.setAttribute('class', 'unselectable');
//       text.innerHTML = observable.text.plug;
//
//       container.appendChild(plug);
//       plug.appendChild(text);
//
//       let micros = observable.loadMicros(plug, divs);
//
//     } else if (val == false) {
//        this.composant.div.querySelector("#slide2_micros").remove();
//        observable.setDestroyed();
//     }
//   }
// }

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

      let bouches = observable.loadIcons(bouche1, bouche2);

      bouches[1].addEventListener('DOMLoaded', () => {
        bouche1.addEventListener('mouseenter', function() {
          bouches[1].play();
          Amplitude.playSongAtIndex(3);
          $(this).toggleClass('animation_checked');
        });
        bouche1.addEventListener('mouseleave', function() {
          bouches[1].pause();
          Amplitude.pause();
          $(this).toggleClass('animation_checked');
        });
      });
      bouches[2].addEventListener('DOMLoaded', () => {
        bouche2.addEventListener('mouseenter', function() {
          bouches[2].play();
          Amplitude.playSongAtIndex(4);
          $(this).toggleClass('animation_checked');
        });
        bouche2.addEventListener('mouseleave', function() {
          bouches[2].pause();
          Amplitude.pause();
          $(this).toggleClass('animation_checked');
        });
      });

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
        let checked = document.getElementsByClassName('animation_checked');
        if (checked.length >= 1) {
          observable.setChoice();
          this.model.setValue(true);
        } else {
          console.log('err : expected checked animation');
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

        let text = document.createElement('div');
        text.setAttribute('class', 'slide4Label unselectable');
        text.innerHTML = observable.text.labels[i];
        etape.appendChild(text);

        container.appendChild(etape);
        divs[i] = etape;
        // checkboxes[i] = div_checkbox;
      };

      let animations = observable.load(container, divs, div_valide);

      Object.keys(animations).forEach( function(key) {
        animations[key].addEventListener('DOMLoaded', function() {
          document.getElementById(key).addEventListener('mouseenter', function() {
            animations[key].play();
            $(this).toggleClass('animation_checked');
          });
          document.getElementById(key).addEventListener('mouseleave', function() {
            animations[key].pause();
            //Amplitude.pause();
            $(this).toggleClass('animation_checked');
          });
          document.getElementById(key).addEventListener('click', function() {
            $(this).toggleClass('animation_checked');
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

      let timeline = document.createElement('div');
      timeline.setAttribute('id', 'slide5TimeLine');
      container.appendChild(timeline);

      for (let i = 1; i < 4; i++) {
        let label = document.createElement('div');
        label.setAttribute('id', 'slide5_' + i + '_label');
        label.setAttribute('class', 'slide5Label unselectable');
        label.innerHTML = observable.text.labels[i];

        label.addEventListener('click', function() {
          $(this).parent().find('#svg_slide5-' + i).toggleClass('slide5visible');
        });
        label.addEventListener('mouseenter', function() {
          $(this).toggleClass('text_checked');
        });
        label.addEventListener('mouseleave', function() {
          $(this).toggleClass('text_checked');
        });
        label.addEventListener('click', function() {
          $(this).toggleClass('text_checked');
        });
        container.appendChild(label);
      }

      let div_valide = document.createElement('div');
      div_valide.setAttribute('id','slide4_valide');
      container.appendChild(div_valide);

      div_valide.addEventListener('click', () => {
        let checked = document.getElementsByClassName('slide5visible');
        if (checked.length >= 1) {
          this.model.setValue(true);
          //Amplitude.pause();
        } else {
          console.log('err : expected checked animation');
        }
      });

      let div_valide_text = document.createElement('div');
      div_valide_text.setAttribute('id','slide4_valide_text');
      div_valide_text.setAttribute('class', 'unselectable');
      container.appendChild(div_valide_text);
      div_valide_text.innerHTML = 'valider';

      observable.loadTimeLine(timeline);
      observable.loadValide(div_valide);


    } else if (val == false) {
      this.composant.div.querySelector('#slide5_derush').remove();
    }
  }
}

class UpdateSlide6 extends Observer {

  constructor(model, composant, modelS) {
    super();
    this.model = model;
    this.composant = composant;
    this.modelS = modelS;
  }

  update(observable, object) {
    let val = observable.getValue();

    if (val == true) {

      let container = document.createElement('div');
      container.setAttribute('id', 'slide6_mixtable');
      this.composant.div.appendChild(container);

      let micros = observable.loadMixTable(container);

      let slider1 = document.createElement('div');
      slider1.setAttribute('class', 'slideContainer');

      let input1 = document.createElement('input');
      input1.setAttribute('type', 'range');
      input1.setAttribute('min', '0');
      input1.setAttribute('max', '10');
      input1.setAttribute('value', '5');
      input1.setAttribute('class', 'slider');
      input1.setAttribute('id', 'slider1');
      input1.setAttribute('orient', 'vertical');
      input1.addEventListener('change',function(){
        Amplitude.setVolume(input1.value*10);
      });
      
      let slider2 = document.createElement('div');
      slider2.setAttribute('class', 'slideContainer2');

      let input2 = document.createElement('input');
      input2.setAttribute('type', 'range');
      input2.setAttribute('min', '0');
      input2.setAttribute('max', '10');
      input2.setAttribute('value', '5');
      input2.setAttribute('class', 'slider');
      input2.setAttribute('id', 'slider2');
      input2.addEventListener('change',function(){
        Amplitude.anotherAudio.volume = input2.value/10;
      });
      container.appendChild(slider2);
      container.appendChild(slider1);
      slider1.appendChild(input1);
      slider2.appendChild(input2);

      /*
      let next = document.createElement('div');
      next.setAttribute('id', 'nextSlide6');
      next.innerHTML = "next";

      next.addEventListener('click', () => {
        this.modelS.nextSlide();
      });
      */

      //slide_validée
      let div_valide = document.createElement('div');
      div_valide.setAttribute('id','slide6_valide');
      container.appendChild(div_valide);

      div_valide.addEventListener('click', () => {
        observable.setChoice(1);
        this.model.setValue(true);
        observable.setChoice(0);
        Amplitude.pause();
        Amplitude.setContinue_next(false);
        Amplitude.anotherAudio.pause();
      });

      observable.loadValide(div_valide);

      //container.appendChild(next);
      Amplitude.setRepeatSong(true);
      Amplitude.setContinue_next(true);
      Amplitude.playSongAtIndex(2);
      Amplitude.anotherAudio = new Audio();
      Amplitude.anotherAudio.src = 'sons/son lieu - studio.wav';
      Amplitude.anotherAudio.play();
      Amplitude.anotherAudio.loop = true;
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
          observable.setChoice(1);
          this.model.setValue(true);
          // this.slides.setValue(9);
        });

        divs[1].addEventListener('mouseenter', function() {
          animations[1].play();
          $(this).toggleClass('animation_checked');
        });
        divs[1].addEventListener('mouseleave', function() {
          animations[1].pause();
          //Amplitude.pause();
          $(this).toggleClass('animation_checked');
        });

      });
      animations[2].addEventListener('DOMLoaded', () => {
        document.getElementById('slide7_casque').addEventListener('click', () => {
          observable.setChoice(1);
          this.model.setValue(true);
        })

        divs[2].addEventListener('mouseenter', function() {
          animations[2].play();
          $(this).toggleClass('animation_checked');
        });
        divs[2].addEventListener('mouseleave', function() {
          animations[2].pause();
          //Amplitude.pause();
          $(this).toggleClass('animation_checked');
        });
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
      let container = document.createElement('div');
      container.setAttribute('id', 'slide8_podcast');
      this.composant.div.appendChild(container);

      let presta = document.createElement('div');
      presta.setAttribute('id', 'presta');
      presta.addEventListener('click', () => {
        this.model.setValue(true);
      });
      presta.addEventListener('mouseenter', function() {
        $(this).toggleClass('text_checked');
      });
      presta.addEventListener('mouseleave', function() {
        $(this).toggleClass('text_checked');
      });


      let label1 = document.createElement('div');
      label1.setAttribute('class', 'slide8Label unselectable');
      label1.innerHTML = observable.text.labels[1];
      presta.appendChild(label1);

      let artisan = document.createElement('div');
      artisan.setAttribute('id', 'artisan');
      artisan.addEventListener('click', () => {
        this.model.setValue(true);
      });
      artisan.addEventListener('mouseenter', function() {
        $(this).toggleClass('text_checked');
      });
      artisan.addEventListener('mouseleave', function() {
        $(this).toggleClass('text_checked');
      });

      let label2 = document.createElement('div');
      label2.setAttribute('class', 'slide8Label unselectable');
      label2.innerHTML = observable.text.labels[2];
      artisan.appendChild(label2);

      let animation = document.createElement('div');
      animation.setAttribute('id', 'slide8Animation');

      container.appendChild(animation);

      // let divs = {};
      //
      // for (let i = 1; i < 3; i++) {
      //   let div_checkbox = document.createElement('div');
      //   div_checkbox.setAttribute('class','slide8_checkbox');
      //
      //   divs[i] = div_checkbox;
      // }
      //
      // presta.appendChild(divs[1]);
      // artisan.appendChild(divs[2]);

      container.appendChild(presta);
      container.appendChild(artisan);

      // observable.loadCheckbox(divs);
      observable.loadSVG(animation);


    } else if (val == false) {
      this.composant.div.querySelector('#slide8_podcast').remove();
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

      let container = document.createElement('div');
      container.setAttribute('id', 'lastSlide');

      let title = document.createElement('div');
      title.setAttribute('id', 'last_title');
      title.setAttribute('class', 'unselectable');

      title.innerHTML = observable.text.title;

      let speech = document.createElement('div');
      speech.setAttribute('id', 'speech');
      speech.setAttribute('class', 'unselectable');

      speech.innerHTML = observable.text.speech;

      let logo = document.createElement('div');
      logo.setAttribute('id', 'logo_alveole');

      let motto = document.createElement('div');
      motto.setAttribute('id', 'motto');
      motto.setAttribute('class', 'unselectable');

      motto.innerHTML = observable.text.motto;

      let soundcloud = document.createElement('div');
      soundcloud.setAttribute('id', 'soundcloud');

      let alveole = document.createElement('div');
      alveole.setAttribute('id', 'alveole');

      let website = document.createElement('div');
      website.setAttribute('id', 'website');
      website.setAttribute('class', 'unselectable');

      website.innerHTML = observable.text.website;

      alveole.appendChild(website);

      let sources = document.createElement('div');
      let button = document.createElement('a');
      button.setAttribute('id', "sourcesButton");
      button.setAttribute('href', '#sources');

      sources.appendChild(button);

      sources.setAttribute('id', 'sourcesDiv');

      let validate = document.createElement('div');
      validate.setAttribute('id', 'sourceLabel');
      validate.setAttribute('class', 'unselectable');
      validate.innerHTML = 'sources';

      sources.appendChild(validate);

      this.composant.div.appendChild(container);

      container.appendChild(title);
      container.appendChild(speech);
      container.appendChild(logo);
      container.appendChild(motto);
      container.appendChild(soundcloud);
      container.appendChild(alveole);
      container.appendChild(sources);

      observable.loadContent(logo, alveole, sources);

      let frame = document.createElement('iframe');
      frame.setAttribute('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/685582138&amp;color=807aa7');
      frame.setAttribute('id', 'soundcloud');
      container.appendChild(frame);

    } else if (val == false) {
      this.composant.div.querySelector('#lastSlide').remove();
      observable.setDestroyed();
    }
  }
}

// class UpdatePopup extends Observer {
//
//   constructor(composant, modelSlides) {
//     super();
//     this.composant = composant;
//     this.modelSlides = modelSlides;
//   }
//
//   update(observable, object) {
//
//     let val = observable.getValue();
//
//     if (val == true) {
//       this.composant.div.style.visibility = "visible";
//       this.composant.div.style.opacity = 1;
//     } else if (val == false) {
//       this.composant.div.style.visibility = "hidden";
//       this.composant.div.style.opacity = 0;
//     }
//   }
// }
