import Component from "../../../js/Component.js";

export default class S1 extends Component {
  constructor({ onGoToS2 }) {
    super();
    this.html = "";
    this.onGoToS2 = onGoToS2;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S1/S1.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("f_toque")
      .addEventListener("click", e => this.onGoToS2(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
