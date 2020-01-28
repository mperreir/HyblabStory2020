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



function init_story_bullying() {

  var story = "bullying";

  // BULLYING STORY
  var story_bullying = new Story();

  var scene1 = new Scene(story, "enfant_qui_s'enferme", 2);
  story_bullying.add_scene(1, scene1);

  var scene2 = new Scene(story, "aller le voir?", 2);
  story_bullying.add_scene(2, scene2);

  var scene3 = new Scene(story, "tout va bien?", 4);
  story_bullying.add_scene(3, scene3);

  var scene4 = new Scene(story, "insister?", 4);
  story_bullying.add_scene(4, scene4);

  var scene5 = new Scene(story, "flashback", 6);
  story_bullying.add_scene(5, scene5);

  var scene6 = new Scene(story, "insister encore ?", 7);
  story_bullying.add_scene(6, scene6);

  var scene7 = new Scene(story, "fin de l'histoire", 0);
  story_bullying.add_scene(7, scene7);

  var scene_retour_choix_porte = new Scene(story, "retour au choix de la porte", 0);
  story_bullying.add_scene(0, scene_retour_choix_porte);

  return true;

}



function init_story_screens() {

  var story = "screens";

  var story_screens = new Story();

  var scene1 = new Scene(story, "bruits de robots", 2);
  story_screens.add_scene(1, scene1); 

  var scene2 = new Scene(story, "aller voir?", 2);
  story_screens.add_scene(2, scene2);

  var scene3 = new Scene(story, "c'est son cote creatif...", 1);
  story_screens.add_scene(3, scene3);

  var scene4 = new Scene(story, "on entre dans la chambre", 5);
  story_screens.add_scene(4, scene4);

  var scene5 = new Scene(story, "mon cheri il est 23h!", 6);
  story_screens.add_scene(5, scene5);

  var scene6 = new Scene(story, "choix de la plage horaire", 6);
  story_screens.add_scene(6, scene6);

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

}


