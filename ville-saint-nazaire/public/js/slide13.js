let initSlide13 = function(){

  d3.select('.next14').on('click', function(){
    moveRight();
    initSlide14();
  });

  d3.select('.next14').on('mouseover', function(){
    anime({
      targets: '#next14-texte, #next14-img',
      scale: 1.2
    });
  });

  d3.select('.next14').on('mouseout', function(){
    anime({
      targets: '#next14-texte, #next14-img',
      scale: 1
    });
  });
}
