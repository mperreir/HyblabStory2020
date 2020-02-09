$(document).ready(function() {

  var dancePosTop = {
    top: $('#dance-section').offset().top,
    bottom: $('#dance-section').offset().top + $('#dance-section').height()
  };

  var musicPosTop = {
    top: $('#music-workshop-section').offset().top,
    bottom: $('#music-workshop-section').offset().top + $('#music-workshop-section').height()
  };

  let isExperience = true;

  $(window).scroll(function() {
    if($(window).scrollTop() >= dancePosTop.top && $(window).scrollTop() < musicPosTop.top - 100) {
      console.log("YOUPIII");

    }
  });

  $('#dance-section').on('mousewheel', function(e, delta) {
    setTimeout(function() {
      const mouseAnimated = document.querySelector("#mouse-animated-dance");
      mouseAnimated.classList.remove('fadeOut');
      mouseAnimated.classList.add('fadeInUp');
      isExperience = false;
    }, 10000);
    if(!isExperience) {
      $("#img-dancers-2").css("opacity", "1");
      /*this.scrollLeft -= (delta * 60);*/
    }


    //e.preventDefault();
  });

});

/* DANCE EXPERIENCE */
