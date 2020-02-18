function initForm7(){
  var rad = document.form7.rad7;
  var prev = document.getElementById("imagebtn17");
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('click', function() {
          fadeOut7(prev.getAttribute("value"));
          if (this !== prev) {
              prev = this;
          }
          fadeIn7(this.getAttribute("value"));
      });
  }
}

function fadeIn7(id){

  var bouton = document.getElementById("imagebtn" + id);
  bouton.src="img/boutonActif.svg";

  var texte = document.getElementById("texte-" + id);
  texte.style.visibility = "visible";


}

function fadeOut7(id){
  //le bouton
  var bouton = document.getElementById("imagebtn" + id);
  bouton.src="img/boutonInactif.svg";

  var texte = document.getElementById("texte-" + id);
  texte.style.visibility = "hidden";

}






let initSlide7 = function(){

    initForm7();
	// Animations bouton suivant
	d3.select('#slide7-suivant').on('mouseover', function(){
        anime({
            targets: '#slide7-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide7-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide7-btnSuivant',
            scale: 1
        });
    });


    // Animations bouton retour
	d3.select('#slide7-btnRetour').on('mouseover', function(){
        anime({
            targets: '#slide7-btnRetour',
            scale: 1.1
        });
    });

    d3.select('#slide7-btnRetour').on('mouseout', function(){
        anime({
            targets:  '#slide7-btnRetour',            
            scale: 1
        });
    });

  d3.select('#slide7-suivant').on('click', function(){
    moveDown();
    initSlide9();
  });

  d3.select('#slide7-btnRetour').on('click', function(){
    moveUp();
  });
}


