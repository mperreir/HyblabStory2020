let initSlide2 = function(){

    var son = document.querySelector('#audioBombardement');
    son.play();

    son.volume = 0.1;
    setInterval(() =>  {
        if(son.volume <= 0.9){
            son.volume += 0.1;}
        }, 1000);


    myMove("bomb1",2,1);
    myMove("bomb2",33,10);
    myMove("bomb3",21,50);
    myMove("bomb4",38,72);
    myMove("bomb5",0.01,73);
    myMove("medaille1",0.01,17);
    myMove("medaille2",0.01,33);

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
            targets: '#next3-img',
            scale: 1.2
        });
    });

    d3.select('.next3').on('mouseout', function(){
        anime({
            targets: '#next3-img',
            scale: 1
        });
    });

}

function myMove(id,top1,left1) {
    var elem = document.getElementById(id);
    var top = 0;
    var left = 40;
    let coeff1 = (top1)/32;
    let coeff2 = (left1-40)/32;
    var id = setInterval(frame, 50);

    function frame() {

        if (top >= top1) {
            clearInterval(id);
        } else {
            top=top+coeff1;
            left=left+coeff2;
            elem.style.top = top + '%';
            elem.style.left = left + '%';
        }
    }

}