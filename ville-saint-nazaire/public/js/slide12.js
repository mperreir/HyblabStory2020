let initSlide12 = function(){

  d3.select('#next13').on('click', function(){
    console.log('13');
    moveRight();
    initSlide13();
  });

  d3.select('#next13').on('mouseover', function(){
      anime({
          targets: '#next13-img',
          scale: 1.2
      });
  });

  d3.select('#next13').on('mouseout', function(){
      anime({
          targets: '#next13-img',
          scale: 1
      });
  });
}

function moveBureau12(){
  myMove12(document.getElementById('image_bureau12'),-20,25);
}
function moveCommission12(){
  myMove12(document.getElementById('image_commission12'),-20,25);
}
function moveSalon12(){
  myMove12(document.getElementById('image_salon12'),-12,16);
}

function returnBureau12(){
  myReturn12(document.getElementById('image_bureau12'),20,40);
}
function returnCommission12(){
  myReturn12(document.getElementById('image_commission12'),20,40);
}
function returnSalon12(){
  myReturn12(document.getElementById('image_salon12'),12,31);
}

//fonctions déplacement image slide 12
function myMove12(elem,posInitiale,tailInitiale) {
  var pos = 0;
  var tail = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos++;
      tail=tail+15/20;
      //elem.style.top = (pos+30) + '%'';//déplacement vers le bas
      elem.style.left = (pos+posInitiale) + '%';//déplacement vers la gauche
      elem.style.width = (tail+tailInitiale) + '%';
    }
  }
}

function myReturn12(elem,posInitiale,widthInit) {
  var pos = 0;
  var tail= 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos--;
      tail=tail-15/posInitiale;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos) + '%';//déplacement vers la gauche
      elem.style.width = (tail+widthInit) + '%';
    }
  }
}
