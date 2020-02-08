let initSlide9 = function(){

  d3.select('#next10').on('click', function(){
    console.log('10');
    moveDown();
    moveRight();
    initSlide10();
  });

  d3.select('#next10').on('mouseover', function(){
      anime({
          targets: '#next10-txt, #next10-img',
          scale: 1.2
      });
  });

  d3.select('#next10').on('mouseout', function(){
      anime({
          targets: '#next10-txt, #next10-img',
          scale: 1
      });
  });
}


function moveImage1(){
  myMove9(document.getElementById('image1_slide9'));
}
function moveImage2(){
  myMove9(document.getElementById('image2_slide9'));
}
function moveImage3(){
  myMove9(document.getElementById('image3_slide9'));
}

function returnImage1(){
  myReturn9(document.getElementById('image1_slide9'));
}
function returnImage2(){
  myReturn9(document.getElementById('image2_slide9'));
}
function returnImage3(){
  myReturn9(document.getElementById('image3_slide9'));
}


function myMove9(elem) {
  var pos = 0;
  var tail = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 20) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos++;
      tail=tail+15/20;
      //elem.style.top = (pos+30) + '%'';//déplacement vers le bas
      elem.style.left = (pos-20) + '%';//déplacement vers la gauche
      elem.style.width = (tail+25) + '%';
    }
  }
}

function myReturn9(elem) {
  var pos = 0;
  var tail= 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -20) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos--;
      tail=tail-15/20;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos) + '%';//déplacement vers la gauche
      elem.style.width = (tail+40) + '%';
    }
  }
}
