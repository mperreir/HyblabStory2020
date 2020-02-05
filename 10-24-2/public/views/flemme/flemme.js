import View from "../../js/View.js";

export default class ViewFlemme extends View {
  constructor () {
    super("flemme", document.getElementById("root"));
    super.load();
  }

  linkElements () {
    document.getElementById("flemme").addEventListener("click", () => console.log("toc"));
  }
}
