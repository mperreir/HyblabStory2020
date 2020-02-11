import Component from "../../../js/Component.js";

export default class PorteClaque extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/2_PorteClaque/2_PorteClaque.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToPremierChoix(), 1500);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
