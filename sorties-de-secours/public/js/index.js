AOS.init();

/* A DESACTIVER POUR DEVELOPPER TRANQUILLEMENT
(c'est ce qui force la premiere page au refresh)*/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

function goToByScroll(id) {
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
  }, 400);
}

//Desactivation du scroll horizontal
var $body = $(document);
$body.bind('scroll', function() {
    if ($body.scrollLeft() !== 0) {
        $body.scrollLeft(0);
    }
});

/* A DESACTIVER POUR DEVELOPPER TRANQUILLEMENT */
const homeSection = document.querySelector("#home-section");
bodyScrollLock.disableBodyScroll(homeSection);
