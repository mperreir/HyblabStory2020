import Component from "../../../js/Component.js";

export default class PorteChoix extends Component {
  constructor({ onGoToRentrer, onGoToPorte }) {
    super();
    this.html = "";
    this.onGoToRentrer = onGoToRentrer;
    this.onGoToPorte = onGoToPorte;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecran/PorteChoix/PorteChoix.html"
    );
  }

  componentDidMount() {
    console.log("PorteChoix mount");
    document
      .getElementById("toquer")
      .addEventListener("click", e => this.onGoToRentrer(e));
    document
      .getElementById("partir")
      .addEventListener("click", e => this.onGoToPorte(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
