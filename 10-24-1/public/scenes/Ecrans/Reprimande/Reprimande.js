import Component from "../../../js/Component.js";

export default class Reprimande extends Component {
  constructor({ goToVisage }) {
    super();
    this.html = "";
    this.goToVisage = goToVisage;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/Reprimande/Reprimande.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.goToVisage(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
