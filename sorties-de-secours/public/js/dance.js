$(document).ready(function() {

  var dancePosTop = {
    top: $('#dance-section').offset().top,
    bottom: $('#dance-section').offset().top + $('#dance-section').height()
  };

  var musicPosTop = {
    top: $('#music-workshop-section').offset().top,
    bottom: $('#music-workshop-section').offset().top + $('#music-workshop-section').height()
  };

  $(window).scroll(function() {
    if($(window).scrollTop() >= dancePosTop.top && $(window).scrollTop() < musicPosTop.top - 100) {
      console.log("YOUPIII");
    }
  });

});
