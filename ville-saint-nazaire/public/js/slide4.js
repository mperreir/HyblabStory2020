let initSlide4 = function(){
	// Bruits de pas
	var son = document.querySelector('#audioPas');
    son.play();

    // Fonction d'affiche des dialogues lettre par lettre
	var cptLettre = 0 ;
	var timeOut ;
	function showLetters(id)
	{
	  //console.log(id);
	  let htmlP = document.getElementById(id);
	  let txt = htmlP.dataset.label;
	  console.log(txt.length);
	  if(cptLettre < txt.length)
		{
			if (txt[cptLettre] == '<') {
				htmlP.innerHTML += `<br>`
			}
			else {
				htmlP.innerHTML += txt[cptLettre] ;
			}
		  	timeOut = setTimeout(function() {
		      showLetters(id);
		    }, 25)
		  cptLettre++;
		}
	  else
		{
		  clearTimeout(timeOut);
		  console.log("end");
		}
	}
	

    // Affichage du premier texte après 5s
    setTimeout(playDialogues, 3500);
    //setTimeout(playDialogues, 0);

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
    var positionDialogue;
    
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
	    showLetters("slide4-dialogue1");



	   d3.select('#slide4-suivant').on('click', function(){
	   		// Passage au dialogue 2
	    	if (dialogue1.style.visibility != "hidden") {
	    		dialogue1.style.visibility = "hidden";
	    		dialogue2.style.visibility = "visible";
	    		trait.style.visibility = "hidden";
	  			
	  			// Positionnement du trait de dialogue
	    		trait = document.querySelector('#slide4-trait-dialogueA');
	    		trait.style.height = (dialogue2.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.visibility = "visible";
	    		// Après calcul de la hauteur du trait on peut vider le contenu
	    		dialogue2.innerHTML = "";
	    		
	    		// Apparition progressive du texte
	    		cptLettre = 0 ;
	    		clearTimeout(timeOut);
	    		showLetters("slide4-dialogue2");
	    		btnSuivant.style.visibility = "visible";
	    		notesSuivantes.style.visibility = "visible";
	    	}
	    	// Passage au dialogue 3
	    	else if(dialogue2.style.visibility != "hidden") {
	    		dialogue2.style.visibility = "hidden";

	    		// Positionnement du dialogue
	    		positionDialogue = (dialogue3.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.height = positionDialogue;
	    		trait.style.top = (72 - parseInt(trait.style.height)/2) + "%";
	    		dialogue3.parentElement.style.top =(72 - parseInt(positionDialogue)/2) + "%";
	    		dialogue3.style.visibility = "visible";
	    		// Après calcul de la hauteur du trait on peut vider le contenu
	    		dialogue3.innerHTML = "";

	    		// Apparition progressive du texte
	    		cptLettre = 0 ;
	    		clearTimeout(timeOut);
	    		showLetters("slide4-dialogue3");
	    	}
	    	// Passage au dialogue 4
	    	else if(dialogue3.style.visibility != "hidden") {
	    		dialogue3.style.visibility = "hidden";

	    		// Positionnement du dialogue
	    		positionDialogue = (dialogue4.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.height = positionDialogue;
	    		trait.style.top = (72 - parseInt(trait.style.height)/2) + "%";
	    		dialogue4.parentElement.style.top =(72 - parseInt(positionDialogue)/2) + "%";
	    		dialogue4.style.visibility = "visible";
	    		// Après calcul de la hauteur du trait on peut vider le contenu
	    		dialogue4.innerHTML = "";

	    		// Apparition progressive du texte
	    		cptLettre = 0 ;
	    		clearTimeout(timeOut);
	    		showLetters("slide4-dialogue4");
	    	}
	    	// Passage au dialogue 5
	    	else if(dialogue4.style.visibility != "hidden") {
	    		dialogue4.style.visibility = "hidden";

	    		// Positionnement du dialogue
	    		positionDialogue = (dialogue5.offsetHeight/container.offsetHeight)*100 + "%";
	    		trait.style.height = positionDialogue;
	    		trait.style.top = (72 - parseInt(trait.style.height)/2) + "%";
	    		dialogue5.parentElement.style.top =(72 - parseInt(positionDialogue)/2) + "%";
	    		dialogue5.style.visibility = "visible";
	    		// Après calcul de la hauteur du trait on peut vider le contenu
	    		dialogue5.innerHTML = "";

	    		// Apparition progressive du texte
	    		cptLettre = 0 ;
	    		clearTimeout(timeOut);
	    		showLetters("slide4-dialogue5");
	    	}
	    	// Passage à la présentation des choix
	    	else if (dialogue5.style.visibility != "hidden"){
	    		son.pause();
  				loadChoices();
	    	}

	  });
	}

	// Chargements présentation des choix
	function loadChoices() 
    {
    	var introChoix = document.querySelector('#slide4-intro-choix');
    	var choix1 = document.querySelector('#container1-slide5');
		var choix2 = document.querySelector('#container2-slide5');
		var choix3 = document.querySelector('#container3-slide5');
		var date = document.querySelector('.annee');

		// Agrandissement des personnages
		architecte.style.width = 22 + "%";
		architecte.style.height = 53 + "%";
		architecte.style.top = 43 + "%";
		architecte.style.left = 75.5 + "%";

		journaliste.style.width = 22 + "%";
		journaliste.style.height = 55 + "%";
		journaliste.style.top = 44 + "%";
		journaliste.style.left = 0 + "%";

		// On affiche les choix
		introChoix.style.visibility = "visible";
    	choix1.style.visibility = "visible";
		choix2.style.visibility = "visible";
		choix3.style.visibility = "visible";
    	// On cache les éléments du dialogue précédent
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
            targets: '#slide4-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide4-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide4-btnSuivant',
            scale: 1
        });
    });

    // Redirections slides des choix
	d3.select('#container1-slide5').on('click', function(){
	    moveDown();
	    moveLeft();
	    initSlide6();
	});
	d3.select('#container2-slide5').on('click', function(){
		moveDown();
		initSlide7();
	});
	d3.select('#container3-slide5').on('click', function(){
	    moveDown();
	    moveRight();
	    initSlide8();
	});

}




