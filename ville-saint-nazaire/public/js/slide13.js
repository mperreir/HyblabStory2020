let initSlide13 = function(){

  d3.select('#next14-img').on('click', function(){
    moveRight();
    initSlide14();
  });


  d3.select('#next14-img').on('mouseover', function(){
    anime({
      targets: '#next14-img',
      scale: 1.2
    });
  });

  d3.select('#next14-img').on('mouseout', function(){
    anime({
      targets: '#next14-img',
      scale: 1
    });
  });
}
