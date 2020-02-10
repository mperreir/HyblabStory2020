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

    Snap.load('data/footer_ellipse.svg', function(data) {
      let snap = Snap('#footer_ellipse');
      snap.append(data);
    });
    this.main.appendChild(footer);
  }
}

class ViewLeft {

  constructor() {
    this.main = document.querySelector('main');
    let left = document.createElement('div');
    left.setAttribute('id', 'left');

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

    this.bottom = document.createElement('div');
    this.bottom.setAttribute('id', 'bottom');

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
        "role": "Développeurs",
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
