/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  constructor (name_histoire, name_scene, next, auto_import=true) {

    // Variables related to the outside
    this.name_scene = name_scene;
    this.name_histoire = name_histoire;
    this.default_next_scene = next;

    // Variables related to the inside
    this.layers = new Array();            // layers is an array of Interactable, essentiellement des animations
    this.choices = new Choice();
    this.time = 0;

    // Initialisation methods
    if (auto_import) {
      auto_add_element();
    }
  }

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
    while (this.layers.push(new Animation("../img/" + this.name_histoire + "/" + this.name_scene))) {
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



  // UPDATING ------------------------------------------------------------------

  update () {
    this.time++;
  }


}
