// variables
var $header_top = $('.header-top');
var $nav = $('nav');
var iScrollPos = 0;

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
