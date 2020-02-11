import Component from "../../../js/Component.js";

export default class Visage extends Component {
  constructor({ onGoToPageFin }) {
    super();
    this.html = "";
    this.onGoToPageFin = onGoToPageFin;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecrans/Visage/Visage.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.onGoToPageFin(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
