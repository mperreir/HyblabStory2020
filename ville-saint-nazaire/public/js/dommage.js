let initSlidedommage = function(){



  d3.select('.nextdmg').on('click', function(){
    moveDown();
    moveLeft();
    initSlide12();
  });

  d3.select('.nextdmg').on('mouseover', function(){
        anime({
            targets: '#nextdmg-img',
            scale: 1.2
        });
    });

    d3.select('.nextdmg').on('mouseout', function(){
        anime({
            targets: '#nextdmg-img',
            scale: 1
        });
    });
}
