let initSlide3 = function(){
  d3.select('#next4').on('click', function(){
    moveRight();
    initSlide4();
  });
}
