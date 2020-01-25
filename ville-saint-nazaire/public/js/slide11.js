let initSlide11 = function(){

  d3.select('#next12').on('click', function(){
    mySlidr.slide('page-12');
    initSlide12();
  });
}
