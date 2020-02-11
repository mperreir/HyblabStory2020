let contactFixed = true;

$(document).ready(function () {
    $('#btnSend').click(function (event) {
        var email = 'cestparla@sortiesdesecours.com';
        var subject = 'Ici votre sujet ';
        var emailBody = 'Ici votre message (Pour la planète pensez à vider votre boîte mail régulièrement)';
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+"?attach="+attach;
    });

    let contPos = $("#contact-section").position();
    let credPos = $("#credits-section").position();

    $(window).scroll(function(e) {

      let scrollPos = $(window).scrollTop();

      let contactSection = $("#contact-section");
      if (scrollPos > contPos.top - 400 && scrollPos < credPos.top - 100 && contactFixed) {
        e.preventDefault();
        bodyScrollLock.disableBodyScroll(contactSection);
        let logoAnimated = document.getElementById("contact-animated-logo");
        logoAnimated.classList.remove("fadeOut");
        logoAnimated.classList.add("fadeInUp");
        $('html,body').animate({
            scrollTop: $("#contact-section").offset().top
        }, 200);
        setTimeout(function() {
          let endFigures = document.getElementById("end-contact");
          endFigures.classList.remove('fadeOut');
          endFigures.classList.add('fadeInUp');
          bodyScrollLock.clearAllBodyScrollLocks();
          contactFixed = false;
        }, 2000);
      }


    });


});
