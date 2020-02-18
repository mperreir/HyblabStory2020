let initSlide10 = function(){

		var trait = document.querySelector('#slide10-trait-dialogueJ');
		var dialogueJ = document.querySelector('#slide10-container-dialogueJ');
		var dialogueD = document.querySelector('.slide10-container-dialogueD');


		// Fonction d'affiche des dialogues lettre par lettre
		var cptLettre = 0 ;
		var timeOut ;
		function showLetters(id)
		{
		  let htmlP = document.getElementById(id);
		  let txt = htmlP.dataset.label;
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
			}
		}


		showLetters("slide10-dialogue1");

	   d3.select('#slide10-suivant').on('click', function(){

	    	if (dialogueJ.style.visibility != "hidden") {
	    		dialogueJ.style.visibility = "hidden";
	    		dialogueD.style.visibility = "visible";
	    		trait.style.visibility = "hidden";
	    		trait = document.querySelector('#slide10-trait-dialogueD');
	    		trait.style.visibility = "visible";
	    		cptLettre = 0 ;
	    		clearTimeout(timeOut);
	    		showLetters("slide10-dialogue2");
	    	}

	    	else if(dialogueD.style.visibility != "hidden") {
	    		moveLeft();
				initSlide11();
	    		
	    	}

	  });
 



	 d3.select('#slide10-suivant').on('mouseover', function(){
        anime({
            targets: '#slide10-btnSuivant',
            scale: 1.1
        });
    });

    d3.select('#slide10-suivant').on('mouseout', function(){
        anime({
            targets:  '#slide10-btnSuivant',
            scale: 1
        });
    });

  d3.select('#next11').on('click', function(){
    moveLeft();
    initSlide11();
  });
}
