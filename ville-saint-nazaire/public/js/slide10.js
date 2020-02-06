let initSlide10 = function(){

		var trait = document.querySelector('#slide10-trait-dialogueJ');
		var dialogueJ = document.querySelector('#slide10-container-dialogueJ');
		var dialogueD = document.querySelector('.slide10-container-dialogueD');

	   d3.select('#slide10-btnSuivant').on('click', function(){

	    	if (dialogueJ.style.visibility != "hidden") {
	    		dialogueJ.style.visibility = "hidden";
	    		dialogueD.style.visibility = "visible";
	    		trait.style.visibility = "hidden";
	    		trait = document.querySelector('#slide10-trait-dialogueD');
	    		trait.style.visibility = "visible";
	    	}

	    	else if(dialogueD.style.visibility != "hidden") {
	    		moveRight();
				initSlide11();
	    		
	    	}

	  });
 

  d3.select('#next11').on('click', function(){
    moveRight();
    initSlide11();
  });
}
