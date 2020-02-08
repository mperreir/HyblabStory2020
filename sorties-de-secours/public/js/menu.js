$(document).ready(function() {

    var $exp_selected = undefined;
    var scrollDone = false;

    $(".expChoice").click(function() {
        $(".expChoice").addClass('expChoiceHidden');

        $exp_selected = $(this);
        $exp_selected.removeClass("expChoiceHidden");
        $exp_selected.addClass("expChoiceExpand");

        $(window).scroll(function() {
            // if (!scrollDone) {

                let expId = $exp_selected.attr('id');
                console.log(expId);

                let top = 0;
                switch(expId) {
                    case "expChoiceMusique":
                        top = $('#music-workshop-section').offset().top;
                        break;
                    case "expChoiceDance":
                        top = $('#dance-section').offset().top;
                        break;
                    case "expChoiceExpo":
                        top = $('#expo-section').offset().top;
                        break;
                }
                $exp_selected.addClass("expChoiceOut");


            setTimeout(function() {
                    // document.getElementById("music-workshop-section").scrollIntoView({block: "end"});
                    // $(window).scrollTop(top);
                    // $('body').scrollTo('#music-workshop-section');
                    $('html, body').animate({
                        scrollTop: top
                    },
                    0,
                    function () {
                        console.log("callback");
                    });
                    // scrollDone = true;
                }, 500);
            // }
            // $exp_selected.addClass("expChoiceOut");
            // $(window).scrollTop(top);
            // $('body').scrollTo('#music-workshop-section');
            // $([document.documentElement, document.body]).animate({
            //     scrollTop: $("#expo-section").offset().top
            // }, 0);
        });

    });

    let menuPos = $("#menu-section").position();
    $(window).scroll(function() {
        let scrollPos = $(window).scrollTop();

        if ($exp_selected === undefined && scrollPos > menuPos.top) {
            // expo not selected yet, block scroll
            // const menuSection = document.querySelector("#menu-section");
            //bodyScrollLock.disableBodyScroll(menuSection);
            goToByScroll("menu-section");
        }

    });




});
