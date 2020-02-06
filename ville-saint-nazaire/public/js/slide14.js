let initSlide14 = function(){

    d3.select('#fin-img').on('click', function(){
        window.location.reload();
    });

    d3.select('#fin-img').on('mouseover', function(){
        anime({
            targets: '#fin-img',
            scale: 1.2
        });
    });

    d3.select('#fin-img').on('mouseout', function(){
        anime({
            targets: '#fin-img',
            scale: 1
        });
    });

}