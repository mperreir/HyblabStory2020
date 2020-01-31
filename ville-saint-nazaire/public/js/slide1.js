let initSlide1 = function(){


  d3.select('#next2').on('click', function(){
    console.log("2");
    moveLeft();
    initSlide2();
  });
};
