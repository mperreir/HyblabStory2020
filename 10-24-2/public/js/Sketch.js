function setup() {
  createCanvas(1920, 1080);

  init();
  init_story_intro();

  var story = story_intro; // The first story
}

function draw() {

  background(220);
  story.display();
  story = story.update();

}
