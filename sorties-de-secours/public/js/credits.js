let creditsFixed = true;

$(document).ready(function() {

    let credPos = $("#credits-section").position();
    let expoPos = $("#expo-section").position();

    $(window).scroll(function(e) {

      let scrollPos = $(window).scrollTop();

      let creditsSection = $("#credits-section");
      if (scrollPos > credPos.top - 400 && scrollPos < expoPos.top - 100 && creditsFixed) {
        e.preventDefault();
        bodyScrollLock.disableBodyScroll("#container");
        $('html,body').animate({
            scrollTop: $("#credits-section").offset().top
        }, 200);
        creditsFixed = false;
      }
      /*$("#credits-section").on('mousewheel', function(event, delta) {
        if(delta < 0) {
          $('html,body').animate({
              scrollTop: $("#credits-section").offset().top
          }, 200);
        } else {
          $('html,body').animate({
              scrollTop: $("#contact-section").offset().top
          }, 500);
        }
      });*/
    });
});
