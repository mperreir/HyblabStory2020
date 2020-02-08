let initSlidebravo = function(){



  d3.select('.nextbravo').on('click', function(){
    moveDown();
    initSlide12();
  });

  d3.select('.nextbravo').on('mouseover', function(){
        anime({
            targets: '#nextbravo-texte, #nextbravo-img',
            scale: 1.2
        });
    });

    d3.select('.nextbravo').on('mouseout', function(){
        anime({
            targets: '#nextbravo-texte, #nextbravo-img',
            scale: 1
        });
    });
}
