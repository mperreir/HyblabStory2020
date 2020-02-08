$(document).ready(function() {

  var loadingPos = {
    top: $('#loading-section').offset().top,
    bottom: $('#loading-section').offset().top + $('#loading-section').height()
  };

  const soundAnimated = document.querySelector("#sound-content");
  const mouseAnimated = document.querySelector("#mouse-animated");

  let storedPos = 0;
  $(window).scroll(function() {

    let scrollPosSound = $(document).scrollTop();

    if( scrollPosSound > ((loadingPos.top + loadingPos.bottom) / 2.5) && scrollPosSound < loadingPos.bottom && storedPos < scrollPosSound ) {
      soundAnimated.classList.remove('fadeInUp');
      soundAnimated.classList.add('fadeOut');
      mouseAnimated.classList.remove('fadeInUp');
      mouseAnimated.classList.add('fadeOut');
    } else if( ( scrollPosSound > ((loadingPos.top + loadingPos.bottom) / 2.5) ) && scrollPosSound < loadingPos.bottom && storedPos > scrollPosSound ) {
      soundAnimated.classList.remove('fadeOut');
      soundAnimated.classList.add('fadeInUp');
      mouseAnimated.classList.remove('fadeOut');
      mouseAnimated.classList.add('fadeInUp');
    }
    storedPos = scrollPosSound;
  });

});
