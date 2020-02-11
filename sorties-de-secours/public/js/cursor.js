$(document).ready(function() {

    let cursor = document.querySelector('.cursor');
    let cursorinner = document.querySelector('.cursorinner');

    document.addEventListener('mousemove', function(e){
        console.log('cursor');
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });

    document.addEventListener('mousemove', function(e){
        console.log('cursorinner');
      let x = e.clientX;
      let y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });


});
