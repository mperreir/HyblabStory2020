import View from "../../js/View.js";

export default class ViewPlayscriptTemplate extends View {
  /**
   *
   * @param {View} viewToRender ready to be rendered view
   */
  constructor (viewToRender) {
    super("playscriptTemplate", document.getElementById("root"));
    this.viewToRender = viewToRender;
  }

  linkElements () {
    document.getElementById("facebook-button").addEventListener("click", () => window.open("https://www.facebook.com/1024.media/", "_blank"));
    document.getElementById("instagram-button").addEventListener("click", () => window.open("https://www.instagram.com/instagram/", "_blank"));
  }

  /**
   *
   * @param {HTMLElement} target
   */
  render (target) {
    super.render(target);
    const container = document.querySelector("#view-container");
    this.viewToRender.render(container);
  }
}
