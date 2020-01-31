let initSlide14 = function(){

  d3.select('#next15-3').on('click', function(){
    mySlidr.slide('page-15');
    initSlide15();
  });
}

function moveBureau14(){
  myMove(document.getElementById('image_bureau14'),-20);
}
function moveCommission14(){
  myMove(document.getElementById('image_commission14'),-20);
}
function moveSalon14(){
  myMove(document.getElementById('image_salon14'),-12);
}

function returnBureau14(){
  myReturn(document.getElementById('image_bureau14'),20);
}
function returnCommission14(){
  myReturn(document.getElementById('image_commission14'),20);
}
function returnSalon14(){
  myReturn(document.getElementById('image_salon14'),12);
}
