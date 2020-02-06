let initSlide13 = function(){

  let pause = 0;
  var vid = document.getElementById("videofin");
  vid.play();


  d3.select('.next14').on('click', function(){
    vid.pause();
    moveRight();
    initSlide14();
  });

  d3.select('#videofin').on('click', function(){
    if(pause == 0){
      vid.pause();
      pause=1;
    } else{
      vid.play();
      pause=0;
    }

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
