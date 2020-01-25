let initSlide3 = function(){
  d3.select('#next4').on('click', function(){
    mySlidr.slide('page-4');
    initSlide4();
  });
}
