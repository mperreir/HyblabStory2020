let initSlide13 = function(){

  d3.select('#next15-2').on('click', function(){
    mySlidr.slide('page-15');
    initSlide15();
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
