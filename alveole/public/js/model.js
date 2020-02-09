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
  instanciated;
  hotel;
  studio;
  text;

  constructor() {
    super();
    this.bool = false;
    this.choice;
    this.instanciated = false;
    this.pop = false;
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

  loadHotel(container) {
    this.hotel = bodymovin.loadAnimation({
      container : container,
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

  loadStudio(container) {
    this.studio = bodymovin.loadAnimation({
      container : container,
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
    this.wires;
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
        let children = snap.children();
      });
      Snap.load('data/micro_canon.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      Snap.load('data/plug.svg', function(data) {
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
    }
    else {
      console.log('err : slide2 micros already instanciated');
    }
  }

  loadWires(micros){
    let that = this;
    planck.testbed(function(testbed) {
      that.wires = new Rope();
      return that.wires.world;
    });
    return this.wires;
  }

  deleteWires(){

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
  choice;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
    this.choice;
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

  getChoice() {
    return this.choice;
  }

  setChoice(val) {
    if (val == 1) {
      this.choice = 1;
    } else if (val == 2) {
      this.choice = 2;
    } else {
      console.log("err : invalid slide 1 choice value");
    }
  }

  loadIcons(container1, container2) {
    if (this.instanciated == false) {
      Snap.load('data/bouche.svg', function(data) {
        let snap = Snap(container1);
        snap.append(data);
      });
      Snap.load('data/bouche.svg', function(data) {
        let snap = Snap(container2);
        snap.append(data);
      });
      this.instanciated = true;
    }
    else {
      console.log('err : slide3 voix already instanciated');
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

  getChoice() {
    return this.choice;
  }

  setChoice(val) {

  }

  setValue(val) {
    if (val != this.bool) {
      this.bool = val;
      this.setChanged();
      this.notifyObservers();
    }
  }

  loadAnime(container) {
    this.installer = bodymovin.loadAnimation({
      container : container[1],
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-1.json',
      rendererSettings: {
        id: 'slide4_installer',
        className:'animation'
      }
    });
    this.repetition = bodymovin.loadAnimation({
      container : container[2],
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-2.json',
      rendererSettings: {
        id: 'slide4_repetition',
        className:'animation'
      }
    });
    this.vocalise = bodymovin.loadAnimation({
      container : container[3],
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-3.json',
      rendererSettings: {
        id: 'slide4_vocalise',
        className:'animation'
      }
    });
    this.interview = bodymovin.loadAnimation({
      container : container[4],
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data/tournage-4.json',
      rendererSettings: {
        id: 'slide4_interview',
        className:'animation'
      }
    });
    return {
      'slide4_installer': this.installer,
      'slide4_repetition': this.repetition,
      'slide4_vocalise': this.vocalise,
      'slide4_interview': this.interview
    };
  }

  loadCheckbox(checkboxes) {
    Object.values(checkboxes).forEach( function(checkbox) {
      Snap.load('data/slide4_checkbox.svg', function(data) {
        let snap = Snap(checkbox);
        snap.append(data);
        data.node.addEventListener('click', function(e) {
          $(this).toggleClass('svg_checkbox_checked');
          $(this).parent().parent().find(".animation").toggleClass('animation_checked');
          $(this).parent().parent().find(".slide4Label").toggleClass('slide4Label_checked');
        });
      });
    });
  }

  loadValide(div_valide) {
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(div_valide);
      snap.append(data);
    });
  }

  load(container, divs, checkboxes, div_valide) {
    if (this.instanciated == false) {
      let animes = this.loadAnime(divs);
      this.loadCheckbox(checkboxes);
      this.loadValide(div_valide);
      this.instanciated = true;
      return animes;
    } else {
      console.log('err : slide4 tournage table already instanciated');
    }
  }

  destroy() {
    if (this.instanciated == true) {
      this.installer.destroy();
      this.repetition.destroy();
      this.vocalise.destroy();
      this.interview.destroy();
      this.instanciated = false;
    } else {
      console.log('err : not instanciated');
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
