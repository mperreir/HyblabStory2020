$(document).ready(function() {

  var presentationPosTop = {
    top: $('#presentation-section').offset().top,
    bottom: $('#presentation-section').offset().top + $('#presentation-section').height()
  };

  var presentationPosBottom = {
    top: $(document).height() - $('#presentation-section').offset().top,
    bottom: $(document).height() - $('#presentation-section').offset().top - $('#presentation-section').height()
  };

  const logoAnimated = document.querySelector("#logo-sorties");

  let storedPosTop = 0;
  let storedPosBottom = 0;
  $(window).scroll(function() {

    let scrollPosTop = $(document).scrollTop();
    var scrollPosBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    console.log(scrollPosBottom);
    console.log(presentationPosBottom.top);
    console.log(presentationPosBottom.bottom);
    console.log(presentationPosBottom.top - 200);

    //Scroll vers le bas et on remonte
    if( scrollPosTop > ((presentationPosTop.top + presentationPosTop.bottom) / 2.5) && scrollPosTop < presentationPosTop.bottom && storedPosTop < scrollPosTop ) {
      logoAnimated.classList.remove('fadeInUp');
      logoAnimated.classList.add('fadeOut');
    } else if( ( scrollPosTop > ((presentationPosTop.top + presentationPosTop.bottom) / 2.5) ) && scrollPosTop < presentationPosTop.bottom && storedPosTop > scrollPosTop ) {
      logoAnimated.classList.remove('fadeOut');
      logoAnimated.classList.add('fadeInUp');
    } else if( ( scrollPosBottom < presentationPosBottom.top - 200 ) && scrollPosBottom < presentationPosBottom.top && storedPosBottom > scrollPosBottom ) {
      console.log("FADE IN");
      logoAnimated.classList.remove('fadeOut');
      logoAnimated.classList.add('fadeInUp');
    } else if( ( scrollPosBottom > presentationPosBottom.top - 300 ) && scrollPosBottom < presentationPosBottom.top && storedPosBottom < scrollPosBottom ) {
      console.log("FADE OUT");
      logoAnimated.classList.remove('fadeInUp');
      logoAnimated.classList.add('fadeOut');
    }
    storedPosTop = scrollPosTop;
    storedPosBottom = scrollPosBottom;
  });

});
