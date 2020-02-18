let initSlide1 = function () {


  d3.select('#next2').on('click', function(){
    moveLeft();
    initSlide2();
  });
  d3.select('#next2').on('mouseover', function(){
    anime({
        targets: '#next2',
        scale: 1.2
    });
  });


  d3.select('#next2').on('mouseout', function(){
      anime({
          targets: ' #next2',
          scale: 1
      });
  });
};
