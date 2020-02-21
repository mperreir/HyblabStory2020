import Component from "../../js/Component.js";
import Carousel from "../Carousel/Carousel.js";

export default class Home extends Component {
  constructor() {
    super();
    this.html = "";
    this.carouselC = new Carousel();
  }

  async load() {
    const promises = await Promise.all([
      this.loadHTML("scenes/Accueil/Accueil.html"),
      this.carouselC.load()
    ]);
    this.html = promises[0];
  }

  componentDidMount() {
    document
      .querySelector("#commencer-experience > button")
      .addEventListener("click", () =>
        this.carouselC.render(document.getElementById("root"))
      );
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
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
