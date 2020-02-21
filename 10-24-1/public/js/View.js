import { fetch } from "./3rdParty/fetch.min.js";

export default class View {
  /**
   *
   * @param {string} name
   *
   */
  constructor(name) {
    this.viewName = name;
    this.htmlText = "";
  }

  /**
   *
   * @param {string} url
   */
  async loadHTML(url) {
    const res = await fetch(url);
    const html = await res.text();
    return html;
  }

  async load() {
    try {
      this.htmlText = await this.loadHTML(
        `views/${this.viewName}/${this.viewName}.html`
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // constructor(){}

  componentDidMount() {}

  componentWillUnmount() {}

  // render () {}

  linkElements() {
    document
      .getElementById("facebook-button")
      .addEventListener("click", () =>
        window.open("https://www.facebook.com/1024.media/", "_blank")
      );
    document
      .getElementById("instagram-button")
      .addEventListener("click", () =>
        window.open("https://www.instagram.com/instagram/", "_blank")
      );
  }

  /**
   *
   * @param {HTMLElement} target
   */
  render(target) {
    target.innerHTML = this.htmlText;
    this.linkElements();
  }
}
