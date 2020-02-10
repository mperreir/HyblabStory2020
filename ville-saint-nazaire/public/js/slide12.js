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
  myMove12(document.getElementById('image_bureau12'),-20,25,'#texte_slide12_bureau',65);
}
function moveCommission12(){
  myMove12(document.getElementById('image_commission12'),-20,25,'#texte_slide12_commission',44);
}
function moveSalon12(){
  myMove12(document.getElementById('image_salon12'),-12,16,'#texte_slide12_salon',55);
}



function returnBureau12(){
  myReturn12(document.getElementById('image_bureau12'),20,40,'#texte_slide12_bureau');
}
function returnCommission12(){
  myReturn12(document.getElementById('image_commission12'),20,40,'#texte_slide12_commission');
}
function returnSalon12(){
  myReturn12(document.getElementById('image_salon12'),12,31,'#texte_slide12_salon');
}

//fonctions déplacement image slide 12
function myMove12(elem,posInitiale,tailInitiale,choix,tt) {
  var pos = 0;
  var tail = 0;
  var id = setInterval(frame, 10);
  var vide = document.querySelector('#texte_slide12_vide');
  var texte = document.querySelector(choix);
  vide.style.visibility='hidden';
  texte.style.visibility = 'visible';
  texte.style.width=tt + '%';
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      elem.style.borderStyle='none';
      pos++;
      tail=tail+15/20;
      elem.style.left = (pos+posInitiale) + '%';//déplacement vers la gauche
      elem.style.width = (tail+tailInitiale) + '%';
    }
  }
}

function myReturn12(elem,posInitiale,widthInit,choix) {
  var pos = 0;
  var tail= 0;
  var id = setInterval(frame, 10);
  var vide = document.querySelector('#texte_slide12_vide');
  var texte = document.querySelector(choix);
  vide.style.visibility='visible';
  texte.style.visibility = 'hidden';
  vide.style.width='55%';
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
      elem.style.borderStyle='solid';
    } else {
      pos--;
      tail=tail-15/posInitiale;
      elem.style.left = (pos) + '%';//déplacement vers la gauche
      elem.style.width = (tail+widthInit) + '%';
    }
  }
}
