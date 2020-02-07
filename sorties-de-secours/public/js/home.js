$(document).ready(function() {

  $("#button-start").click(function(e) {
    $("#container-scrollable").addClass("container-scrollable");
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("loading-section");
    bodyScrollLock.disableBodyScroll(container);
    $("#container-scrollable").addClass("container-scrollable");
    set_music_play("generalMusic");
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });
});
