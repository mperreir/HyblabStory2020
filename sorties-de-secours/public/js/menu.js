$(document).ready(function() {

    const menuSection = document.querySelector("#menu-section");

    var menuFixed = false;
    var $exp_selected = undefined;
    // var scrollDone = false;

    $(".expChoice").click(function() {
        bodyScrollLock.enableBodyScroll(menuSection);

        $(".expChoice").addClass('expChoiceHidden');

        $exp_selected = $(this);
        $exp_selected.removeClass("expChoiceHidden");
        $exp_selected.addClass("expChoiceExpand");


        $(window).scroll(function(e) {
            // if (!scrollDone) {
            e.preventDefault();

            let expId = $exp_selected.attr('id');
                console.log(expId);

                let section;
                switch(expId) {
                    case "expChoiceMusique":
                        section = 'music-workshop-section';
                        break;
                    case "expChoiceDance":
                        section = 'dance-section';
                        break;
                    case "expChoiceExpo":
                        section = 'expo-section';
                        break;
                }
                $exp_selected.addClass("expChoiceOut");
                setTimeout(function() {
                    goToByScroll(section, 0);
                }, 750);

        });

    });

    let menuPos = $("#menu-section").position();
    $(window).scroll(function(e) {

        let scrollPos = $(window).scrollTop();

        if (!menuFixed && $exp_selected === undefined && scrollPos > menuPos.top - 500) {
            // expo not selected yet, block scroll
            menuFixed = true;

            e.preventDefault();
            bodyScrollLock.disableBodyScroll(menuSection);
            goToByScroll("menu-section", 400);
        } /*else {
            let top = $('#menu-section').offset().top;
            $('html, body').animate({
                scrollTop: top
            },0);
        }*/

    });




});
