// import { Tree, Node } from "../../js/Tree";
import View from "../../js/View.js";

export default class ViewEcrans extends View {
  /**
   *
   * @param {View} viewCarousel Loaded carousel view, ready to be rendered
   */
  constructor (viewCarousel) {
    super("home", document.getElementById("root"));
    this.viewCarousel = viewCarousel;
  }

  linkElements () {
    super.linkElements();
    document.getElementById("start-button").addEventListener("click", () => this.viewCarousel.render(document.getElementById("root")));
  }
}
