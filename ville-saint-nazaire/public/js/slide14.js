let initSlide14 = function(){

    d3.select('.next14').on('click', function(){
        moveRight();
        initSlide14();
    });

    d3.select('fin').on('mouseover', function(){
        anime({
            targets: '#fin-texte, #fin-img',
            scale: 1.2
        });
    });

    d3.select('fin').on('mouseout', function(){
        anime({
            targets: '#fin-texte, #fin-img',
            scale: 1
        });
    });

}