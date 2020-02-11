import Component from "../../../js/Component.js";

export default class Reprimande extends Component {
  constructor({ onGoToVisage }) {
    super();
    this.html = "";
    this.onGoToVisage = onGoToVisage;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecrans/Reprimande/Reprimande.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.onGoToVisage(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
