let initSlide8 = function(){


    function myMove(id,top1,left1) {

    var elem = document.getElementById(id);

    var top = 0;
    var left = 50;

    let coeff1 = (top1)/8;
    let coeff2 = (left1-50)/8;

    if(left1<=50){
      var id = setInterval(frame, 100);

      function frame() {

        if (top >= top1) {
          clearInterval(id);
        } else {
          top=top+coeff1;
          left=left+coeff2;
          elem.style.top = top + '%';
          elem.style.left = left + '%';
        }
      }
    }else if(left1>50){
      var id = setInterval(frame, 100);

      function frame() {

        if (top >= top1 || left >= 74) {
          clearInterval(id);
        } else {
          top=top+coeff1;
          left=left+coeff2;
          elem.style.top = top + '%';
          elem.style.left = left + '%';
        }
      }


    }
  }


    myMove("slide8-img1", 45, 3);
    myMove("slide8-img2", 15, 11.5);
    myMove("slide8-img3", 9, 39);
    myMove("slide8-img4", 30.5, 63);
    myMove("slide8-img5", 0.01, 74);

	// Animations bouton suivant
	d3.select('#slide8-suivant').on('mouseover', function(){
        anime({
            targets: '#slide8-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide8-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide8-btnSuivant',
            scale: 1
        });
    });


    // Animations bouton retour
	d3.select('#slide8-btnRetour').on('mouseover', function(){
        anime({
            targets: '#slide8-btnRetour',
            scale: 1.1
        });
    });

    d3.select('#slide8-btnRetour').on('mouseout', function(){
        anime({
            targets:  '#slide8-btnRetour',            
            scale: 1
        });
    });

  d3.select('#slide8-suivant').on('click', function(){
    moveDown();
    moveLeft();
    initSlide9();
  });

  d3.select('#slide8-btnRetour').on('click', function(){
    moveUp();
    moveLeft();
    //initSlide9();
  });
}
