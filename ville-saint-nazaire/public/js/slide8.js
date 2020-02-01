let initSlide8 = function(){

  d3.select('#next9-3').on('click', function(){
    moveDown();
    moveLeft();
    moveLeft();
    initSlide9();
  });
}
