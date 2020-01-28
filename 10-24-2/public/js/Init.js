var w, h;
var iw, ih;
var bm, bw, bh;

function init () {

  w = 1920;         // Screen width
  h = 1080;         // Screen height
  iw = 1080;        // Image width
  iwm = (w-iw)/2;   // Image width margin
  ih = 720;         // Image height
  ihm = (h-ih)/2;   // Image height margin
  bm = w/20;        // Box margin
  bw = w/9;         // Box width
  bh = h/20;        // Box height

}

function init_story_intro () {

  var story = "intro"

  var story1 = new Story();
  // SCENE 1 --------------------------------------------------
  var scene1 = new Scene(story, "scene horloge", 2); // "intro" is the story used to start the other stories
  story1.add_scene(1, scene1);
  // SCENE 2 --------------------------------------------------
  /*var scene2 = new Scene(2);
  story2.add_scene(2, scene2);*/
}


// 1st diagram : bullying
function init_story_bullying() {

  var story = "bullying";

  // BULLYING STORY
  var story_bullying = new Story();

  var scene1 = new Scene(story, "L'enfant s'enferme dans sa chambre", 2);
  story_bullying.add_scene(1, scene1);

  var choice1 = new Choice();
  choice1.add_choice("Aller le voir",2);
  choice1.add_choice("On a tous des mauvais jours",2);
  
  // Peut être créer une scène intermédiare entre le fait de ne pas y aller

  var scene2 = new Scene(story, "Premier choix : aller le voir ?", 3);
  story_bullying.add_scene(2, scene2);

  var scene3 = new Scene(story, "Tu es sur que tout va bien ?", 4);
  story_bullying.add_scene(3, scene3);

  var scene4 = new Scene(story, "Choix 2 : insister ?", 5);
  story_bullying.add_scene(4, scene4);

  var choice2 = new Choice();
  choice2.add_choice("Non, je pense que ca ne va pas",4);
  choice2.add_choice("Si ca va, je ta laisse tranquille",4);

  var scene5 = new Scene(story, "Flashback sur ce qui c'est passe à l ecole", 6);
  story_bullying.add_scene(5, scene5);

  var scene6 = new Scene(story, "Insister encore ?", 7);
  story_bullying.add_scene(6, scene6);

  var scene7 = new Scene(story, "Fin de l'histoire", 0);
  story_bullying.add_scene(7, scene7);

  var scene_retour_choix_porte = new Scene(story, "retour au choix de la porte", 0);
  story_bullying.add_scene(0, scene_retour_choix_porte);

  return true;

}
  // END BULLYING STORY


// 2nd diagram : screens
function init_story_screens() {

  var story = "screens";

// SCREENS STORY
  var story_screens = new Story();

  var scene1 = new Scene(story, "Bruits provenants de la chambre", 2);
  story_screens.add_scene(1, scene1); 

  var scene2 = new Scene(story, "Choix 1 : aller voir ?", 2);
  story_screens.add_scene(2, scene2);

  var choice1 = new Choice();
  choice1.add_choice("Aller  voir",2);
  choice1.add_choice("C'est son cote creatif",2);

  var scene3 = new Scene(story, "C'est son cote creatif...", 1);
  story_screens.add_scene(3, scene3);

  var scene4 = new Scene(story, "On entre dans la chambre", 5);
  story_screens.add_scene(4, scene4);

  var scene5 = new Scene(story, "Mon cheri il est 23h!", 6);
  story_screens.add_scene(5, scene5);

  var scene6 = new Scene(story, "Choix de la plage horaire", 6);
  story_screens.add_scene(6, scene6);

  var choice2 = new Choice();
  // Ajouter un slider pour définir la plage horaire

  var scene7 = new Scene(story, "mauvaise reponse", 6);
  story_screens.add_scene(7, scene7);

  var scene8 = new Scene(story, "bonne reponse", 9);
  story_screens.add_scene(8, scene8);

  var scene9 = new Screen(story, "informations techniques", 10);
  story_screens.add_scene(9, scene9);

  var scene10 = new Screen(story, "fin", 0);
  story_screens.add_scene(10, scene10);

  var scene_retour_choix_porte = new Scene(story, "retour au choix de la porte", 0);
  story_screens.add_scene(0, scene_retour_choix_porte);

  return true;
// END SCREENS STORY
}


