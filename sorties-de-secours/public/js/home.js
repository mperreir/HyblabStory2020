$(document).ready(function() {

  $("#button-start").click(function(e) {
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("loading-section");

    const soundAnimated = document.querySelector("#sound-content");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-2s');
    bodyScrollLock.disableBodyScroll(container);
    mouseAnimated.addEventListener('animationend', function() { bodyScrollLock.enableBodyScroll(container); });

    set_music_play("generalMusic");
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });
});
