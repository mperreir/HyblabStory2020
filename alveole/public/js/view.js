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

    footer.appendChild(this.div);

    Snap.load('data/footer_ellipse.svg', function(data) {

      // Adding the ellipse to the div
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
    this.question.setAttribute('class', 'center_question');

    this.speech = document.createElement('div');
    this.speech.setAttribute('class', 'center_speech');

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
    this.prev.setAttribute('class', 'stupidButton');
    this.prev.innerHTML = "prev";

    this.next = document.createElement('button');
    this.next.setAttribute('class', 'stupidButton');
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

    this.mainText = document.createElement('div');
    this.mainText.setAttribute('id', 'main_text');
    this.mainText.setAttribute('class', 'text');

    this.subText = document.createElement('div');
    this.subText.setAttribute('id', 'sub_text');
    this.subText.setAttribute('class', 'text');

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

class ViewCenterConclusion {

  constructor() {
    this.main = document.querySelector('main');
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'center');
    this.div.style.visibility = 'hidden';

    this.theme = document.createElement('div');
    this.theme.setAttribute('class', 'theme');

    this.center_speech1 = document.createElement('div');
    this.center_speech1.setAttribute('class', 'center_speech1');

    this.center_speech2 = document.createElement('div');
    this.center_speech2.setAttribute('class', 'center_speech2');

    this.footer_speech = document.createElement('div');
    this.footer_speech.setAttribute('class', 'footer_speech');

    this.div.appendChild(this.theme);
    this.div.appendChild(this.center_speech1);
    this.div.appendChild(this.center_speech2);
    this.div.appendChild(this.footer_speech);

    let that = this;
    Snap.load('data/tournage_valide.svg', function(data) {
      let snap = Snap(that.div.children[4]);
      snap.append(data);
    });

    this.main.appendChild(this.div);
  }
}
