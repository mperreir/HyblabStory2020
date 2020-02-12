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
  current_text;
  text;

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
    } else if (this.value == 0) {
      this.setValue(9);
    } else {
      console.log("err: out of range");
    }
  }

  setFooterText(val) {
    if (this.current_text != val) {
      this.current_text = val;
    }
  }

  getFooterText() {
    return this.current_text;
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

  loadNext(container) {
    Snap.load('data/next.svg', function(data) {
      let snap = Snap(container);
      snap.append(data);
    });
  }

  loadIntro(container) {
    this.intro = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      name: 'animation1',
      loop: false,
      autoplay: true,
      path: 'data/intro.json',
      rendererSettings: {
        className: 'slideIntroAnimation',
        id: 'svg_intro'
      }
    });
    this.instanciated = true;
    return this.intro;
  }

  getIntro() {
    return this.intro;
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
//
// class ModelSlide2 extends Observable {
//
//   // values;
//   bool;
//   choice;
//   answer;
//   instanciated;
//   text;
//
//   constructor() {
//     super();
//     this.bool = false;
//     this.instanciated = false;
//     this.choice = 1;
//     this.answer;
//     this.wires;
//   }
//
//   getValue() {
//     return this.bool;
//   }
//
//   setValue(val) {
//     if (val != this.bool) {
//       this.bool = val;
//       this.setChanged();
//       this.notifyObservers();
//     }
//   }
//
//   loadMicros(container, divs) {
//
//     if (this.instanciated == false) {
//
//       Snap.load('data/micro_canon.svg', function(data) {
//         let snap = Snap(divs[0]);
//         snap.append(data);
//       });
//       Snap.load('data/micro_reportage.svg', function(data) {
//         let snap = Snap(divs[1]);
//         snap.append(data);
//       });
//       Snap.load('data/micro_XY.svg', function(data) {
//         let snap = Snap(divs[2]);
//         snap.append(data);
//       });
//       Snap.load('data/micro_cravate.svg', function(data) {
//         let snap = Snap(divs[3]);
//         snap.append(data);
//       });
//       Snap.load('data/plug.svg', function(data) {
//         let snap = Snap(container);
//         snap.append(data);
//       });
//
//       this.instanciated = true;
//     }
//     else {
//       console.log('err : slide2 micros already instanciated');
//     }
//   }
//
//   setDestroyed() {
//     this.instanciated = false;
//   }
// }
class ModelSlide2 extends Observable {

  // values;
  bool;
  choice;
  answer;
  instanciated;
  text;
  handles;

  constructor() {
    super();
    this.bool = false;
    this.instanciated = false;
    this.choice = 0;
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

  setChoice(c) {
      this.choice = c;
      this.setValue(true);
  }

  getChoice(){
    if (this.choice != 0){
      return 1;
    }
  }

  loadMicros(container, divs) {

    if (this.instanciated == false) {

      Snap.load('data/micro_canon.svg', function(data) {
        let snap = Snap(divs[0]);
        snap.append(data);
      });
      Snap.load('data/micro_reportage.svg', function(data) {
        let snap = Snap(divs[1]);
        snap.append(data);
      });
      Snap.load('data/micro_XY.svg', function(data) {
        let snap = Snap(divs[2]);
        snap.append(data);
      });
      Snap.load('data/micro_cravate.svg', function(data) {
        let snap = Snap(divs[3]);
        snap.append(data);
      });
      Snap.load('data/plug.svg', function(data) {
        let snap = Snap(container);
        snap.append(data);
      });
      this.instanciated = true;
    }
    else {
      console.log('err : slide2 micros already instanciated');
    }
  }

  loadWire(handles, path, plug, nodes) {
    var bezierWeight = 0.2;
    var box = plug.getBoundingClientRect();

    for (var i = 0; i < 4; i++) {

      var point = {x:323, y:314};

      gsap.set(handles[0], {x:nodes[0][0], y:nodes[0][1]});
      gsap.set(handles[1], {x:nodes[1][0], y:nodes[1][1]});

      Draggable.create(handles, {
        type: 'x,y',
        bounds: path.parentElement,
        onDrag: updatePath,
        liveSnap: {
          points: [point],
          radius: 10
        },
        snap: {
          points: [point],
          radius: 10
        },
        onDragEnd: updateChoice
      });

      updatePath();

      function updatePath() {

        gsap.set(handles[0], {x:nodes[0][0], y:nodes[0][1]});

        var x1 = gsap.getProperty(handles[0], 'x');
        var y1 = gsap.getProperty(handles[0], 'y');

        var x4 = gsap.getProperty(handles[1], 'x');
        var y4 = gsap.getProperty(handles[1], 'y');

        var dx = Math.abs(x4 - x1) * bezierWeight;

        var x2 = x1 - dx;
        var x3 = x4 + dx;

        var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;

        path.setAttribute('d', data);
      }

      let that = this;
      function updateChoice() {
        if ((this.x == point.x) && (this.y = point.y)) {
          that.setChoice(this.target.getAttribute('mic'));
          console.log('choice set at ' + that.choice)
        }
        else {
          console.log(this.x)
          console.log(this.y)
          console.log("Wire not plugged");
        }
      }
    }
  }

  loadValide(div_valide) {
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(div_valide);
      snap.append(data);
    });
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
      this.bouche1 = bodymovin.loadAnimation({
        container : container1,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'data/voix-amateur.json',
        rendererSettings: {
          className: 'slide3',
          id: 'svg_bouche1'
        }
      });
      this.bouche2 = bodymovin.loadAnimation({
        container : container2,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'data/voix-pro.json',
        rendererSettings: {
          className: 'slide3',
          id: 'svg_bouche2'
        }
      });
      this.instanciated = true;
      return {"1": this.bouche1, "2": this.bouche2};
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

  // loadCheckbox(checkboxes) {
  //   Object.values(checkboxes).forEach( function(checkbox) {
  //     Snap.load('data/slide4_checkbox.svg', function(data) {
  //       let snap = Snap(checkbox);
  //       snap.append(data);
  //       data.node.addEventListener('click', function(e) {
  //         $(this).toggleClass('svg_checkbox_checked');
  //         $(this).parent().parent().find(".animation").toggleClass('animation_checked');
  //         // $(this).parent().parent().find(".slide4Label").toggleClass('slide4Label_checked');
  //       });
  //     });
  //   });
  // }

  loadValide(div_valide) {
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(div_valide);
      snap.append(data);
    });
  }

  load(container, divs, div_valide) {
    if (this.instanciated == false) {
      let animes = this.loadAnime(divs);
      // this.loadCheckbox(checkboxes);
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

  getDraggPath() {

  }

  setDestroyed() {
    this.instanciated = false;
  }
}



class ModelSlide5 extends Observable {

  // values
  bool;
  text;
  choice;

  constructor() {
    super();
    this.bool = false;
    this.choice = 1;
  }

  getChoice() {
    return this.choice;
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

  loadTimeLine(container) {
    Snap.load('data/timeline-vide.svg', (data) => {
      let snap = Snap(container);
      snap.append(data);
    });
    Snap.load('data/timeline-5min.svg', (data) => {
      let snap = Snap(container);
      snap.append(data);
    });
    Snap.load('data/timeline-10min.svg', (data) => {
      let snap = Snap(container);
      snap.append(data);
    });
    Snap.load('data/timeline-20min.svg', (data) => {
      let snap = Snap(container);
      snap.append(data);
    });
  }

  loadValide(div_valide) {
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(div_valide);
      snap.append(data);
    });
  }
}



class ModelSlide7 extends Observable {

  // values
  bool;
  text;
  choice;
  instanciated;

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

  getChoice() {
    return this.choice;
  }

  setChoice(val) {
  }

  loadAnime(containers) {
    if (this.instanciated == false) {

      this.podcast = bodymovin.loadAnimation({
        container : containers[1],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data/ondes.json',
        rendererSettings: {
          id: 'slide7_ondes',
          className: 'animation'
        }
      });
      this.casque = bodymovin.loadAnimation({
        container : containers[2],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data/casque.json',
        rendererSettings: {
          id: 'slide7_casque',
          className: 'animation'
        }
      });
      this.instanciated = true;
    }
    else {
      console.log('err : slide7 voix already instanciated');
    }
  }

  getAnimations(containers) {
    if (this.instanciated == false) {
      this.loadAnime(containers);
      return { "1": this.podcast, "2": this.casque};
    } else {
      console.log('err : slide7 voix already instanciated');
    }
  }

  setDestroyed() {
    if (this.instanciated == true) {
      this.casque.destroy();
      this.podcast.destroy();
      this.instanciated = false;
    } else {
      console.log('err : not instanciated');
    }
  }
}

class ModelSlide8 extends Observable {

  // values
  bool;
  text;
  choice;

  constructor() {
    super();
    this.bool = false;
    this.choice = 1;
  }

  getChoice() {
    return this.choice;
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

  loadSVG(container) {
    this.capsule = bodymovin.loadAnimation({
      container : container,
      renderer: 'svg',
      name: 'animation1',
      loop: true,
      autoplay: true,
      path: 'data/capsule.json',
      rendererSettings: {
        className: 'slide8AnimationJSON',
        id: 'svg_slide8'
      }
    });
  }

  loadCheckbox(checkboxes) {
    Object.values(checkboxes).forEach( function(checkbox) {
      Snap.load('data/slide8_checkbox.svg', function(data) {
        let snap = Snap(checkbox);
        snap.append(data);
      });
    });
  }
}

class ModelLastSlide extends Observable {

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

  loadContent(div1, div2, div3) {
    if (this.instanciated == false) {
      Snap.load('data/header_brand.svg', function(data) {
        let snap = Snap(div1);
        snap.append(data);
      });
      Snap.load('data/fleche.svg', (data) => {
        let snap = Snap(div2);
        data.node.id = 'fleche_website';
        data.node.addEventListener('click', () => {
          window.open(this.text.url);
        });
        snap.append(data);
      });
      Snap.load('data/fleche.svg', function(data) {
        let snap = Snap(div3);
        data.node.id = 'fleche_sources';
        data.node.addEventListener('click', function() {
          console.log(this);
        });
        snap.append(data);
      });
      this.instanciated = true;
    } else {
      console.log('err : already instanciated');
    }
  }

  setDestroyed() {
    this.instanciated = false;
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
