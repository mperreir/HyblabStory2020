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
        }

        // presentation
        if (   scrollPos >= presentation.top - pxBeforeTop
            && scrollPos < presentation.bottom ) {

            if (presentation.playing) {
                set_music_play("voice");
                set_music_volume("voice", 0.4);
                set_music_volume("generalMusic", 0.05);
            } else {
                change_music("voice", 'sounds/voices/presentation.mp3');
                presentation.playing = true;
            }
        }

        // menu
        if (    scrollPos >= menu.top - pxBeforeTop
            &&  scrollPos < menu.bottom) {
            set_music_pause("voice");
            set_music_volume("generalMusic", 0.1);
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
            set_music_pause("vinyl-noise");
            
            set_music_play("generalMusic");
        }

    });

    // on sound-content click
    let $soundContent = $('.sound-content');

    $(".sound-content > svg").click(function() {

        if (!musicMuted) {
            musicMuted = true;

            $soundContent.addClass("sound-content-mute");

            ["generalMusic", "voice", "ambianceExpo", "danceMusic", "vinyl-noise", "vinyl"].forEach((id) => {
                if (!document.getElementById(id).paused) {
                    console.log(id + " is paused : " + document.getElementById(id).paused);
                    playingSoundList.push(id);
                    set_music_pause(id);
                }
            });

        } else {
            musicMuted = false;

            $soundContent.removeClass("sound-content-mute");

            playingSoundList.forEach((id) => {
                set_music_play(id);
            });
        }

    });


});
