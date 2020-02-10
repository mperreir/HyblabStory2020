var musicMuted = false;
var playingSoundList = [];

$(document).ready(function() {

    const pxBeforeTop = 50;

    let $loadingSection = $('#loading-section');
    var loading = {
        top: $loadingSection.offset().top,
        bottom: $loadingSection.offset().top + $loadingSection.height()
    };

    let $presentationSection = $('#presentation-section');
    var presentation = {
        playing: false,
        top: $presentationSection.offset().top,
        bottom: $presentationSection.offset().top + $presentationSection.height()
    };

    let $menuSection = $('#menu-section');
    var menu = {
        top: $menuSection.offset().top,
        bottom: $menuSection.offset().top + $menuSection.height()
    };

    let $musicSection = $('#music-section');
    var music_workshop = {
        top: $musicSection.offset().top,
        bottom: $musicSection.offset().top + $musicSection.height()
    };

    $(window).scroll(function() {

        let scrollPos = $(document).scrollTop();

        // loading
        if (   scrollPos >= loading.top - pxBeforeTop
            && scrollPos < loading.bottom ) {
            set_music_pause("voice");

            set_music_volume("generalMusic", 1);
            set_music_play("generalMusic");
        }

        // presentation
        if (   scrollPos >= presentation.top - pxBeforeTop
            && scrollPos < presentation.bottom ) {
            set_music_volume("generalMusic", 0.3);

            if (presentation.playing) {
                set_music_play("voice");
            } else {
                change_music("voice", 'sounds/voices/presentation.mp3');
                presentation.playing = true;
            }
        }

        // menu
        if (    scrollPos >= menu.top - pxBeforeTop
            &&  scrollPos < menu.bottom) {
            set_music_pause("voice");
            set_music_volume("generalMusic", 1);
        }

        // // music_workshop
        // if (   scrollPos >= music_workshop.top - pxBeforeTop
        //     && scrollPos < music_workshop.bottom) {
        //     change_music("voice", 'sounds/voices/music_workshop.mp3');
        //     set_music_volume("voice", 1);
        //
        //     set_music_play("vinyl-noise");
        //
        //     set_music_pause("generalMusic");
        // }

        if (   scrollPos < music_workshop.top - pxBeforeTop
            || scrollPos >= music_workshop.bottom) {
            set_music_pause("vinyl");
            set_music_play("generalMusic");

            set_music_pause("vinyl-noise");
        }

    });

    // on sound-content click
    let $soundContent = $('.sound-content');

    $(".sound-content > svg").click(function() {

        if (!musicMuted) {
            $soundContent.addClass("sound-content-mute");

            console.log(document.getElementById("generalMusic").paused);
            console.log(document.getElementById("voice").paused);
            console.log(document.getElementById("ambianceExpo").paused);
            console.log(document.getElementById("danceMusic").paused);
            console.log(document.getElementById("vinyl-noise").paused);
            console.log(document.getElementById("vinyl").paused);

            set_music_pause("generalMusic");
            set_music_pause("voice");
            set_music_pause("ambianceExpo");
            set_music_pause("danceMusic");
            set_music_pause("vinyl-noise");
            set_music_pause("vinyl");

            musicMuted = true;
        } else {
            $soundContent.removeClass("sound-content-mute");

            console.log(document.getElementById("generalMusic").paused);
            console.log(document.getElementById("voice").paused);
            console.log(document.getElementById("ambianceExpo").paused);
            console.log(document.getElementById("danceMusic").paused);
            console.log(document.getElementById("vinyl-noise").paused);
            console.log(document.getElementById("vinyl").paused);

            set_music_play("generalMusic");
            set_music_play("voice");
            set_music_play("ambianceExpo");
            set_music_play("danceMusic");
            set_music_play("vinyl-noise");
            set_music_play("vinyl");

            musicMuted = false;
        }

    });


});