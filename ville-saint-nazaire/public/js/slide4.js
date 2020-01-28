let initSlide4 = function(){
	// Bruits de pas 
	var son = document.querySelector('#audioPas');
    son.play();
    var dialogueSuivant = d3.select('#dialogueSuivant');
    console.log(dialogueSuivant);

   d3.select('#dialogueSuivant').on('click', function(){
    	var dialogue1 = document.querySelector('#dialogue1');
    	var dialogue2 = document.querySelector('#dialogue2');
    	var dialogue3 = document.querySelector('#dialogue3');

    	if (dialogue1.style.visibility != "hidden") {
    		console.log("dialogue2");
    		dialogue1.style.visibility = "hidden";
    		dialogue2.style.visibility = "visible";
    	}

    	else if(dialogue2.style.visibility != "hidden") {
    		console.log("dialogue3");
    		dialogue2.style.visibility = "hidden";
    		dialogue3.style.visibility = "visible";
    		$("#dialogueSuivant").hide();
    	}
    	

  });

  d3.select('#next5').on('click', function(){
  	son.pause();
    mySlidr.slide('page-5');
    initSlide5();
  });

}


