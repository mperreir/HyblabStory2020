let initSlide9 = function(){

  d3.select('#next10').on('click', function(){
    mySlidr.slide('page-10');
    initSlide10();
  });
}
