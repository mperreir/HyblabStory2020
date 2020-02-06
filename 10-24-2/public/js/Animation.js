// import Interactable from "./Interactable.js"

/* An animation is a set of images that are displayed one after the other at a certain speed */



class Animation extends Interactable {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor (path) {
    super();
    this.path = path;
    this.images = new Array();
    this.freq = 24;

    this.auto_add_image();
  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  add_image (image_path) {
    // Images should all be the same size : 1080x720
    images.push(loadImage(image_path));
  }

  auto_add_image () {
    let i = 0;
    while (this.add_image(this.path.concat("_",String(i),".png"))) {
      i++;
    }
    // Done importing
  }

  // DISPLAYING ----------------------------------------------------------------

  display(time) {
    if (images.length == 0) {
      rect(iwm,ihm,iw,ih);
    } else {
      image(images[time%images.length], iwm, ihm);
    }
  }

  // INTERACTING ---------------------------------------------------------------

  interact() {

  }

}
