'use strict';

jQuery(function($){
    // -------------------------------------------------------------
    //   One Item Per Frame
    // -------------------------------------------------------------
    (function () {
        var $frame = $('#oneperframe');
        var $wrap  = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 2500,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
        }, {
            active: function(evt, index) {
                let isKeySlide = false;

                console.log('Active item : ' + index);
                console.log(this.items[index].el.classList);

                /* Animation vidéo transition époque */
                let select = this.items[index].el.getElementsByClassName("inslide-decor");
                if (select.length > 0) {
                    let srcFrom = document.getElementById("bg-decor").getAttribute('src');
                    let srcTo = select[0].getAttribute('src');
                    if (srcFrom !== srcTo){
                        decorTransition(srcFrom, srcTo);
                    }
                }

                /* Animation entrée slide clé */
                select = this.items[index].el.getElementsByClassName('key-slide-content');
                if (select.length > 0) {
                    isKeySlide = true;
                    setTimeout(function () {
                        $(select[0]).fadeIn(2000);
                    }, 2300);
                }


                if (this.items[index].el.classList.contains('stop-scroll')) {
                    $frame.sly('set', {
                        scrollBy: 0,
                        dragHandle: 0,
                        dynamicHandle: 0,
                        clickBar: 0,
                        mouseDragging: 0,
                        touchDragging: 0,
                    });
                }
                else {
                    $frame.sly('set', {
                        scrollBy: 1,
                        dragHandle: 1,
                        dynamicHandle: 1,
                        clickBar: 1,
                        mouseDragging: 1,
                        touchDragging: 1,
                    });
                }
                if(isKeySlide){
                    setTimeout(function () {
                        launchSpeech(index);
                    }, 4000);
                }
                else{
                    launchSpeech(index);
                }
            }
            }
        );

        // Pause button
        $wrap.find('.next2').on('click', function() {
            $frame.sly('next');
            $frame.sly('next');
        });

        $wrap.find('.next').on('click', function() {
            $frame.sly('next');
        });

        $wrap.find('.prev').on('click', function() {
            $frame.sly('prev');
        });

    }());
});


/**
 * Launch the text for the slide associated to the index
 * @param {int} index
 */
function launchSpeech(index) {
    index = parseInt(index);
    switch(index) {
        case 5:
            speak('Pablo', index);
            break;
        case 6:
            speak('Pablo', index);
            break;
        case 10:
            speak('Emma', index, 2);
            break;
        default:
            speak('Emma', index);
            break;
    }
}

/**
 *
 * @param personne
 * @param {int} slide
 * @param {int} paragraph
 */
function speak(personne, slide, paragraph= 0) {
    slide = parseInt(slide);
    if (![2, 3].includes(slide)) {
        if (slide === 1) {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_1;
        } else if ([4, 5, 6].includes(slide) && personne === 'Emma') {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue_periode_2;
            document.getElementById('textBox' + slide).style.width = '26vw';
            document.getElementById('textBox' + slide).style.left = '4vw';
        } else if(personne === 'Alain'){
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue;
            document.getElementById('textBox' + slide).style.width = '28vw';
            document.getElementById('textBox' + slide).style.left = '2vw';
        } else {
            document.getElementById('textBox' + slide).src = Personnage[personne].boite_dialogue;
            document.getElementById('textBox' + slide).removeAttribute("style");
        }


        let options = {
            strings: Personnage[personne].dialogues[slide][paragraph].texte,
            typeSpeed: 30,
            fadeOut: true
        };

        if (Personnage[personne].dialogues[slide][paragraph].suivant) options.onComplete = (self) => {
            self.destroy();
            speak(
                Personnage[personne].dialogues[slide][paragraph].suivant.personnage,
                Personnage[personne].dialogues[slide][paragraph].suivant.slide,
                Personnage[personne].dialogues[slide][paragraph].suivant.paragraphe
            );
        };
        else if ([0, 3, 4, 6, 7, 9].includes(slide)) options.onComplete = (self) => {
            self.destroy();
            inviteToScroll();
        };
        else if (slide === 1 && Personnage[personne].dialogues[slide][paragraph].suivant !== '') {
            options.onComplete = (self) => {
                document.getElementById('bg-decor').setAttribute('src', 'img/decors/decor_1900.stripped.webp');
                document.getElementById('lettre-icon').style.visibility = 'visible';
                document.getElementById('lettre-icon').classList.add('bounce');
                document.getElementById('livre-icon').style.visibility = 'visible';
                document.getElementById('livre-icon').classList.add('bounce');
                document.getElementById('lettre-icon').addEventListener('click', () => self.destroy());
                document.getElementById('livre-icon').addEventListener('click', () => self.destroy());
            }
        }
        else options.onComplete = (self) => self.destroy();

        new Typed('#textBoxTyped' + slide, options);
    }
}

function inviteToScroll() {
    document.getElementById('mouse-scroll-tip').style.display = 'inline';
}
