let initSlide14 = function(){

    d3.select('.fin').on('click', function(){
        window.location.reload();
    });

    d3.select('.fin').on('mouseover', function(){
        anime({
            targets: '#fin-texte, #fin-img',
            scale: 1.2
        });
    });

    d3.select('.fin').on('mouseout', function(){
        anime({
            targets: '#fin-texte, #fin-img',
            scale: 1
        });
    });

}