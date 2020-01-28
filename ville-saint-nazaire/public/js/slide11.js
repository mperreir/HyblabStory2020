let initSlide11 = function(){

  d3.select('#next12').on('click', function(){
    mySlidr.slide('page-12');
    initSlide12();
  });

  d3.select('#next13').on('click', function(){
    mySlidr.slide('page-13');
    initSlide13();
  });

  d3.select('#next14').on('click', function(){
    mySlidr.slide('page-14');
    initSlide14();
  });
}
