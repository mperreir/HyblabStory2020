let initSlide8 = function(){

	// Animations bouton suivant
	d3.select('#slide8-suivant').on('mouseover', function(){
        anime({
            targets: '#slide8-notesSuivantes, #slide8-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide8-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide8-notesSuivantes, #slide8-btnSuivant',            
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

  d3.select('#next9-3').on('click', function(){
    moveDown();
    moveLeft();
    initSlide9();
  });
}
