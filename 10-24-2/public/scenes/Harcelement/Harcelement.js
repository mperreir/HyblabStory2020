import View from "../../js/View.js";
import ViewLendemain from "./lendemain/lendemain.js";

export default class ViewHarcelement extends View {
  constructor() {
    super("harcelement", document.getElementById("root"));
  }

  async load() {
    await super.load();
    this.porte = await this.loadHTML("/10-24-2/scenes/Harcelement/porte.html");
    this.lendemain = new ViewLendemain();
    await this.lendemain.load();
    // await Promise.all([super.load(), this.porte, this.lendemain]);
  }

  linkElements() {
    document
      .getElementById("harcelement")
      .addEventListener("click", () => console.log("toc"));
    document.getElementById("harcelement").addEventListener("click", () => {
      document.getElementById("carousel-button").style.display = "block";
      document.getElementById("harcelement").innerHTML = "";
      this.lendemain.render(document.getElementById("harcelement"));
    });
  }

  /**
   *
   * @param {HTMLElement} target
   */
  render(target) {
    const parser = new DOMParser();
    var sectionEl = parser.parseFromString(this.htmlText, "text/html").body
      .firstChild;
    sectionEl.appendChild(
      parser.parseFromString(this.porte, "text/html").body.firstChild
    );
    target.innerHTML = "";
    target.appendChild(sectionEl);
    console.log(target);
    this.linkElements();
  }
}
