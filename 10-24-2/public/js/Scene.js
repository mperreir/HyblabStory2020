// import Animation from "./Animation.js"
// import Choice from "./Choice.js"


/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  constructor (name_histoire, name_scene, next, change_story=false, auto_import=true, duration=-1) {

    // Variables related to the outside
    this.name_scene = name_scene;         // Name of the scene
    this.name_histoire = name_histoire;   // Name of the related story
    this.next_scene = next;       // ID of next scene OR link to next story
    this.change_story = change_story;     // true if next_scene is linked to the next story (false by default)

    // Variables related to the inside
    this.layers = new Array();            // layers is an array of Interactable, essentiellement des animations
    this.choices = new Choice();          // the different choices available to the user
    this.time = 0;                        // time starts at 0
    this.max_time = duration;             // Set a time lime in milliseconds (-1 if no time limit)

    // Initialisation methods
    if (auto_import) {
      this.auto_add_element();
    }
  }


  // Obtain the number of the next scene

  get_next (){
    return this.next_scene;
  }

  // Confirm the next scene via les


  // ADDING NEW ELEMENTS -------------------------------------------------------

  new_top_layer (inter) {
    this.layers.push(inter);
  }

  new_bottom_layer (inter) {
    this.layers.unshift(inter);
  }

  add_choice(choice){
    this.choices = choice;
  }

  auto_add_element () {
    let i = 0;
    while (this.layers.push(new Animation("../img/stories/" + this.name_histoire + "/" + this.name_scene))) {
      i++;
    }
    if (i == 0) {
      return true;
    } else {
      return false;
    }
    // Done importing
  }

  // DISPLAYING ----------------------------------------------------------------

  display () {
    // for (i)
  }

  // UPDATING ------------------------------------------------------------------

  update () {
    // Time is going on to make the scene advance
    this.time++;
    // Test the interaction for every layer
    forEach((layers, inter) => {
      inter.interact();
    });
    // Test interaction for the choices
    if(this.choices.interact()!=-1){
      if (this.choices.change_story()){
        this.change_story=true;
      }
      this.next_scene = choices.interact();
      return this.get_next();
    }



  }


}
