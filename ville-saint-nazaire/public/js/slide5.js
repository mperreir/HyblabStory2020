let initSlide5 = function(){

  d3.select('#next6').on('click', function(){
    mySlidr.slide('page-6');
    initSlide6();
  });

    d3.select('#logo').on('mouseover', function(){
      anime({
          targets: '#logo',
          scale: 2
        });
    });

    d3.select('#logo').on('mouseout', function(){
      anime({
          targets: '#logo',
          scale: 1
        });
    });
}
