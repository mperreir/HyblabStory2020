let initSlide12 = function(){

  d3.select('#next13').on('click', function(){
    moveRight()
    initSlide13();
  });
}

function moveBureau12(){
  myMove(document.getElementById('image_bureau12'),-20);
}
function moveCommission12(){
  myMove(document.getElementById('image_commission12'),-20);
}
function moveSalon12(){
  myMove(document.getElementById('image_salon12'),-12);
}

function returnBureau12(){
  myReturn(document.getElementById('image_bureau12'),20);
}
function returnCommission12(){
  myReturn(document.getElementById('image_commission12'),20);
}
function returnSalon12(){
  myReturn(document.getElementById('image_salon12'),12);
}
