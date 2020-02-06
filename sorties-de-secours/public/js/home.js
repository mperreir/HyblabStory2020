$(document).ready(function() {

  $("#arrow-down").click(function(e) {
    goToByScroll("loading-section");
  });

  $("#home-section").scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        goToByScroll("loading-section");
    } else {
       //Scrolling Up
    }
    iScrollPos = iCurScrollPos;
});

});
