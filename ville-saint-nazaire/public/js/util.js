
//fonctions déplacement image slide 12, 13, 14
function myMove(elem,posInitiale) {
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos++;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos+posInitiale) + '%';//déplacement vers la gauche
    }
  }
}

function myReturn(elem,posInitiale) {
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == -posInitiale) { //condition d'arrêt de la "boucle"
      clearInterval(id);
    } else {
      pos--;
      //elem.style.top = (pos+30) + '%';//déplacement vers le bas
      elem.style.left = (pos) + '%';//déplacement vers la gauche
    }
  }
}
