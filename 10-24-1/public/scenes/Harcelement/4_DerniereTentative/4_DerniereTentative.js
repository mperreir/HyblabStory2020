import Component from "../../../js/Component.js";

export default class DerniereTentative extends Component {
  constructor({ onGoToFewHoursBefore, onGoToLendemain }) {
    super();
    this.html = "";
    this.onGoToFewHoursBefore = onGoToFewHoursBefore;
    this.onGoToLendemain = onGoToLendemain;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/4_DerniereTentative/4_DerniereTentative.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("insister")
      .addEventListener("click", e => this.onGoToFewHoursBefore(e));
    document
      .getElementById("le-laisser-4")
      .addEventListener("click", e => this.onGoToLendemain(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
