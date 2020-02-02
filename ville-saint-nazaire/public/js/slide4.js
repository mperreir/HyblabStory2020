let initSlide4 = function(){
	// Bruits de pas
	var son = document.querySelector('#audioPas');
    son.play();


    // Affichage du premier texte après 5s
    setTimeout(playDialogues, 5500);

    var dialogueSuivant = document.querySelector('#dialogueSuivant');
	var dialogue1 = document.querySelector('#dialogue1');
    var dialogue2 = document.querySelector('#dialogue2');
    var dialogue3 = document.querySelector('#dialogue3');
    var architecte = document.querySelector('#img-architecte');

   	function playDialogues()
	{
		son.pause();
	    dialogue1.style.visibility = "visible";
	    $("#dialogueSuivant").show();
	    architecte.style.visibility = "visible";

	   d3.select('#dialogueSuivant').on('click', function(){

	    	if (dialogue1.style.visibility != "hidden") {
	    		dialogue1.style.visibility = "hidden";
	    		dialogue2.style.visibility = "visible";
	    	}

	    	else if(dialogue2.style.visibility != "hidden") {
	    		dialogue2.style.visibility = "hidden";
	    		dialogue3.style.visibility = "visible";
	    		$("#dialogueSuivant").hide();
	    	}


	  });
	}



	d3.select('#next5').on('click', function(){
		dialogue3.style.visibility = "hidden";
		son.pause();
  		moveDown();
		initSlide5();
	});

}


