/* An animation is a set of images that are displayed one after the other at a certain speed */

class Animation {

  Animation () {
    var images = new Array();
    var freq = 24;
  }

  add_image (image_path) {
    images.push(loadImage(image_path));
  }

  auto_add_image (source_path) {

  }

  display(time) {

  }

}
