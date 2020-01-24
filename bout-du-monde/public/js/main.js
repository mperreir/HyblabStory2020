$(document).ready(function () {

    $(".answer").hide();
    $("#retry").hide();

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    $("button.choice").on("click", function () {

        if ($(this).hasClass("choice1")) {
            if ($(this).attr("id") === "tashi") {
                $("#s7").show().css('display', 'flex');
                $("#scroll").delay(1100).show(0);
            } else {
                $("#s6").show().css('display', 'flex');
            }

        } else if ($(this).hasClass("choice2")) {
            if ($(this).attr("id") === "catch") {
                $("#s11").show().css('display', 'flex');
                $("#scroll").delay(1100).show(0);
            } else {
                $("#s10").show().css('display', 'flex');
            }

        } else if ($(this).hasClass("choice3")) {
            if ($(this).attr("id") === "food") {
                $("#s15").show().css('display', 'flex');
                $("#scroll").delay(1100).show(0);
            } else {
                $("#s14").show().css('display', 'flex');
            }
        }

        $("section:visible").first().slideUp(1000).css('display', 'flex');
    });

    $("button.back").on("click", function () {
        $("section:visible").first().next().show().css('display', 'flex');
        $("section:visible").first().slideUp(1000).css('display', 'flex');
        $("#scroll").delay(1100).show(0);
    });

    $("button.attack").on("click", function () {
        $("section:visible").first().next().show().css('display', 'flex');
        $("section:visible").first().slideUp(1000).css('display', 'flex');
        $("#scroll").delay(1100).show(0);
    });

    $("#scroll").on("click", function () {
       $(window).trigger("wheel");
    });

    $("#retry").on("click", function () {
        /*$("section").show().css('display', 'flex');
        $(".answer").hide();
        $("section:visible").first().slideDown(1000).css('display', 'flex');
        $("#scroll").delay(1100).show(0);
        $("#retry").hide();*/

        /*$("#sec-story").hide();
        $("#s1-map").show();*/
        location.reload();
    });

    let scroll = true;

    $(window).on("wheel", function (e) {

        let triggerWaitTransition = false;
        let section = $("section:visible").first();

        if (scroll && !section.hasClass("end") && !section.hasClass("choice") && !section.hasClass("attack") && section.attr("id") !== "s6" && section.attr("id") !== "s10" && section.attr("id") !== "s14") {

            if (e.isTrigger !== undefined || e.originalEvent.deltaY > 0 && !section.hasClass("choice")) {
                section.slideUp(1000).css('display', 'flex');
                $("#scroll").hide();
                triggerWaitTransition = true;

            } else if (!section.hasClass("answer") && !section.hasClass("start")) {
                section.prev().slideDown(1000).css('display', 'flex');
                $("#scroll").hide();
                triggerWaitTransition = true;
            }
        }

        if(triggerWaitTransition) {
            scroll = false;
            waitTransition();
        }
    });

    let timeout = null;

    function waitTransition() {

        clearTimeout(timeout);

        timeout = setTimeout(function () {

            let section = $("section:visible").first();
            scroll = true;

            if(section.hasClass("choice") || section.hasClass("end") || section.hasClass("attack") || section.attr("id") === "s6" || section.attr("id") === "s10") {
                $("#scroll").hide();
            } else {
                $("#scroll").show();
            }

            if(section.hasClass("end")) {
                $("#retry").show().css('display', 'flex');
            }

        }, 1100);
    }

    /*let anim;

    let animData = {
        container: document.getElementById('animation1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'data.json'
    };

    anim = bodymovin.loadAnimation(animData);

    anim.addEventListener('DOMLoaded', function () {
        console.log("loaded");
    });*/

});