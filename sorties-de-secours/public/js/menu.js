$(document).ready(function() {

    const menuSection = document.querySelector("#menu-section");

    var menuFixed = false;
    var $exp_selected = undefined;
    var countScroll = 0;
    let isExperience = true;

    $(".expChoice").click(function() {
        var canScroll = false;

        // bodyScrollLock.enableBodyScroll(menuSection); // enable to avoid mousewheel event

        $(".expChoice").addClass('expChoiceHidden');

        $exp_selected = $(this);
        $exp_selected.removeClass("expChoiceHidden");
        $exp_selected.addClass("expChoiceExpand");

        let mouseAnimated = document.querySelector("#mouse-animated-menuDance");;
        setTimeout(function() {
            mouseAnimated.classList.remove('fadeOut');
            mouseAnimated.classList.add('fadeInUp');
            canScroll = true;
        }, 500);

        $('#menu-section').on('mousewheel', function(event, delta) {
            //$('window').scroll(function () { // enable to avoid mousewheel event

            if (!canScroll) {
                $('html, body').stop().animate({
                    scrollTop: $("#menu-section").offset().top
                }, 0);
            } else if (countScroll < 1) {
                mouseAnimated.classList.remove('fadeInUp');
                mouseAnimated.classList.add('fadeOut');
                $('html, body').stop().animate({
                    scrollTop: $("#menu-section").offset().top
                }, 0);
                let expId = $exp_selected.attr('id');
                let top = 0;

                switch(expId) {
                    case "expChoiceMusique":
                        top = $('#music-section').offset().top;
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
                    $('html, body').animate({
                        scrollTop: top
                    }, 0, function () {
                        // Transition Experience Dance
                        // bodyScrollLock.disableBodyScroll("#container"); // enable to avoid mousewheel event

                        if(expId === "expChoiceDance") {

                            $("#dance-first-slide").css("background-color", "white");
                            $("#img-dancers").css("opacity", "1");

                            setTimeout(function() {
                                const mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                                mouseAnimatedDance.classList.remove('fadeOut');
                                mouseAnimatedDance.classList.add('fadeInUp');
                                isExperience = false;
                            }, 10000);

                            $('#dance-section').on('mousewheel', function(e, delta) {
                                if(!isExperience) {
                                    $("#img-dancers-2").css("opacity", "1");
                                    // this.scrollLeft += (delta * 60);

                                    initArticle('dance');
                                }
                                //e.preventDefault();
                            });

                        } else if (expId === "expChoiceExpo") {

                        } else if (expId === "expChoiceMusique") {

                            initArticle('music');

                        }

                    });
                    countScroll++;
                }, 500);
            }

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
        }

    });


});
