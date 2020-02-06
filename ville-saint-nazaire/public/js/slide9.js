let initSlide9 = function(){

  d3.select('#next10').on('click', function(){
    console.log('10');
    moveDown();
    moveRight();
    initSlide10();
  });
}

function moveImage1(){
  myMove9(document.getElementById('image1_slide9'),-20);
}
function moveImage2(){
  myMove9(document.getElementById('image2_slide9'),-20);
}
function moveImage3(){
  myMove9(document.getElementById('image3_slide9'),-20);
}

function returnImage1(){
  myReturn9(document.getElementById('image1_slide9'),20);
}
function returnImage2(){
  myReturn9(document.getElementById('image2_slide9'),20);
}
function returnImage3(){
  myReturn9(document.getElementById('image3_slide9'),20);
}


function myMove9(elem,posInitiale) {
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

function myReturn9(elem,posInitiale) {
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
