$(document).ready(function() {

  var dancePosTop = {
    top: $('#dance-section').offset().top,
    bottom: $('#dance-section').offset().top + $('#dance-section').height()
  };


  $(window).scroll(function() {
    if($(window).scrollTop() > dancePosTop.top) {
      bodyScrollLock.disableBodyScroll("#container");
      goToByScroll("dance-section", 0);
      $("#dance-first-slide").css("background-color", "white");
      setTimeout(function() {
        const mouseAnimated = document.querySelector("#mouse-animated-dance");
        mouseAnimated.classList.remove('fadeOut');
        mouseAnimated.classList.add('fadeInUp');
        isExperience = false;
      }, 10000);
    }
  });

  let isExperience = true;



  $('#dance-section').on('mousewheel', function(e, delta) {
    if(!isExperience) {
      $("#img-dancers-2").css("opacity", "1");
      /*this.scrollLeft -= (delta * 60);*/
    }


    //e.preventDefault();
  });

});

/* DANCE EXPERIENCE */
