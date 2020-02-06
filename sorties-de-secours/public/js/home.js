$(document).ready(function() {

  $("#button-start").click(function(e) {
    bodyScrollLock.enableBodyScroll(homeSection);
    goToByScroll("loading-section");

      set_music_play("generalMusic");
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });
});
