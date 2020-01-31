let initSlide4 = function(){
	// Bruits de pas
	var son = document.querySelector('#audioPas');
	console.log(son.duration);
    son.play();

    // Affichage du premier texte après 5s
    setTimeout(playDialogues, 5500);

   	function playDialogues()
	{
		son.pause();
		var dialogueSuivant = document.querySelector('#dialogueSuivant');
    	var dialogue1 = document.querySelector('#dialogue1');
	    var dialogue2 = document.querySelector('#dialogue2');
	    var dialogue3 = document.querySelector('#dialogue3');
	    var architecte = document.querySelector('#img-architecte');
	    dialogue1.style.visibility = "visible";
	    dialogueSuivant.style.visibility = "visible";
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
  		moveDown();
		initSlide5();
	});

}


