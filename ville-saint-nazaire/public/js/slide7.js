let initSlide7 = function(){


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
    moveLeft();
    //initSlide9();
  });
}


