let initSlide5 = function(){

  d3.select('#next6').on('click', function(){
    moveLeft();
    initSlide6();
  });
  d3.select('#next7').on('click', function(){
    moveDown();
    initSlide7();
  });
  d3.select('#next8').on('click', function(){
    moveRight();
    initSlide8();
  });


}
