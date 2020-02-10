function initForm(){
  var rad = document.form.myRadios;
  var prev = document.getElementById("imageBouton1905");
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('click', function() {
          fadeOut(prev.getAttribute("value"));
          if (this !== prev) {
              prev = this;
          }
          fadeIn(this.getAttribute("value"));
      });
  }
}

function fadeIn(id){
  //le bouton
  var bouton = document.getElementById("imageBouton" + id);
  bouton.src="img/boutonActif.svg";
  //le label
  var label = document.getElementById("label" + id);
  label.style.opacity = "1";
  //l'image
  let image = document.getElementById("carte" + id);
  image.style.opacity = "1";
    var texte1=document.getElementById("premierTexte");
    var texte2=document.getElementById("deuxiemeTexte");
    if(id<1944){
        texte1.style.opacity = "1";
        texte2.style.opacity = "0";
    } else {
        texte1.style.opacity = "0";
        texte2.style.opacity = "1";
    }
  if (id=="1957"){
    var suiteTexte = document.getElementById("next4-texte");
    var suiteImage = document.getElementById("next4-img");
    var suite = document.getElementById("next4");
    suiteTexte.style.visibility = "visible";
    suiteImage.style.visibility = "visible";
    suite.style.visibility = "visible";
  }
}

function fadeOut(id){
  //le bouton
  var bouton = document.getElementById("imageBouton" + id);
  bouton.src="img/boutonInactif.svg";
  //le label
  var label = document.getElementById("label" + id);
  label.style.opacity = "0";
  //l'image
  let image = document.getElementById("carte" + id);
  image.style.opacity = "0";
}

let initSlide3 = function(){
  initForm();
  d3.select('#next4').on('click', function(){
    moveRight();
    initSlide4();
  });

  d3.select('#next4').on('mouseover', function(){
      anime({
          targets: '#next4-img',
          scale: 1.2
      });
  });

  
  d3.select('#next4').on('mouseout', function(){
      anime({
          targets: ' #next4-img',
          scale: 1
      });
  });
}
