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

function goToByScroll(id, speed) {
  $('html,body').stop().animate({
      scrollTop: $("#" + id).offset().top
  }, speed);
}

/*  MUSIC   */
function change_music(id, path) {
    document.getElementById(id).pause();
    document.getElementById(id).setAttribute('src', path);
    document.getElementById(id).load();
    if (!musicMuted) {
        document.getElementById(id).play();
    } else if (!playingSoundList.includes(id)) {
        playingSoundList.push(id);
    }
}

function set_music_volume(id, volume) {
    document.getElementById(id).volume = volume;
}

function set_music_pause(id) {
    document.getElementById(id).pause();
}

function set_music_pause_and_stop(id) {
    set_music_pause(id);
    // remove sound from playingSoundList
    if (playingSoundList.includes(id)) {
        playingSoundList = playingSoundList.filter(function(value){
            return value !== id;
        });
    }
}

function set_music_play(id) {
    if (!musicMuted) {
        document.getElementById(id).play();
    } else if (!playingSoundList.includes(id)) {
        playingSoundList.push(id);
    }
}

/* A DESACTIVER POUR DEVELOPPER TRANQUILLEMENT */
const container = document.querySelector("#container");
bodyScrollLock.disableBodyScroll(container);
