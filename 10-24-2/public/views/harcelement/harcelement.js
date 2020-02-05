import View from "../../js/View.js";

export default class ViewHarcelement extends View {
  constructor () {
    super("harcelement", document.getElementById("root"));
  }

  async load () {
    await super.load();
    this.porte = await this.loadHTML("/10-24-2/views/harcelement/porte.html");
    this.lendemain = await this.loadHTML("/10-24-2/views/harcelement/lendemain.html");
    // await Promise.all([super.load(), this.porte, this.lendemain]);
  }

  linkElements () {
    document.getElementById("harcelement").addEventListener("click", () => console.log("toc"));
    document.getElementById("harcelement").addEventListener("click", () => {
      document.getElementById("carousel-button").style.display = "block";
      const parser = new DOMParser();
      document.getElementById("harcelement").innerHTML = "";
      document.getElementById("harcelement").appendChild(parser.parseFromString(this.lendemain, "text/html").body.firstChild);
    });
  }

  /**
   *
   * @param {HTMLElement} target
   */
  render (target) {
    const parser = new DOMParser();
    var sectionEl = parser.parseFromString(this.htmlText, "text/html").body.firstChild;
    sectionEl.appendChild(parser.parseFromString(this.porte, "text/html").body.firstChild);
    target.innerHTML = "";
    target.appendChild(sectionEl);
    this.linkElements();
  }
}
