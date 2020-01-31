let initSlide6 = function(){
  console.log('6');
  d3.select('#next9-1').on('click', function(){
    moveDown();
    initSlide9();
  });
}
