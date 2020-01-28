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

function init_story1 () {

  var story1 = new Story();
  // SCENE 1 --------------------------------------------------
  var s1_a1 = new Animation();
  s1_a1.auto_add_image("../img/Homepage/background")
  var scene1 = new Scene(2);
  scene1.new_top_layer(s1_a1);
  scene1.new_top_layer(s1_a2);
  s1.add_scene(1, scene1);
  // SCENE 2 --------------------------------------------------
  var scene2 = new Scene(2);
  story2.add_scene(2, scene2);



}
