$(document).ready(function() {

  const menuSection = document.querySelector("#menu-section");

  var menuFixed = false;
  var $exp_selected = undefined;
  var choicesId = ["expChoiceExpo", "expChoiceMusique", "expChoiceDance"];

  function choiceClick(id) {
    $("#"+id).click(function() {
      var canScroll = false;
      var countScroll = 0;
      let isExperience = true;
      let endAnimationDance = false;
      bodyScrollLock.clearAllBodyScrollLocks(); // enable to avoid mousewheel event

      $(".expChoice").addClass('expChoiceHidden');

      $exp_selected = $(this);
      $exp_selected.removeClass("expChoiceHidden");
      $exp_selected.addClass("expChoiceExpand");

      let mouseAnimatedExpo = document.querySelector("#mouse-animated-menuExpo");
      let mouseAnimatedMusic = document.querySelector("#mouse-animated-menuMusic");
      let mouseAnimatedDance = document.querySelector("#mouse-animated-menuDance");
      setTimeout(function() {
        mouseAnimatedExpo.classList.remove('fadeOut');
        mouseAnimatedExpo.classList.add('fadeInUp');
        mouseAnimatedMusic.classList.remove('fadeOut');
        mouseAnimatedMusic.classList.add('fadeInUp');
        mouseAnimatedDance.classList.remove('fadeOut');
        mouseAnimatedDance.classList.add('fadeInUp');
      }, 5000);

      setTimeout(function() {
        canScroll = true;
      }, 2500);

      $(window).scroll(function(e) {
        if (!canScroll) {
          $('html, body').stop().animate({
            scrollTop: $("#menu-section").offset().top
          }, 0);
        } else if (countScroll < 1) {
          if(mouseAnimatedExpo.classList.contains("fadeOut")) {
            setTimeout(function() {
              mouseAnimatedExpo.classList.remove('fadeInUp');
              mouseAnimatedExpo.classList.add('fadeOut');
            }, 7000);
          } else {
            mouseAnimatedExpo.classList.remove('fadeInUp');
            mouseAnimatedExpo.classList.add('fadeOut');
          }
          if(mouseAnimatedMusic.classList.contains("fadeOut")) {
            setTimeout(function() {
              mouseAnimatedMusic.classList.remove('fadeInUp');
              mouseAnimatedMusic.classList.add('fadeOut');
            }, 7000);
          } else {
            mouseAnimatedMusic.classList.remove('fadeInUp');
            mouseAnimatedMusic.classList.add('fadeOut');
          }
          if(mouseAnimatedDance.classList.contains("fadeOut")) {
            setTimeout(function() {
              mouseAnimatedDance.classList.remove('fadeInUp');
              mouseAnimatedDance.classList.add('fadeOut');
            }, 7000);
          } else {
            mouseAnimatedDance.classList.remove('fadeInUp');
            mouseAnimatedDance.classList.add('fadeOut');
          }
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
              bodyScrollLock.disableBodyScroll("#container"); // enable to avoid mousewheel event
              if(expId === "expChoiceDance") {

                // sound
                change_music("voice", "sounds/dance/experience.mp3");
                set_music_volume("voice", 0.4);

                change_music("danceMusic", "sounds/dance/music.mp3");
                set_music_volume("danceMusic", 0.2);
                setTimeout(function() {
                  set_music_volume("danceMusic", 0.4);
                }, 15500);

                set_music_pause("generalMusic");

                $("#dance-first-slide").css("background-color", "white");
                $("#img-dancers").css("opacity", "1");

                setTimeout(function() {
                    let danceTextInstruction = document.querySelector("#dance-text-instruction");
                    danceTextInstruction.classList.add('dance-text-instruction-hidden');
                }, 4500);

                setTimeout(function() {
                  let mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                  mouseAnimatedDance.classList.remove('fadeOut');
                  mouseAnimatedDance.classList.add('fadeInUp');
                  isExperience = false;
                }, 5000);

                $('#dance-section').on('mousewheel', function(e, delta) {
                  if(!isExperience) {
                    $("#img-dancers-2").css("opacity", "1");
                    let mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                    mouseAnimatedDance.classList.remove('fadeInUp');
                    mouseAnimatedDance.classList.add('fadeOut');
                    $("#img-dancers-3").css("opacity", "1");
                    mouseAnimatedDance.addEventListener('animationend', function() { endAnimationDance = true; });
                    if(endAnimationDance) {
                      initArticle('dance');
                    }
                  }
                  //e.preventDefault();
                });
              } else if(expId === "expChoiceMusique") {
                set_music_pause("generalMusic");

                change_music("voice", 'sounds/music_workshop/experience.mp3');
                set_music_volume("voice", 0.4);

                setTimeout(function() {
                  let mouseAnimatedMusic = document.querySelector("#mouse-animated-music");
                  mouseAnimatedMusic.classList.remove('fadeOut');
                  mouseAnimatedMusic.classList.add('fadeInUp');
                }, 5000);
              } else if(expId === "expChoiceExpo") {
                change_music("voice", "sounds/expo/experience.m4a");
                set_music_volume("voice", 0.4);

                set_music_play("ambianceExpo");
                set_music_volume("ambianceExpo", 0.06);
                set_music_pause("generalMusic");
                change_music("expoMusic", "sounds/expo/music.mp3");
                set_music_volume("expoMusic", 0.02);
                setTimeout(function() {
                  let mouseAnimatedExpo = document.querySelector("#mouse-animated-expo");
                  mouseAnimatedExpo.classList.remove('fadeOut');
                  mouseAnimatedExpo.classList.add('fadeInUp');
                }, 5000);
              }

            });
            countScroll++;
          }, 500);
        }

      });
    });
  }

  choicesId.forEach(choiceId => {
    choiceClick(choiceId);
  });

  let menuPos = $("#menu-section").position();
  let figPos = $("#figures-section").position();
  $(window).scroll(function(e) {

    let scrollPos = $(window).scrollTop();

    if (!menuFixed && $exp_selected === undefined && scrollPos > menuPos.top - 500 && scrollPos < figPos.top - 100) {
      // expo not selected yet, block scroll
      menuFixed = true;

      // e.preventDefault();
      bodyScrollLock.disableBodyScroll(menuSection);
      goToByScroll("menu-section", 400);
    }

  });


});
