let initSlide2 = function(){

    var son = document.querySelector('#audioBombardement');
    son.play();

    function next3(){
        mySlidr.slide('page-3');
        initSlide3();
    };


    setTimeout(next3, 16000);

}
