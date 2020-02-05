let initSlide4 = function(){
	// Bruits de pas
	var son = document.querySelector('#audioPas');
    son.play();


    // Affichage du premier texte après 5s
    setTimeout(playDialogues, 5500);

    var btnSuivant = document.querySelector('#btnSuivant');
     var notesSuivantes = document.querySelector('#notesSuivantes');
    // Code pas très propre --> à changer
	var dialogue1 = document.querySelector('#container-dialogueJ');
    var dialogue2 = document.querySelector('#dialogue2');
    var dialogue3 = document.querySelector('#dialogue3');
    var dialogue4 = document.querySelector('#dialogue4');
    var dialogue5 = document.querySelector('#dialogue5');
    var architecte = document.querySelector('#img-architecte');
    var journaliste = document.querySelector('#img-journaliste');
    var trait = document.querySelector('#trait-dialogueJ');

   	function playDialogues()
	{
		son.pause();
		// Début du dialogue
	    dialogue1.style.visibility = "visible";
	    // $("#container-suivant").show();
	    btnSuivant.style.visibility = "visible";
	    notesSuivantes.style.visibility = "visible";
	    architecte.style.visibility = "visible";
	    journaliste.style.visibility = "visible";
	    trait.style.visibility = "visible";

	   d3.select('#btnSuivant').on('click', function(){

	    	if (dialogue1.style.visibility != "hidden") {
	    		dialogue1.style.visibility = "hidden";
	    		dialogue2.style.visibility = "visible";
	    		trait.style.visibility = "hidden";
	    		trait = document.querySelector('#trait-dialogueA');
	    		trait.style.visibility = "visible";
	    	}

	    	else if(dialogue2.style.visibility != "hidden") {
	    		dialogue2.style.visibility = "hidden";
	    		dialogue3.style.visibility = "visible";

	    	}

	    	else if(dialogue3.style.visibility != "hidden") {
	    		dialogue3.style.visibility = "hidden";
	    		dialogue4.style.visibility = "visible";
	    	}

	    	else if(dialogue4.style.visibility != "hidden") {
	    		dialogue4.style.visibility = "hidden";
	    		dialogue5.style.visibility = "visible";
	    		// $("#btnSuivant").hide();
	    	}
	    	else if (dialogue5.style.visibility != "hidden"){
	    		son.pause();
  				moveDown();
				initSlide5();
	    	}


	  });
	}
 


	// d3.select('#next5').on('click', function(){
	// 	dialogue3.style.visibility = "hidden";
	// 	son.pause();
 //  		moveDown();
	// 	initSlide5();
	// });

}


