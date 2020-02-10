let oldNumber = -1;
let figuresFixed = true;

$(document).ready(function() {
    $.getJSON("data/resources.json", function(json) {
        $('#range').on('input', function () {
            let step = 61;


            let numberRange = Math.trunc(parseInt($('#range').val())/step);
            // console.log(parseInt($('#range').val()) + ' / ' + step + ' = ' + numberRange);
            let rangeId = numberRange.toString();

            let figure_selected = $('.textFigure span').eq(numberRange);

            $('.textFigure span').each(function (index) {
                $('.textFigure span').eq(index).removeClass('figure-selected');
            });

            figure_selected.addClass("figure-selected");
            figure_selected.innerHTML = 'Aloo';

            // let modulo = numberRange;
            let dataFigure = json['figures'][rangeId];
            console.log(rangeId);
            let nb =  json['figures'][rangeId]['number'];
            let des =  json['figures'][rangeId]['description'];
            let item =  json['figures'][rangeId]['item'];

            $('#le_figure').text(nb);
            $('#light').text(des);
            $('#bolder').text(item);

            if (oldNumber !== nb) {
                set_music_volume("generalMusic", 0.05);
                change_music("voice", "sounds/numbers/"+nb+".mp3");
                set_music_volume("voice", 0.4);
                oldNumber = nb;
            }

        });
    });

    let figPos = $("#figures-section").position();
    let credPos = $("#credits-section").position();

    $(window).scroll(function(e) {

      let scrollPos = $(window).scrollTop();

      let figuresSection = $("#figures-section");
      if (scrollPos > figPos.top - 400 && scrollPos < credPos.top - 100 && figuresFixed) {
        e.preventDefault();
        bodyScrollLock.disableBodyScroll(figuresSection);
        $('html,body').animate({
            scrollTop: $("#figures-section").offset().top
        }, 200);
        setTimeout(function() {
          let endFigures = document.getElementById("end-figures");
          endFigures.classList.remove('fadeOut');
          endFigures.classList.add('fadeInUp');
          bodyScrollLock.clearAllBodyScrollLocks();
          figuresFixed = false;
        }, 2000);
      }


    });
});
