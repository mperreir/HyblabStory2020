let initSlide2 = function(){

    var son = document.querySelector('#audioBombardement');
    son.play();

    function next3(){
        mySlidr.slide('page-3');
        initSlide3();
    };

    d3.select('#next3').on('click', function(){
      son.pause();
      mySlidr.slide('page-3');
      initSlide3();
    });

    setTimeout(next3, 16000);

}
