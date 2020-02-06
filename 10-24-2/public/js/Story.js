/* A story is a set of scenes, one linking to another through user choices */

class Story {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor () {
    this.scenes = new Array();
    this.current_scene = 0;
  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  add_scene (id_scene, scene) {
    this.scenes.push([id_scene, scene]);
  }

  // DISPLAYING ----------------------------------------------------------------

  display () {

  }

  // UPDATING ------------------------------------------------------------------

  reinit() {
    this.current_scene = 0;
  }

  update() {
    this.current_scene = this.scenes.get(this.current_scene).update();
    if (this.scenes.get(this.current_scene).next_story()) {
      return this.current_scene;
    }
  }
}
