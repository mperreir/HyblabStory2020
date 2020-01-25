let initSlide2 = function(){

  d3.select('#next3').on('click', function(){
    mySlidr.slide('page-3');
    initSlide3();
  });
}
