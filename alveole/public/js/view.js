
class ViewHeader {
    constructor() {
      this.main = document.querySelector("main");
      let header = document.createElement('header');

      this.div = document.createElement('div');
      this.div.setAttribute('id', 'header_brand');

      header.appendChild(this.div);

      Snap.load('data/header_brand.svg', function(data) {
        let snap = Snap('#header_brand');
        snap.append(data);
      });

      this.main.appendChild(header);
    }
}

class ViewFooter {

  constructor() {
    this.main = document.querySelector('main');
    let footer = document.createElement('footer');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'footer_ellipse');

    this.text = document.createElement('div');
    this.text.setAttribute('id', 'footer_text');
    this.text.setAttribute('class', 'unselectable');

    this.div.appendChild(this.text);
    footer.appendChild(this.div);

    // Snap.load('data/footer_ellipse.svg', function(data) {
    //   let snap = Snap('#footer_ellipse');
    //   snap.append(data);
    // });

    this.roue = bodymovin.loadAnimation({
      container : this.div,
      renderer: 'svg',
      name: 'animation1',
      loop: true,
      autoplay: false,
      path: 'data/roue-3.json',
      rendererSettings: {
        className: 'footerAnimation',
        id: 'svg_ellipse'
      }
    });

    this.main.appendChild(footer);
  }
}

class ViewLeft {

  constructor() {
    this.main = document.querySelector('main');
    let left = document.createElement('div');
    left.setAttribute('id', 'left');
    let range_slider=document.createElement('div')
    range_slider.setAttribute('class','range_slider');
    this.texte=document.createElement('span');
    this.texte.innerHTML = 'volume';
    this.texte.setAttribute('id','left_volume');

    let input_range=document.createElement('input');
    input_range.setAttribute('class','input_range');
    input_range.setAttribute('type','range');
    input_range.setAttribute('step','5');
    input_range.setAttribute('value','50');
    input_range.setAttribute('min','0');
    input_range.setAttribute('max','100');
    input_range.setAttribute('orient','vertical');
    input_range.setAttribute('title','volume');
    this.volume_percent = input_range.value/100;
    input_range.addEventListener('change',function(){
      this.volume_percent = input_range.value/100;
      if(Amplitude.anotherAudio === undefined){
        Amplitude.setVolume(100*this.volume_percent);
      }
      else if(Amplitude.anotherAudio !== undefined){
        let slider1 = document.getElementById('slider1');
        let value1 = slider1.value;
        let slider2 = document.getElementById('slider2');
        let value2 = slider2.value;
        Amplitude.setVolume(10*this.volume_percent*value1);
        Amplitude.anotherAudio.volume = value2/10*this.volume_percent;
      }
    })

  range_slider.appendChild(input_range);
  range_slider.appendChild(this.texte);
  left.appendChild(range_slider);

    this.main.appendChild(left);
  }
}

class ViewCenter {

  constructor() {
    this.main = document.querySelector('main');
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'center');

    this.question = document.createElement('div');
    this.question.setAttribute('class', 'center_question unselectable');

    this.speech = document.createElement('div');
    this.speech.setAttribute('class', 'center_speech unselectable');

    this.div.appendChild(this.question);
    this.div.appendChild(this.speech);

    this.main.appendChild(this.div);
  }
}

class ViewRight {

  constructor() {
    this.main = document.querySelector('main');
    let right = document.createElement('div');
    right.setAttribute('id', 'right');

    this.main.appendChild(right);
  }
}

class ViewStupidButtons {

  constructor() {
    this.right = document.querySelector('#right');

    let div = document.createElement('div');
    div.setAttribute('id', 'buttonContainers');

    this.prev = document.createElement('button');
    this.prev.setAttribute('class', 'stupidButton unselectable');
    this.prev.innerHTML = "prev";

    this.next = document.createElement('button');
    this.next.setAttribute('class', 'stupidButton unselectable');
    this.next.innerHTML = "next";

    div.appendChild(this.prev);
    div.appendChild(this.next);

    this.right.appendChild(div);
  }
}

class ViewModal {

  constructor() {
    this.main = document.querySelector('main');
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'modal');
    this.div.setAttribute('class', 'overlay');
    this.div.style.visibility = 'hidden';

    this.container = document.createElement('div');
    this.container.setAttribute('class', 'modal-content');

    this.button = document.createElement('div');
    this.button.setAttribute('id', 'button-next');

    this.title = document.createElement('div');
    this.title.setAttribute('id', 'title');
    this.title.setAttribute('class', 'unselectable');

    this.mainText = document.createElement('div');
    this.mainText.setAttribute('id', 'main_text');
    this.mainText.setAttribute('class', 'unselectable');

    this.subText = document.createElement('div');
    this.subText.setAttribute('id', 'sub_text');
    this.subText.setAttribute('class', 'unselectable');

    Snap.load('data/skip_popup.svg', function(data) {
      // Adding the ellipse to the div
      let snap = Snap('#button-next');
      snap.append(data);
    });

    this.container.appendChild(this.title);
    this.container.appendChild(this.mainText);
    this.container.appendChild(this.subText);

    this.container.appendChild(this.button);

    this.div.appendChild(this.container);

    this.main.appendChild(this.div);
  }
}

class ViewModalConclusion {

  constructor() {
    this.main = document.querySelector('main');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'sources');
    this.div.setAttribute('class', 'lastOverlay');

    this.modal = document.createElement('div');
    this.modal.setAttribute('class', 'modal');

    this.div.appendChild(this.modal);

    this.close = document.createElement('a');
    this.close.setAttribute('class', 'close');
    this.close.setAttribute('href', '#');
    this.close.innerHTML = '&times;';

    this.content = document.createElement('div');
    this.content.setAttribute('class', 'modalContent');

    this.modal.appendChild(this.close);
    this.modal.appendChild(this.content);

    this.main.appendChild(this.div);

    this.alveole = document.createElement('div');
    this.alveole.setAttribute('id', 'top');

    this.logo = document.createElement('div');
    this.logo.setAttribute('id', 'logoAlv');

    Snap.load('data/logo_conclu.svg', (data) => {
      let snap = Snap(this.logo);
      snap.append(data);
    });

    this.text = document.createElement('div');
    this.text.setAttribute('id', 'names_');
    this.text.innerHTML = "boris lemasson - co-fondateur<br>pierre-yves alain - co-fondateur";

    this.alveole.appendChild(this.text);
    this.alveole.appendChild(this.logo);

    this.bottom = document.createElement('div');
    this.bottom.setAttribute('id', 'bottom');

    this.media = document.createElement('div');
    this.media.setAttribute('id', 'medialab');
    Snap.load('logos/medialab.svg', (data) => {
      let snap = Snap(this.media);
      snap.append(data);
    });
    this.hyblab = document.createElement('div');
    this.hyblab.setAttribute('id', 'hyblab');
    Snap.load('logos/hyblab.svg', (data) => {
      let snap = Snap(this.hyblab);
      snap.append(data);
    });

    this.bottom.appendChild(this.media);
    this.bottom.appendChild(this.hyblab);

    this.content.appendChild(this.alveole);
    this.content.appendChild(this.bottom);

    this.school = {
      "audencia": {
        "logo": "logos/audencia.svg",
        "role": "scénario",
        "people": {
          "1": "Anaelle Favier",
          "2": "Gwenn Lorans"
        }
      },
      "polytech": {
        "logo": "logos/polytech.svg",
        "role": "Développement",
        "people": {
          "1": "Andi Wang",
          "2": "Robin Mauduit",
          "3": "Xingshuo Cha"
        }
      },
      "agr": {
          "logo": "logos/agr.svg",
          "role": "da - graphisme",
          "people": {
            "1": "Aurélie Lumeau",
            "2": "Justine Cousin"
          }
        }
      };

    Object.keys(this.school).forEach((key) => {
      let divP = document.createElement('div');
      divP.setAttribute('id', key);

      let logo = document.createElement('div');
      logo.setAttribute('class', 'logo');

      Snap.load(this.school[key].logo, (data) => {
        let snap = Snap(logo);
        snap.append(data);
      });

      let role = document.createElement('div');
      role.setAttribute('class', 'role');
      role.innerHTML = this.school[key].role;

      let people = document.createElement('div');
      people.setAttribute('class', 'people');

      let counter = 0;
      Object.values(this.school[key].people).forEach((person) =>{
        let personDiv = document.createElement('div');
        personDiv.setAttribute('class', 'person');
        personDiv.setAttribute('id', 'person' + counter);
        personDiv.innerHTML = person;

        people.appendChild(personDiv);
        counter++;
      });

      divP.appendChild(logo);
      divP.appendChild(role);
      divP.appendChild(people);

      this.content.appendChild(divP);

    });

  }
}
