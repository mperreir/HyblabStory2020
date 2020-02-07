let initSlidedommage = function(){



  d3.select('#dommage-btnSuivant').on('click', function(){
    moveDown();
    moveLeft();
    initSlide12();
  });
}
