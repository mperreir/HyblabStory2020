import Component from "../../../js/Component.js";

export default class Visage extends Component {
  constructor({ goToPlageHoraire }) {
    super();
    this.html = "";
    this.goToPlageHoraire = goToPlageHoraire;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/Visage/Visage.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_next")
      .addEventListener("click", e => this.goToPlageHoraire(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
