// import {init} from "./Init.js"

var story;

function setup() {
  console.log("SETUP: starting");
  // Run once on start
  createCanvas(1920, 1080);

  init();

  story = story_intro; // The first story
  console.log("SETUP: complete");
}

function draw() {
  // Main function that loops forever

  background(220);
  story.display();
  story = story.update();

}
