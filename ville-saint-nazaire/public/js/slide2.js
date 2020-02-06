let initSlide2 = function(){

    var son = document.querySelector('#audioBombardement');
    son.play();

    function next3(){
        mySlidr.slide('page-3');
        initSlide3();
    };

    d3.select('.next3').on('click', function(){
      son.pause();
      moveDown();
      initSlide3();
    });

    d3.select('.next3').on('mouseover', function(){
        anime({
            targets: '#next3-texte, #next3-img',
            scale: 1.2
        });
    });

    d3.select('.next3').on('mouseout', function(){
        anime({
            targets: '#next3-texte, #next3-img',
            scale: 1
        });
    });

}
