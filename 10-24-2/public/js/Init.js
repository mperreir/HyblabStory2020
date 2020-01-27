var w, h;
var bm, bw, bh;

function init () {

  w = width;
  h = height;
  bm = w/20; 
  bw = w/9;
  bh = h/20;

}

function init_story1 () {

  var story1 = new Story();
  var scene1 = new Scene(2);
  scene1.new_top_layer("res/scene1/background.png");
  scene1.new_top_layer("res/scene1/decors.png");
  s1.add_scene(1, scene1);
  var scene2 = new Scene(-1);
  scene2.new_top_layer("res/scene2/background.png");
  scene2.new_top_layer("res/scene2/decors.png");
  scene2.new_top_layer("res/scene2/character.png");
  s2.add_scene(2, scene1);


}
