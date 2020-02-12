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
      "/10-24-1/scenes/Ecrans/PorteChoix/PorteChoix.html"
    );
  }

  componentDidMount() {
    console.log("PorteChoix mount");
    document
      .getElementById("e_toquer")
      .addEventListener("click", e => this.onGoToRentrer(e));
    document
      .getElementById("e_partir")
      .addEventListener("click", e => this.onGoToPorte(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
