let initSlide5 = function(){


  d3.select('#next6').on('click', function(){
    mySlidr.slide('page-6');
    initSlide6();
  });

  d3.select('#next7').on('click', function(){
    mySlidr.slide('page-7');
    initSlide7();
  });

  d3.select('#next8').on('click', function(){
    mySlidr.slide('page-8');
    initSlide8();
  });

}
