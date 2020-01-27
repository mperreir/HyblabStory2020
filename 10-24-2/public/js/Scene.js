/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  Scene (name,next) {
    var this.name = name;
    var this.layers = new Animation()[];
    var this.choices = new Choice();
    var this.default_next_scene = next;
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
