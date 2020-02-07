let initSlide4 = function(){
	// Bruits de pas
	var son = document.querySelector('#audioPas');
    son.play();


    // Affichage du premier texte après 5s
    //setTimeout(playDialogues, 5500);
    setTimeout(playDialogues, 0);

    var btnSuivant = document.querySelector('#slide4-btnSuivant');
    var notesSuivantes = document.querySelector('#slide4-notesSuivantes');
	var dialogue1 = document.querySelector('#slide4-container-dialogueJ');
    var dialogue2 = document.querySelector('#slide4-dialogue2');
    var dialogue3 = document.querySelector('#slide4-dialogue3');
    var dialogue4 = document.querySelector('#slide4-dialogue4');
    var dialogue5 = document.querySelector('#slide4-dialogue5');
    var architecte = document.querySelector('#slide4-img-architecte');
    var journaliste = document.querySelector('#slide4-img-journaliste');
    var trait = document.querySelector('#slide4-trait-dialogueJ');
    var imgHdv1 = document.querySelector('#slide4-img-photo1');
    var imgHdv2 = document.querySelector('#slide4-img-photo2');
    var container = document.querySelector('#page4');
    console.log(dialogue1.offsetHeight);
    
   	function playDialogues()
	{ 
		son.pause();

		// Début du dialogue
	    dialogue1.style.visibility = "visible";
	    btnSuivant.style.visibility = "visible";
	    notesSuivantes.style.visibility = "visible";
	    architecte.style.visibility = "visible";
	    journaliste.style.visibility = "visible";
	    trait.style.visibility = "visible";


	   d3.select('#slide4-suivant').on('click', function(){

	    	if (dialogue1.style.visibility != "hidden") {
	    		dialogue1.style.visibility = "hidden";
	    		dialogue2.style.visibility = "visible";
	    		trait.style.visibility = "hidden";
	  			
	  			// Positionnement du trait de dialogue
	    		trait = document.querySelector('#slide4-trait-dialogueA');
	    		trait.style.height = (dialogue2.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.visibility = "visible"; 
	    	}

	    	else if(dialogue2.style.visibility != "hidden") {
	    		dialogue2.style.visibility = "hidden";

	    		// Positionnement du trait de dialogue
	    		trait.style.height = (dialogue3.offsetHeight/container.offsetHeight)*100 + "%";
	    		console.log(trait.offsetTop);
	    		trait.style.top = "65%";
	    		dialogue3.style.top = "65%";
	    		console.log(trait.offsetTop);
	    		dialogue3.style.visibility = "visible";
	    	}

	    	else if(dialogue3.style.visibility != "hidden") {
	    		dialogue3.style.visibility = "hidden";

	    		// Positionnement du trait de dialogue
	    		trait.style.height = (dialogue4.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.top = "65%";
	    		dialogue4.style.top = "65%";
	    		dialogue4.style.visibility = "visible";
	    	}

	    	else if(dialogue4.style.visibility != "hidden") {
	    		dialogue4.style.visibility = "hidden";

	    		// Positionnement du trait de dialogue
	    		trait.style.height = (dialogue5.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.top = "65%";
	    		dialogue5.style.top = "65%";
	    		dialogue5.style.visibility = "visible";
	    	}
	    	else if (dialogue5.style.visibility != "hidden"){
	    		son.pause();
  				loadChoices();
	    	}

	  });
	}

	// Chargements présentation des choix
	function loadChoices() 
    {
    	var choix1 = document.querySelector('#container1-slide5');
		var choix2 = document.querySelector('#container2-slide5');
		var choix3 = document.querySelector('#container3-slide5');
		var date = document.querySelector('.annee');
    	choix1.style.visibility = "visible";
    	choix2.style.visibility = "visible";
    	choix3.style.visibility = "visible";
    	date.style.visibility = "hidden";
    	imgHdv1.style.visibility = "hidden";
    	imgHdv2.style.visibility = "hidden";
    	trait.style.visibility = "hidden";
    	dialogue5.style.visibility = "hidden";
    	btnSuivant.style.visibility = "hidden";
	    notesSuivantes.style.visibility = "hidden";
	}

	// Animations bouton
	d3.select('#slide4-suivant').on('mouseover', function(){
        anime({
            targets: '#slide4-notesSuivantes, #slide4-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide4-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide4-notesSuivantes, #slide4-btnSuivant',            
            scale: 1
        });
    });

    // Redirections slides des choix
	d3.select('#next6').on('click', function(){
	    moveDown();
	    moveLeft();
	    initSlide6();
	});
	d3.select('#next7').on('click', function(){
		moveDown();
		initSlide7();
	});
	d3.select('#next8').on('click', function(){
	    moveDown();
	    moveRight();
	    initSlide8();
	});

}




