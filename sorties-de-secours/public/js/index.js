// variables
var $header_top = $('.header-top');
var $nav = $('nav');
var position = $(window).scrollTop();

// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

function noScroll() {
  //
}

function disableScroll() {
  window.addEventListener('scroll', noScroll);
}

function enableScroll() {
  window.removeEventListener('scroll', noScroll);
}

disableScroll();

function goToByScroll(id) {
  enableScroll();
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
  }, 400);
  disableScroll();
}
