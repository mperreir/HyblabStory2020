$(document).ready(function() {

    let expoArticlePos = $("#expo-section").position();
    const expoSection = document.querySelector("#expo-section");

    let currentSlide = 0;
    let activateSlideshow = false;
    let scrollRecently = false;
    let storedPosTop = 0;

    $(window).scroll(function (e) {
        let scrollPos = $(window).scrollTop();

        e.preventDefault();

        if (!activateSlideshow && scrollPos >= expoArticlePos.top) {
            // quand l'utilisateur arrive sur l'article, on active le slideshow
            activateSlideshow = true;
        }

        if (activateSlideshow && !scrollRecently) {

            if(storedPosTop < scrollPos) {
                console.log("on descend");
                nextSlide();
            }
            if(storedPosTop > scrollPos) {
                console.log("on monte");
                previousSlide();
            }

        }

        triggeredScroll(scrollPos);

    });

    function activeButton(id) {
        $('.ss-dot').removeClass('ss-dot-selected');

        $('#expo-dot'+id).addClass('ss-dot-selected');
    }

    function triggeredScroll(scrollPos) {
        scrollRecently = true;
        setTimeout(function () {
            scrollRecently = false;
        }, 800);
        storedPosTop = scrollPos;
        // goToByScroll('expo-section', 0);
    }

    function goFromTo(slideFrom, slideTo) {
        console.log("go to slideshow " + slideTo);

        let $slideTo = $('#article-img-expo' + slideTo);
        let $slideFrom = $('#article-img-expo' + slideFrom);

        let $articleTextWrapper = $('.article-text-wrapper');
        let $articleTitleWrapper = $('.article-title-wrapper');
        let $ssButtonsWrapper = $('.ss-buttons-wrapper');

        if (slideFrom === 0 && slideTo === 1) {
            /* cache le texte */
            $articleTextWrapper.addClass("article-text-wrapper-hidden");
            // deplace le titre
            $articleTitleWrapper.addClass("article-title-wrapper-fullscreen");
            /* active les boutons du slideshow */
            $ssButtonsWrapper.removeClass("ss-buttons-wrapper-hidden");
        } else if (slideFrom === 1 && slideTo === 0) {
            $articleTextWrapper.removeClass("article-text-wrapper-hidden");
            $articleTitleWrapper.removeClass("article-title-wrapper-fullscreen");
            $ssButtonsWrapper.addClass("ss-buttons-wrapper-hidden");
        }

        $slideTo.removeClass('article-img-hidden');
        $slideFrom.removeClass('article-img-show');

        if (slideFrom > slideTo) {
            $slideTo.addClass('article-img-show');
        } else {
            if (slideTo !== 0) {
                $slideFrom.addClass('article-img-hidden');
            }
        }

        activeButton(slideTo);
    }

    function nextSlide() {
        let slideFrom = currentSlide;
        currentSlide++;
        if (currentSlide > 3) currentSlide = 3;
        goFromTo(slideFrom, currentSlide);
    }

    function previousSlide() {
        let slideFrom = currentSlide;
        currentSlide--;
        if (currentSlide < 0) currentSlide = 0;
        goFromTo(slideFrom, currentSlide);
    }

});