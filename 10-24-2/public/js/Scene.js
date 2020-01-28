/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  constructor (name,next) {
    this.name = name;
    this.layers = new Animation()[];
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
    
  }

  // Displaying


}
