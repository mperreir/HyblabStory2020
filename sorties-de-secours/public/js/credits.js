$(document).ready(function() {

    let credPos = $("#credits-section").position();
    let expoPos = $("#expo-section").position();

    $(window).scroll(function(e) {

      let scrollPos = $(window).scrollTop();

      let creditsSection = $("#credits-section");
      if (scrollPos > credPos.top - 400 && scrollPos < expoPos.top - 100) {
        e.preventDefault();
        bodyScrollLock.disableBodyScroll(creditsSection);
        $('html,body').animate({
            scrollTop: $("#credits-section").offset().top
        }, 200);
      }
    });
});
