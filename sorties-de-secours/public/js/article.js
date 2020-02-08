$(document).ready(function() {

    let expoArticlePos = $("#expo-section").position();
    const expoSection = document.querySelector("#expo-section");

    $(window).scroll(function (e) {
        let scrollPos = $(window).scrollTop();

        // e.preventDefault();

        if (scrollPos > expoArticlePos.top) {
            // expo not selected yet, block scroll
            bodyScrollLock.disableBodyScroll(expoSection);
            goToByScroll("expo-section");
        }

    });

});