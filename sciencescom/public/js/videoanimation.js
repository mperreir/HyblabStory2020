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


function playAnimationThenNext(id, n = 1) {
    playAnimation(id);
    setTimeout(function () {
        for (i = 0; i < n; i++) {
            $('#oneperframe').sly('next');
        }
    }, 400);
}