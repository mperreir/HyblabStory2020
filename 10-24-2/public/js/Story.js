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

  update() {
    this.current_scene = this.scenes.get(this.current_scene).update();
  }
}
