let initSlide1 = function(){

  d3.select('#next2').on('click', function(){
    anime({
        targets: '#next2',
        scale: 0
      });
    mySlidr.slide('page-2');
    initSlide2();
  });
};
