AOS.init();
$('#container-scrollable').scroll(function () { AOS.refresh(); })

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

/*  MUSIC   */
// enable the first music to play
/*document.addEventListener('scroll', musicPlay);
function musicPlay() {
    music = document.getElementById('generalMusic');
    if (!(music.duration > 0 && !music.paused))
        music.play();
    // document.removeEventListener('click', musicPlay);
}*/
/*document.body.addEventListener("click", function () {
    document.getElementById("generalMusic").play();
    document.getElementById("voice").play();
});*/

function change_music(id, path) {
    document.getElementById(id).pause();
    document.getElementById(id).setAttribute('src', path);
    document.getElementById(id).load();
    document.getElementById(id).play();
}

function set_music_volume(id, volume) {
    document.getElementById(id).volume = volume;
}

function set_music_pause(id) {
    document.getElementById(id).pause();
}

function set_music_play(id) {
    document.getElementById(id).play();
}

/* A DESACTIVER POUR DEVELOPPER TRANQUILLEMENT */
const container = document.querySelector("#container");
bodyScrollLock.disableBodyScroll(container);
