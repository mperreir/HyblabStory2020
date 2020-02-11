import Component from "../../../js/Component.js";

export default class PageFin extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/PageFin/PageFin.html"
    );
  }

  componentDidMount() {
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

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
