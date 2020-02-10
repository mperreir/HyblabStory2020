function initForm6(){
  var rad = document.form6.rad6;
  var prev = document.getElementById("imagebtn16");
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('click', function() {
          fadeOut6(prev.getAttribute("value"));
          if (this !== prev) {
              prev = this;
          }
          fadeIn6(this.getAttribute("value"));
      });
  }
}

function fadeIn6(id){

  var bouton = document.getElementById("imagebtn" + id);
  bouton.src="img/boutonActif.svg";

  var texte = document.getElementById("texte-" + id);
  texte.style.visibility = "visible";


}

function fadeOut6(id){
  //le bouton
  var bouton = document.getElementById("imagebtn" + id);
  bouton.src="img/boutonInactif.svg";

  var texte = document.getElementById("texte-" + id);
  texte.style.visibility = "hidden";

}






let initSlide6 = function(){

    initForm6();
	// Animations bouton suivant
	d3.select('#slide6-suivant').on('mouseover', function(){
        anime({
            targets: '#slide6-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide6-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide6-btnSuivant',
            scale: 1
        });
    });


    // Animations bouton retour
	d3.select('#slide6-btnRetour').on('mouseover', function(){
        anime({
            targets: '#slide6-btnRetour',
            scale: 1.1
        });
    });

    d3.select('#slide6-btnRetour').on('mouseout', function(){
        anime({
            targets:  '#slide6-btnRetour',            
            scale: 1
        });
    });

  d3.select('#slide6-suivant').on('click', function(){
    moveDown();
    moveRight();
    initSlide9();
  });

  d3.select('#slide6-btnRetour').on('click', function(){
    moveUp();
    moveRight();
  });
}
