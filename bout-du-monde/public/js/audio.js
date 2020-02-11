/***
 JS by https://codepen.io/GRSimon/
 ***/


$(".svg-audio").on("click", function () {

    var getaudio = $(this).parent()[0].nextElementSibling,
        mouseovertimer,
        audiostatus = 'off',
        playerControls = "#" + $(this).parent()[0].id;

    //console.log(geta)
    $(document).on('mouseenter', playerControls, function () {

        if (!mouseovertimer) {

            mouseovertimer = window.setTimeout(function () {

                mouseovertimer = null;

                if (!$(playerControls).hasClass("playing")) {
                    var isPlaying = getaudio.currentTime > 0 && !getaudio.paused && !getaudio.ended && getaudio.readyState > 2;

                    if (!isPlaying) {
                        getaudio.load();
                        var playPromise = getaudio.play();
                        if (playPromise !== undefined) {
                            playPromise.then(_ => {
                                $(playerControls).addClass('playing');
                                return false;
                            })
                                .catch(error => {
                                    // Auto-play was prevented
                                    // Show paused UI.
                                });
                        }

                    }
                }

            }, 2500);

        } else {
            console.log('timeover 2500');
        }

    });

    $(document).on('mouseleave', playerControls, function () {

        if (mouseovertimer) {

            window.clearTimeout(mouseovertimer);
            mouseovertimer = null;
            console.log('timeover window');
        }

    });

    $(document).on('click touch', playerControls, function (e) {

        e.preventDefault();

        if (!$(playerControls).hasClass("playing")) {

            if (audiostatus == 'off') {
                var isPlaying = getaudio.currentTime > 0 && !getaudio.paused && !getaudio.ended && getaudio.readyState > 2;

                if (!isPlaying) {
                    $(playerControls).addClass('playing');
                    getaudio.load();
                    var playPromise = getaudio.play();

                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            window.clearTimeout(mouseovertimer);
                            audiostatus = 'on';
                            return false;
                        })
                            .catch(error => {
                                // Auto-play was prevented
                                // Show paused UI.
                            });
                    }

                }
            } else if (audiostatus == 'on') {
                var isPlaying = getaudio.currentTime > 0 && !getaudio.paused && !getaudio.ended && getaudio.readyState > 2;
                if (!isPlaying) {
                    $(playerControls).addClass('playing');
                    var playPromise = getaudio.play();

                    if (playPromise !== undefined) {
                        playPromise.then(_ => {

                        })
                            .catch(error => {
                                // Auto-play was prevented
                                // Show paused UI.
                            });
                    }
                }
            }

        } else if ($(playerControls).hasClass("playing")) {

            getaudio.pause();
            $(playerControls).removeClass('playing');
            window.clearTimeout(mouseovertimer);
            audiostatus = 'on';
            console.log('timeover hasClass');
        }

        return false;

    });

    $(this).next().on('ended', function () {

        $(playerControls).removeClass('playing');
        audiostatus = 'off';

    });

    $(window).on("wheel", function (e) {

        if (scroll) {
            console.log("la");
            getaudio.pause();
            $(playerControls).removeClass('playing');
            window.clearTimeout(mouseovertimer);
            audiostatus = 'off';
        }
    });

    $("button.next").on("click", function () {
        console.log("btn");
        getaudio.pause();
        $(playerControls).removeClass('playing');
        window.clearTimeout(mouseovertimer);
        audiostatus = 'off';
    });
});

function finished(btn) {

    //background:
    btn.previousElementSibling.children[1].style.background = "url('https://www.dropbox.com/s/aukpnwpj8b77tqy/play.svg?raw=1') no-repeat 0 0";
    //console.log(btn.previousElementSibling.children[1]);
    //transition: all 0.25s linear;
}