/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  constructor (name_histoire, name_scene, next) {
    this.name_scene = name_scene;
    this.name_histoire = name_histoire;
    // layers is an array of Animation
    this.layers = new Array();
    this.choices = new Choice();
    this.default_next_scene = next;
  }

  // Adding elements
  new_top_layer (anim) {
    this.layers.push(anim);
  }

  new_bottom_layer (anim) {
    this.layers.unshift(anim);
  }

  auto_add_element () {
    let i = 0;
    while (this.layers.push(new Animation("../img/" + this.name_histoire + "/" + this.name_scene))) {
      i++;
    }
    return false;
    // Done importing
  }

  // Displaying


}
