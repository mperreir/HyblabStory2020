import Component from "../../../js/Component.js";

export default class Chambre extends Component {
  constructor({ onGoToReprimande }) {
    super();
    this.html = "";
    this.onGoToReprimande = onGoToReprimande;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecrans/Chambre/Chambre.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.onGoToReprimande(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
