animArray = [];

$(document).ready(function () {

    //Pas compatible firefox et IE
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.toLowerCase().indexOf('MSIE') > -1) {
        $(".error-nav").show().css("display", "flex");

    } else {
        initDocument();
        loadAllAnims();
    }
});

planeEnded = false;
scroll = false;

$(window).on("load", function () {

    //hide popup
    $(window).on("click", function (e) {
        e.stopPropagation();
        $(".wrapper-popup").hide();
        $(".fond-popup").hide();
        $(".script").removeClass("clicked");
    });

    $(".loader").hide();

    //menu
    $(".menu-svg").attr("height", "150px");

    //avion revient au point de départ
    scrollTop();

    //detecter scroll
    $("section").on("wheel", function (e) {

        if (!planeEnded) {
            $(".scroll-svg").hide();
            scrollMap();

        } else if (scroll) {
            let s = $("section:visible").first();

            if (e.originalEvent.deltaY > 0 && !s.hasClass("no-scroll")) { //scroll next
                //$(".scroll-svg").hide();
                slideL(s);
                scroll = false;

            } else if (e.originalEvent.deltaY < 0 && !s.hasClass("no-back")) { //scroll back
                //$(".scroll-svg").hide();
                slideR(s);
                scroll = false;
            }
        }
        scrollStop();
    });

    //boutton action next
    $(".next").on("click", function () { //button action slide
        let s = $("section:visible").first();

        if (!planeEnded) {
            $(this).hide();
            $("html, body").animate({scrollTop: $(document).height()}, 3000);
            setTimeout(go, 3100);
            function go() {
                planeEnded = true;
                let s = $("section:visible").first();
                $("section").css({"top": $(".main").height() - s.next().height()});
                $('html, body').css({
                    overflow: 'hidden'
                });
                slideL(s);
            }

        } else if ($(this).hasClass("aide")) {
            startAnimNow(animArray[3], s.next());
            setTimeout(function () {
                s.delay(1000).hide(0);
            }, 2600);

        } else if ($(this).hasClass("seul2")) {
            startAnimNow(animArray[3], s);

        } else if ($(this).hasClass("tashi") || $(this).hasClass("tentes")) {
            slideL(s.next());
            s.delay(1000).hide(0);

        } else {
            slideL(s);
        }
    });

    //bouton retour crédits
    $(".back-svg").on("click", function () {
        let s = $("section:visible").first();
        slideR(s);
    });

    //hover puce
    $(".puce").hover(function () {
        $(".fond-popup").show();
    }, function () {
        $(".fond-popup").hide();
    });

    $(".puce-n1").hover(function () {
        let right = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
        $(".popup1").show().css({"top": $(this).offset().top, "right": right})
    }, function () {
        $(".popup1").hide();
    });

    $(".puce-n2").hover(function () {
        $(".popup2").show().css({"top": $(this).offset().top, "left": $(this).offset().left})
    }, function () {
        $(".popup2").hide();
    });

    $(".puce-n3").hover(function () {
        $(".popup3").show().css({"top": $(this).offset().top, "left": $(this).offset().left})
    }, function () {
        $(".popup3").hide();
    });

    //button intro commencer histoire
    $(".btn-intro1").on("click", function () {
        $(".intro").hide();
        $(".intro2").show();
        animBarCasque();
    });

    //lien découvrir autres récits
    $(".p-recits").on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/produit/abonnement/");
    });

    //texte audio
    $(".script").on("click", function (e) {
        if (!$("section:visible").first().hasClass("no-script")) {
            if (!$(this).hasClass("clicked")) {
                $("section:visible").first().css("z-index", "auto");
                e.stopPropagation();
                $(".wrapper-popup").show();
                $(".fond-popup").show();
                $(this).addClass("clicked");
            } else {
                $(this).removeClass("clicked");
            }
        }
    });

    //texte audio
    $(".script").hover(function () {
        $(this).attr("src", $(this).attr("data") + "-h.svg");
        $(".script-txt").css("visibility", "");
    }, function () {
        $(this).attr("src", $(this).attr("data") + ".svg");
        $(".script-txt").css("visibility", "hidden");
    });

    //audio
    $(".player").on("click", function (e) {
        e.stopPropagation();
        let s = $("section:visible").first();
        if (s.hasClass("playing")) {
            $("section:visible").first().removeClass("playing");
            $(this).attr("src", $(this).attr("data") + ".svg");
            $(".player-txt:visible").first().attr("src", $(".player-txt:visible").first().attr("data") + ".svg");
            $(this).removeClass("click");
            $(this).parent().next()[0].pause();
            $(this).parent().next()[0].currentTime = 0;
        } else {
            $("section:visible").first().addClass("playing");
            $(this).parent().next()[0].play();
            $(this).attr("src", $(this).attr("datac") + ".svg");
            $(".player-txt:visible").first().attr("src", $(".player-txt:visible").attr("datac") + ".svg");
            $(this).addClass("click");
        }
    });

    //audio
    $(".player").hover(function () {
        if ($(this).hasClass("click")) {
            $(this).attr("src", $(this).attr("datac") + "-h.svg");
            $(".player-txt").css("visibility", "");
        } else {
            $(this).attr("src", $(this).attr("data") + "-h.svg");
            $(".player-txt").css("visibility", "");
        }
    }, function () {
        if ($(this).hasClass("click")) {
            $(this).attr("src", $(this).attr("datac") + ".svg");
            $(".player-txt").css("visibility", "hidden");
        } else {
            $(this).attr("src", $(this).attr("data") + ".svg");
            $(".player-txt").css("visibility", "hidden");
        }
    });

    //audio ended
    $('audio').on('ended', function (e) {
        e.stopPropagation();
        let s = $("section:visible").first();
        if (s.hasClass("playing")) {
            $("section:visible").first().removeClass("playing");
            $(".player:visible").first().attr("src", $(".player:visible").attr("data") + ".svg");
            $(".player-txt:visible").first().attr("src", $(".player-txt:visible").first().attr("data") + ".svg");
            $(".player:visible").first().removeClass("click");
            $(".player:visible").first().parent().next()[0].pause();
            $(".player:visible").first().parent().next()[0] = 0;
        }
    });

    //button abonnement
    $(".abo").on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/produit/abonnement/");
    });

    //menu
    $(".line").attr("stroke", "transparent");
    $(".label").attr("fill", "transparent");
    $(".circle").attr("fill", "transparent");
    $(".sel").attr("fill", "transparent");
    $(".menu").hide();

    $(".sel, .menu").hover(function (e) {
        let numSec = $("section:visible").first().attr("menu");
        let numHover = 0;
        if ("sel" in e.delegateTarget.attributes) {
            numHover = $(this).attr("menu");
        }
        menuHover(numHover, numSec, true);
        //$(".menu-svg").css("scale", '1.5');
    }, function () {
        let numSec = $("section:visible").first().attr("menu");
        menuHover(0, numSec, false);
        //$(".menu-svg").css("scale", "1")
    });

    $(".menu").mouseleave(function () {
        let numSec = $("section:visible").first().attr("menu");
        for (let i = 1; i <= numSec; i++) {
            $("#line-" + i).attr("stroke", "transparent");
            $("#label-" + i).attr("fill", "transparent");
        }
    });

    $(".sel").on("click", function () {
        slideM($("section:visible").first(), $("section[menu='" + $(this).attr("menu") + "']").first());
    });

    let BDM = $(".BDM");
    let Audencia = $(".Audencia");
    let AGR = $(".AGR");
    let Polytech = $(".Polytech");

    let Hyblab = $(".Hyblab");
    let Medialab = $(".Medialab");
    let OpenSource = $(".Open-Source");
    let UnivNantes = $(".Univ-Nantes");
    let CC = $(".CC");

    let AR = $(".AR");
    let SP = $(".SP");
    let RG = $(".RG");
    let JG = $(".JG");
    let RD = $(".RD");
    let TOD = $(".TOD");
    let ZP = $(".ZP");
    let JBG = $(".JBG");
    let AL = $(".AL");
    let WM = $(".WM");

    $(".svg-lien").hover(function () {
        $(this).css({"cursor": "pointer"});
    }, function () {

    });

    $(BDM).on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/");
    });

    $(WM).on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/");
    });

    $(AGR).on("click", function () {
        window.open("https://www.agrnantes.fr/");
    });

    $(Audencia).on("click", function () {
        window.open("https://www.audencia.com/");
    });

    $(Polytech).on("click", function () {
        window.open("https://polytech.univ-nantes.fr/");
    });

    $(Hyblab).on("click", function () {
        window.open("https://www.hyblab.fr/");
    });

    $(Medialab).on("click", function () {
        window.open("https://medialab.sciencespo.fr/");
    });

    $(OpenSource).on("click", function () {
        window.open("https://opensource.org/");
    });

    $(UnivNantes).on("click", function () {
        window.open("https://www.univ-nantes.fr/");
    });

    $(CC).on("click", function () {
        window.open("https://creativecommons.org/licenses/by/2.0/");
    });

    $(AR).on("click", function () {
        window.open("https://www.linkedin.com/in/ad%C3%A8le-rafii/");
    });

    $(SP).on("click", function () {
        window.open("https://www.linkedin.com/in/st%C3%A9phen-proux-a01929194/");
    });

    $(RG).on("click", function () {
        window.open("https://www.linkedin.com/in/roxanne-guillaume");
    });

    $(JG).on("click", function () {
        window.open("https://www.linkedin.com/in/juliette-guihard/");
    });

    $(RD).on("click", function () {
        window.open("https://www.linkedin.com/in/r%C3%A9mi-delagarde-676492151/");
    });

    $(TOD).on("click", function () {
        window.open("https://www.linkedin.com/in/thierno-oumar-diallo-114b31163/");
    });

    /*$(ZP).on("click", function () {
        window.open("https://creativecommons.org/licenses/by/2.0/");
    });*/

    $(JBG).on("click", function () {
        window.open("https://www.linkedin.com/in/jean-baptiste-guy-84a6a3177/");
    });

    $(AL).on("click", function () {
        window.open("https://www.linkedin.com/in/anthony-lusteau-336ab1154/");
    });
});

function loadAnim(id, path, loop) {
    let wrapper = document.getElementsByClassName("anim")[id];
    let anim = bodymovin.loadAnimation({
        wrapper: wrapper,
        animType: 'svg',
        loop: loop,
        autoplay: false,
        path: path
    });
    animArray[id] = anim;
}

function initDocument() {
    $("section").hide();
    $(".intro1").show();
    $(".intro2").hide();
    $(".div-txt").hide();
    $(".scroll-svg-story").hide();

    $("section").first().show().addClass("active"); //map
    $(".div-txt").first().show(); //map
}

function loadAllAnims() {
    loadAnim(0, "json/anim-fleuve.json", false);
    loadAnim(1, "json/anim-attaque.json", false);
    loadAnim(2, "json/anim-arrivee.json", false);
    loadAnim(3, "json/anim-chute.json", false);
    loadAnim(4, "json/anim-seul.json", false);
    loadAnim(5, "json/anim-grotte.json", true);

    animArray[3].addEventListener('complete', function () {
        setTimeout(function () {
            animArray[3].destroy();
            loadAnim(3, "json/anim-chute.json", false);
        }, 1500);
    });
}

function scrollTop() {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);
}

i = 0;
size = 100;

function animBarCasque() {
    $(".bar2-casque").css("width", i + "%");
    i++;
    if (i <= size) {
        setTimeout(animBarCasque, 30);
    } else {
        $(".intro2").hide();
        $('html, body').css({
            overflowY: 'scroll',
        });
    }
}

let menuInit = false;
let menuSize;

function menu(num, white) {

    if (!menuInit) {
        menuSize = $("#menu-g")[0].getBoundingClientRect().width;
        menuInit = true;
    }

    $(".menu-svg").attr("width", menuSize);

    for (let i = 0; i < num; i++) {
        $(".line").attr("stroke", "transparent");
        $(".label").attr("fill", "transparent");
        $(".circle").attr("fill", "transparent");
        $(".sel").attr("fill", "transparent");
    }

    if (white) {
        for (let i = 1; i <= 8; i++) {
            $(".circle").attr("stroke", "#FFFFFF");
            $(".vec").attr("stroke", "#FFFFFF");
        }
        for (let i = 1; i <= num; i++) {
            $("#circle-" + i).attr("fill", "#FFFFFF");
        }
    } else {
        for (let i = 1; i <= 8; i++) {
            $(".circle").attr("stroke", "#485F62");
            $(".vec").attr("stroke", "#485F62");
        }
        for (let i = 1; i <= num; i++) {
            $("#circle-" + i).attr("fill", "#485F62");
        }
    }


}

function menuHover(numHover, numSec, hover) {
    if (hover && numHover !== "0" && numHover <= numSec) {
        if ($("section:visible").first().hasClass("has-menu-b")) {
            $("#line-" + numHover).attr("stroke", "#FFFFFF");
            $("#label-" + numHover).attr("fill", "#FFFFFF");
            $("#line-" + numSec).attr("stroke", "#FFFFFF");
            $("#label-" + numSec).attr("fill", "#FFFFFF");
        } else {
            $("#line-" + numHover).attr("stroke", "#485F62");
            $("#label-" + numHover).attr("fill", "#485F62")
            $("#line-" + numSec).attr("stroke", "#485F62");
            $("#label-" + numSec).attr("fill", "#485F62");
        }
    } else if (hover) {
        if ($("section:visible").first().hasClass("has-menu-b")) {
            $("#line-" + numSec).attr("stroke", "#FFFFFF");
            $("#label-" + numSec).attr("fill", "#FFFFFF");
        } else {
            $("#line-" + numSec).attr("stroke", "#485F62");
            $("#label-" + numSec).attr("fill", "#485F62");
        }
    } else {
        for (let i = 1; i < numSec; i++) {
            $("#line-" + i).attr("stroke", "transparent");
            $("#label-" + i).attr("fill", "transparent");
        }
    }
}

//slideL
function slideL(s) {

    displayInfos(s, "next");

    $(".puce").hide();
    //s.children(".div-txt").delay(1000).hide(0);

    s.css("z-index", "-1");
    s.next().css({"z-index": "1"});
    s.delay(1000).hide(0);
    s.next().show("slide", {direction: "right"}, 1000);

    //s.next().children(".div-txt").delay(1100).show(0);

    if (s.next().hasClass("anim-fleuve")) {
        startAnim(animArray[0]);
        displayTxt();
    } else if (s.next().hasClass("anim-attaque")) {
        startAnim(animArray[1]);
    } else if (s.next().hasClass("anim-arrivee")) {
        startAnim(animArray[2]);
    } else if (s.next().hasClass("anim-seul")) {
        startAnim(animArray[4]);
    } else if (s.next().hasClass("anim-grotte")) {
        startAnim(animArray[5]);
    } else if (s.next().hasClass("sec-txt-walk")) {
        displayPopup(1);
    } else if (s.next().hasClass("sec-txt-help")) {
        displayPopup(2);
    } else if (s.next().hasClass("sec-txt-tentes")) {
        displayPopup(3);
    }
}

//clic menu
function slideM(scur, snew) {

    if (parseInt(scur.attr("n")) > parseInt(snew.attr("n"))) {

        displayInfos(snew, "menu");

        scur.children(".div-txt").delay(1000).hide(0);
        $(".puce").hide();
        scur.css("z-index", "-1");
        snew.css("z-index", "1");
        scur.delay(1000).hide(0);
        snew.show("slide", {direction: "left"}, 1000);
        //snew.children(".div-txt").delay(1000).show(0);

        if (snew.hasClass("sec-txt-walk")) {
            displayPopup(1);
        } else if (snew.hasClass("sec-txt-help")) {
            displayPopup(2);
        } else if (snew.hasClass("sec-txt-tentes")) {
            displayPopup(3);
        }
    }
}

//slideR
function slideR(s) {

    displayInfos(s, "back");

    s.children(".div-txt").delay(1000).hide(0);
    $(".puce").hide();
    s.css("z-index", "-1");
    s.prev().css("z-index", "1");
    s.delay(1000).hide(0);
    s.prev().show("slide", {direction: "left"}, 1000);
    //s.prev().children(".div-txt").delay(1000).show(0);

    if (s.prev().hasClass("sec-txt-walk")) {
        displayPopup(1);
    } else if (s.prev().hasClass("sec-txt-help")) {
        displayPopup(2);
    } else if (s.prev().hasClass("sec-txt-tentes")) {
        displayPopup(3);
    }
}

//user scroll stop
function scrollStop() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        scroll = true;
    }, 500));
}

//avion arrivee
function scrollMap() {
    if ($(window).scrollTop() + $(window).height() + 1 >= $(document).height()) {
        $('html, body').css({
            overflow: 'hidden'
        });
        //scroll = true;
        planeEnded = true;
        let s = $("section:visible").first();
        $("section").css({"top": $(".main").height() - s.next().height()});
    }
}

function displayPopup(id) {
    $(".puce-n" + id).delay(1000).show(0);
}

//affichage texte en meme temps que le fleuve
function displayTxt() {
    $(".txt-title-fleuve").hide();
    $(".txt-p-fleuve1").hide();
    $(".txt-p-fleuve2").hide();

    setTimeout(function () {
        $(".txt-title-fleuve").show();
    }, 2000);

    setTimeout(function () {
        $(".txt-p-fleuve1").show();
    }, 2600);

    setTimeout(function () {
        $(".txt-p-fleuve2").show();
    }, 2800);
}

//start apres fin de la slide
function startAnim(anim) {
    setTimeout(function () {
        anim.play();
    }, 1100);
}

//start tout de suite
function startAnimNow(anim, s) {
    anim.play();
    animArray[3].addEventListener('complete', function () {
        if ($(".playing")) {
            $(".playing").children(".sound-icon").children(".player").trigger("click");
        }
        slideL(s);
        s.delay(1000).hide(0);
    });
}

function displayInfos(s, source) {

    if (source === "back") {
        if (s.prev().hasClass("has-menu")) {
            $(".menu").show();
            menu(s.prev().attr("menu"), s.prev().hasClass("has-menu-b"))
        } else {
            $(".menu").hide();
        }

        if ($(".playing")) {
            $(".playing").children(".sound-icon").children(".player").trigger("click");
        }

        $(".div-txt").not($(s.prev()).children(".div-txt")).delay(1000).hide(0);
        $(".scroll-svg-story").not($(s.prev()).children(".scroll-svg-story")).delay(1000).hide(0);

        $(s.prev()).children(".div-txt").delay(1100).show(0);
        $(s.prev()).children(".scroll-svg-story").delay(1100).show(0);

    } else if (source === "next") {

        if (s.next().hasClass("has-menu")) {
            $(".menu").show();
            menu(s.next().attr("menu"), s.next().hasClass("has-menu-b"))
        } else {
            $(".menu").hide();
        }

        if ($(".playing")) {
            $(".playing").children(".sound-icon").children(".player").trigger("click");
        }

        $(".div-txt").not($(s.next()).children(".div-txt")).delay(1000).hide(0);
        $(".scroll-svg-story").not($(s.next()).children(".scroll-svg-story")).delay(1000).hide(0);

        $(s.next()).children(".div-txt").delay(1100).show(0);
        $(s.next()).children(".scroll-svg-story").delay(1100).show(0);

    } else if (source === "menu") {
        if (s.hasClass("has-menu")) {
            $(".menu").show();
            menu(s.attr("menu"), s.hasClass("has-menu-b"))
        } else {
            $(".menu").hide();
        }

        if ($(".playing")) {
            $(".playing").children(".sound-icon").children(".player").trigger("click");
        }

        $(".div-txt").not($(s.children(".div-txt"))).delay(1000).hide(0);
        $(".scroll-svg-story").not($(s.children(".scroll-svg-story"))).delay(1000).hide(0);

        $(s).children(".div-txt").delay(1100).show(0);
        $(s).children(".scroll-svg-story").delay(1100).show(0);
    }
}