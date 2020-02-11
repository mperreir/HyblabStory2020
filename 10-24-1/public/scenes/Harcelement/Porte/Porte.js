import Component from "../../../js/Component.js";

export default class ViewPorte extends Component {
  constructor({ onGoToArriveeEnfant }) {
    super();
    this.html = "";
    this.onGoToArriveeEnfant = onGoToArriveeEnfant;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/Porte/Porte.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("harcelement")
      .addEventListener("click", e => this.onGoToArriveeEnfant(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
