let initSlide4 = function(){

  d3.select('#next5').on('click', function(){
    mySlidr.slide('page-5');
    initSlide5();
  });
}
