// import { Tree, Node } from "../../js/Tree";
import View from "../../js/View.js";

export default class ViewEcrans extends View {
  constructor () {
    super("ecrans", document.getElementById("root"));
    super.load();
  }

  linkElements () {
    document.getElementById("ecrans").addEventListener("click", () => console.log("toc"));
  }
}
