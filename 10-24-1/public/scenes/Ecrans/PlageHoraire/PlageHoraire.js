import Component from "../../../js/Component.js";

export default class PlageHoraire extends Component {
  constructor({ goToPageFin }) {
    super();
    this.html = "";
    this.goToPageFin = goToPageFin;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/PlageHoraire/PlageHoraire.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_next")
      .addEventListener("click", e => this.goToPageFin(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
