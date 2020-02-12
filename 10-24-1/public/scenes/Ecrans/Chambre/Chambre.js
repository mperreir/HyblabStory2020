import Component from "../../../js/Component.js";

export default class Chambre extends Component {
  constructor({ goToReprimande }) {
    super();
    this.html = "";
    this.goToReprimande = goToReprimande;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/Chambre/Chambre.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.goToReprimande(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
