let initSlide10 = function(){

  d3.select('#page10-1 #next11').on('click', function(){
    moveRight();
    initSlide11();
  });
  d3.select('#page10-2 #next11').on('click', function(){
    moveLeft();
    initSlide11();
  });
}
