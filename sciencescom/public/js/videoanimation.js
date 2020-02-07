function playAnimation(id) {
    var $video = document.getElementById(id);
    $video.playbackRate = 0.5;
    $video.currentTime = 0;
    $video.style.visibility = "visible";

    setTimeout(function () {
        $video.play();
    }, 0);

    setTimeout(function () {
        $video.style.visibility = "hidden";
    }, 900);
}


function nowToSeventies(jumps) {
    var $video = document.getElementById("doornow");

    $video.playbackRate = 0.5;
    $video.currentTime = 0;
    $video.style.visibility = "visible";

    $video.play();
    $("#decor").fadeOut(1000);


    $video.addEventListener('ended', () => {
        document.getElementById("decor").setAttribute("src", "img/decors/decor2.png");

        var $nextvideo = document.getElementById("door70s_rev");
        $nextvideo.playbackRate = 0.5;
        $nextvideo.currentTime = 0;
        $nextvideo.style.visibility = "visible";

        $video.style.visibility = "hidden";

        $nextvideo.play();
        $("#decor").fadeIn(1000);

        $nextvideo.addEventListener('ended', () => {
            $nextvideo.style.visibility = "hidden";
        }, false);

    }, false);



    for (i = 0; i < jumps; i++) {
        $('#oneperframe').sly('next');
    }
}