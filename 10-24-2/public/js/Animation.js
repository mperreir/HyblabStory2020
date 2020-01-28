/* An animation is a set of images that are displayed one after the other at a certain speed */

class Animation {

  constructor (path) {
    this.path = path;
    this.images = new Array();
    this.freq = 24;

    auto_add_image();
  }

  add_image (image_path) {
    // Images should all be the same size : 1080x720
    images.push(loadImage(image_path));
  }

  auto_add_image () {
    let i = 0;
    while (add_image(this.path.concat("_",String(i),".png"))) {
      i++;
    }
    // Done importing
  }

  display(time) {
    rect(iwm,ihm,iw,ih);
    // image(images[time%images.length], iwm, ihm);
  }

  interact() {

  }

}
