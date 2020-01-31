let initSlide13 = function(){

  d3.select('#again').on('click', function(){
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveLeft();
    //window.location.reload();
  });
}

function moveBureau13(){
  myMove(document.getElementById('image_bureau13'),-20);
}
function moveCommission13(){
  myMove(document.getElementById('image_commission13'),-20);
}
function moveSalon13(){
  myMove(document.getElementById('image_salon13'),-12);
}

function returnBureau13(){
  myReturn(document.getElementById('image_bureau13'),20);
}
function returnCommission13(){
  myReturn(document.getElementById('image_commission13'),20);
}
function returnSalon13(){
  myReturn(document.getElementById('image_salon13'),12);
}
