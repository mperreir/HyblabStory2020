import Component from "../../../js/Component.js";

export default class Chambre extends Component {
  constructor({ goToReprimande }) {
    super();
    this.html = "";
    this.goToReprimande = goToReprimande;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Ecrans/Chambre/Chambre.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_next")
      .addEventListener("click", e => this.goToReprimande(e));
  }

  render(target) {
    document.getElementById("ecran-player").volume = 0.1;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
