$(document).ready(function() {

    const menuSection = document.querySelector("#menu-section");

    var menuFixed = false;
    var $exp_selected = undefined;
    var canScroll = false;
    var countScroll = 0;
    let isExperience = true;
    let endAnimationDance = false;

    $(".expChoice").click(function() {
        bodyScrollLock.enableBodyScroll(menuSection);

        $(".expChoice").addClass('expChoiceHidden');

        $exp_selected = $(this);
        $exp_selected.removeClass("expChoiceHidden");
        $exp_selected.addClass("expChoiceExpand");

        let mouseAnimated = undefined;
        setTimeout(function() {
          mouseAnimated = document.querySelector("#mouse-animated-menuDance");
          mouseAnimated.classList.remove('fadeOut');
          mouseAnimated.classList.add('fadeInUp');
          canScroll = true;
        }, 5000);
        $(window).scroll(function(e) {
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
              $('html, body').animate({
                scrollTop: top
              }, 0, function () {
                // Transition Experience Dance
                if(expId == "expChoiceDance") {
                  bodyScrollLock.disableBodyScroll("#container");
                  goToByScroll("dance-section");
                  $("#dance-first-slide").css("background-color", "white");
                  $("#img-dancers").css("opacity", "1");
                  setTimeout(function() {
                    let mouseAnimated = document.querySelector("#mouse-animated-dance");
                    mouseAnimated.classList.remove('fadeOut');
                    mouseAnimated.classList.add('fadeInUp');
                    isExperience = false;
                  }, 10000);
                  $('#dance-section').on('mousewheel', function(e, delta) {
                    if(!isExperience) {
                      $("#img-dancers-2").css("opacity", "1");
                      let mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                      mouseAnimatedDance.classList.remove('fadeInUp');
                      mouseAnimatedDance.classList.add('fadeOut');
                      $("#img-dancers-3").css("opacity", "1");
                      mouseAnimatedDance.addEventListener('animationend', function() { endAnimationDance = true; });
                      if(endAnimationDance) {
                        this.scrollLeft -= (delta * 10);
                      }
                    }


                    //e.preventDefault();
                  });
                }
              });
              countScroll++;
            }, 1000);
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
            goToByScroll("menu-section");
        } /*else {
            let top = $('#menu-section').offset().top;
            $('html, body').animate({
                scrollTop: top
            },0);
        }*/

    });




});
