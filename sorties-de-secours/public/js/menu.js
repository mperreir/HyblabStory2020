$(document).ready(function() {
  $("#menu-expo-link").hover(function() {
    $("#menu-expo").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-expo").css("filter", "brightness(80%)");
  });
  $("#menu-music-link").hover(function() {
    $("#menu-music").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-music").css("filter", "brightness(80%)");
  });
  $("#menu-dance-link").hover(function() {
    $("#menu-dance").css("filter", "brightness(100%)");
  }, function(){
    $("#menu-dance").css("filter", "brightness(80%)");
  });

  //const menuSection = document.querySelector("#menu-section");
  //console.log($("#menu-section").position());
  //bodyScrollLock.disableBodyScroll(menuSection);
});
