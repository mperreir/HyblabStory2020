import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor({ onGoToATable }) {
    super();
    this.html = "";
    this.onGoToATable = onGoToATable;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/1_Porte/Porte.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("appeller-fille")
      .addEventListener("click", e => this.onGoToATable(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
