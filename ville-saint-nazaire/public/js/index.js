// on s'occupe de la 1ère slide
initSlide1();

// Global
var win = window,
    doc = document;

// Global Functions

function hasClass(el, cls) {
  return el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) {
    el.className += " " + cls;
  }
};

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {

    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    el.className = el.className.replace(reg,' ');
  }
};

// Elements

var site = doc.getElementsByClassName('site-wrap')[0];
var wrap = doc.getElementsByClassName('panel-wrap')[0];


// Tracking
var pos_x = 0,
    pos_y = 0;

function setPos(){
  wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
  setTimeout( function(){
    removeClass(wrap, 'animate');
  }, 600);
}

setPos();

function moveUp(){
  addClass(wrap, 'animate');
  pos_y++;
  setPos();
}

function moveLeft(){
  addClass(wrap, 'animate');
  pos_x++;
  setPos();
}

function moveRight(){
  addClass(wrap, 'animate');
  pos_x--;
  setPos();
}

function moveDown(){
  addClass(wrap, 'animate');
  pos_y--;
  setPos();
}

