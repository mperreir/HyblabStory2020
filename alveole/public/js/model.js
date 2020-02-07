class Model extends Observable {

  // Model value
  value;

  constructor() {
    super();
    this.value;
  }

  setValue(value) {
    if (value != this.value) {
      this.value = value;
      this.setChanged();
      this.notifyObservers();
    }
  }
}

class ModelSlide extends Observable {

  // Model value
  obj;
  value;

  constructor() {
    super();
    this.obj = {
      "0": "Introduction",
      "1": "Lieu",
      "2": "Micro",
      "3": "Voix",
      "4": "Tournage",
      "5": "Dérushage",
      "6": "Mixage",
      "7": "Podcast ou Capsule ?",
      "8": "Capsule",
      "9": "Conclusion",
      "length": 10
    };
    this.value;
  }

  setValue(value) {
    if (value >= 0 && value < this.obj.length) {
      if (value != this.value) {
        this.value = value;
        this.setChanged();
        this.notifyObservers();
      }
    } else {
      console.log("err: index value not permitted");
    }

  }

  // Get the slide position
  getValue() {
    return this.value;
  }

  // Change to next slide (meaning animate the footer and make the transitions)
  nextSlide() {
    if (this.value < this.obj.length - 1) {
      this.setValue(this.value + 1);
    } else {
      console.log("err: out of range");
    }
  }

  // Change to previous slide (meaning animate the footer and make the transitions) ! most likely useless
  prevSlide() {
    if (this.value > 0) {
      this.setValue(this.value - 1);
    } else {
      console.log("err: out of range");
    }
  }

  getFooterValues() {
    let footValues = {
      "1": null,
      "2": null,
      "3": null
    }

    if (this.value != undefined) {
      if (this.value == 0) {
        // if first slide return empty object
      } else if (this.value == this.obj.length - 1) {
        footValues[1] = this.obj[this.value - 1];
        footValues[2] = this.obj[this.value];
      } else {
        footValues[1] = this.obj[this.value - 1];
        footValues[2] = this.obj[this.value];
        footValues[3] = this.obj[this.value + 1];
      }
    }
    return footValues;
  }
}

class ModelIntroSlide extends Observable {

  // values
  bool;
  text;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}


class ModelSlide1 extends Observable {

  // value
  bool;
  choice;
  answer;
  instanciated;
  hotel;
  studio;
  text;
  pop;

  constructor() {
    super();
    this.bool = false;
    this.choice;
    this.answer = 'studio';
    this.instanciated = false;
    this.pop = false;
  }

  getModalValue() {
    return this.pop;
  }

  setModalValue(val) {
    if (val != this.pop) {
      this.pop = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  destroyHotel() {
    if (this.instanciated == true) {
      this.hotel.destroy();
    } else {
      console.log('err : not instanciated');
    }
  }

  destroyStudio() {
    if (this.instanciated == true) {
      this.studio.destroy();
      this.instanciated = false;
    } else {
      console.log('err : not instanciated');
    }
  }

  loadHotel() {
    this.hotel = bodymovin.loadAnimation({
      container : document.getElementById('center'),
      renderer: 'svg',
      name: 'animation1',
      loop: true,
      autoplay: false,
      path: 'data/hotel.json',
      rendererSettings: {
        className: 'slide1',
        id: 'svg_hotel'
      }
    });
    this.instanciated = true;
    return this.hotel;
  }

  loadStudio() {
    this.studio = bodymovin.loadAnimation({
      container : document.getElementById('center'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/studio.json',
      rendererSettings: {
        className: 'slide1',
        id: 'svg_studio'
      }
    });
    this.instanciated = true;
    return this.studio;
  }

  getChoice() {
    return this.choice;
  }

  setChoice(val) {
    if (val == 0) {
      this.choice = "hotel";
    } else if (val == 1) {
      this.choice = "studio";
    } else {
      console.log("err : invalid slide 1 choice value");
    }
  }

}

class ModelSlide2 extends Observable {

  // values;
  bool;
  choice;
  answer;
  instanciated;
  text;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
    this.choice = 1;
    this.answer;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  loadMicros(container) {
    if (this.instanciated == false) {
      Snap.load('data/micro_cravate.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      Snap.load('data/micro_canon.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      Snap.load('data/micro_chant.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      Snap.load('data/micro_XY.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      this.instanciated = true;
    } else {
      console.log('err : slide2 micros already instanciated');
    }
  }

  setDestroyed() {
    this.instanciated = false;
  }
}

class ModelSlide3 extends Observable {

  // values
  bool;
  text;
  instanciated;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  loadQuestion(container){
    let div_question = document.createElement('div');
    div_question.setAttribute('id','slide3_question');
    container.appendChild(div_question);
    div_question.innerHTML = this.text.question;
  }
  loadSpeech(container){
    let div_speech = document.createElement('div');
    div_speech.setAttribute('id','slide3_speech');
    container.appendChild(div_speech);
    div_speech.innerHTML = this.text.speech;
  }
  loadIcons(container){
    let div_bouche1 = document.createElement('div');
    div_bouche1.setAttribute('id','slide3_bouche1');
    container.appendChild(div_bouche1);
    let div_bouche2 = document.createElement('div');
    div_bouche2.setAttribute('id','slide3_bouche2');
    container.appendChild(div_bouche2);
    Snap.load('data/bouche.svg', function(data) {
      let snap = Snap(div_bouche1);
      snap.append(data);
    });
    Snap.load('data/bouche.svg', function(data) {
      let snap = Snap(div_bouche2);
      snap.append(data);
    });
  }
  loadChoices(container){
    let div_choice1 = document.createElement('div');
    div_choice1.setAttribute('id','slide3_choice1');
    container.appendChild(div_choice1);
    div_choice1.innerHTML = 'NON PROFESSIONNEL';
    let div_choice2 = document.createElement('div');
    div_choice2.setAttribute('id','slide3_choice2');
    container.appendChild(div_choice2);
    div_choice2.innerHTML = 'PROFESSIONNEL';
  }
  load(container){
    if (this.instanciated == false) {
      this.loadQuestion(container);
      this.loadSpeech(container);
      this.loadIcons(container);
      this.loadChoices(container);
      this.instanciated = true;
    } else {
      console.log('err : slide3 voix already instanciated');
    }
  }
  setDestroyed() {
    this.instanciated = false;
  }
}

class ModelSlide6 extends Observable {

  // values
  bool;
  instanciated;
  text;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  loadMixTable(container) {
    if (this.instanciated == false) {
      Snap.load('data/mix_table.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      this.instanciated = true;
    } else {
      console.log('err : slide3 mix table already instanciated');
    }
  }

  setDestroyed() {
    this.instanciated = false;
  }
}

class ModelSlide4 extends Observable {

  // values
  bool;
  text;
  instanciated;
  choice;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
    this.choice = 1;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  loadQuestion(container){
    let div_question = document.createElement('div');
    div_question.setAttribute('id','slide4_question');
    container.appendChild(div_question);
    div_question.innerHTML = this.text.question;
  }

  loadSpeech(container){
    let div_speech = document.createElement('div');
    div_speech.setAttribute('id','slide4_speech');
    container.appendChild(div_speech);
    div_speech.innerHTML = this.text.speech;
  }

  loadTitres(container){
    for(let i=1; i<5; i++){
      let div_titre = document.createElement('div');
      div_titre.setAttribute('id','slide4_titre'+(i));
      container.appendChild(div_titre);
      div_titre.innerHTML = this.text.labels[i];
    }
  }

  loadAnime(container){
    this.Installer = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-1.json',
      rendererSettings: {
        id: 'slide4_installer'
      }
    });
    this.Repetition = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-2.json',
      rendererSettings: {
        id: 'slide4_repetition'
      }
    });
    this.Vocalise = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-3.json',
      rendererSettings: {
        id: 'slide4_vocalise'
      }
    });
    this.Interview = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-4.json',
      rendererSettings: {
        id: 'slide4_interview'
      }
    });
    return {'slide4_installer':this.Installer,
            'slide4_repetition':this.Repetition,
            'slide4_vocalise':this.Vocalise,
            'slide4_interview':this.Interview};
  }
  loadCheckbox(container){
      for(let i=0;i<4;i++){
        let div_checkbox = document.createElement('div');
        div_checkbox.setAttribute('id','slide4_checkbox'+(i+1));
        container.appendChild(div_checkbox);
        Snap.load('data/tournage_ronde.svg', function(data) {
          let snap = Snap(div_checkbox);
          snap.append(data);
        });
      }
  }
  loadValide(container){
    let div_valide = document.createElement('div');
    div_valide.setAttribute('id','slide4_valide');
    container.appendChild(div_valide);
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(div_valide);
      snap.append(data);
    });
    div_valide.addEventListener('click',function(){
      console.log('recu');
    });
    let div_valide_text = document.createElement('div');
    div_valide_text.setAttribute('id','slide4_valide_text');
    container.appendChild(div_valide_text);
    div_valide_text.innerHTML = 'valider';
  }
  load(container){
    if (this.instanciated == false) {
      this.loadQuestion(container);
      this.loadSpeech(container);
      this.loadTitres(container);
      let animes = this.loadAnime(container);
      this.loadCheckbox(container);
      this.loadValide(container);
      this.instanciated = true;
      return animes;
    } else {
      console.log('err : slide4 tournage table already instanciated');
    }
  }

  setDestroyed() {
    this.instanciated = false;
  }
}

class ModelSlide5 extends Observable {

  // values
  bool;
  text;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}



class ModelSlide7 extends Observable {

  // values
  bool;
  text;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}

class ModelSlide8 extends Observable {

  // values
  bool;
  text;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}

class ModelLastSlide extends Observable {

  // values
  bool;
  text;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}

class ModelPopup extends Observable {

  // values
  bool;

  constructor() {
    super();
    this.bool = false;
  }

  getValue() {
    return this.bool;
  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }
}
