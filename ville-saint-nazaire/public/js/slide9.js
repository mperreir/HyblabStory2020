let initSlide9 = function(){

  d3.select('#page9-1 #next10').on('click', function(){
    console.log('10');
    moveDown();
    initSlide10();
  });
  d3.select('#page9-2 #next10').on('click', function(){
    console.log('10');
    moveDown();
    initSlide10();
  });
}

function moveBureau(){
  myMove(document.getElementById('image_bureau'),-20);
}
function moveCommission(){
  myMove(document.getElementById('image_commission'),-20);
}
function moveSalon(){
  myMove(document.getElementById('image_salon'),-12);
}

function returnBureau(){
  myReturn(document.getElementById('image_bureau'),20);
}
function returnCommission(){
  myReturn(document.getElementById('image_commission'),20);
}
function returnSalon(){
  myReturn(document.getElementById('image_salon'),12);
}



function myMove(elem,posInitiale) {
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos++;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos+posInitiale) + '%';//déplacement vers la gauche
    }
  }
}

function myReturn(elem,posInitiale) {
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos--;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos) + '%';//déplacement vers la gauche
    }
  }
}
