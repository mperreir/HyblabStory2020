$(document).ready(function() {

  $(".expChoice").click(function() {
    $(".expChoice").addClass('expChoiceHidden');

    $(this).removeClass("expChoiceHidden");
    $(this).addClass("expChoiceExpand");
  });

  var pos = $("#menu-section").position();
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if(scrollPos > pos.top) {
      const menuSection = document.querySelector("#menu-section");
      bodyScrollLock.disableBodyScroll(menuSection);
      goToByScroll("menu-section");
    }
  });


});
