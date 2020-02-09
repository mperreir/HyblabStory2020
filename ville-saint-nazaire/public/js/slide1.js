let initSlide1 = function(){


  d3.select('#next2').on('click', function(){
    moveLeft();
    initSlide2();
  });
};
