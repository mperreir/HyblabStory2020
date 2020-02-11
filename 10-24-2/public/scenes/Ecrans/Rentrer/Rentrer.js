import Component from "../../../js/Component.js";

export default class Rentrer extends Component {
  constructor({ onGoToChambre }) {
    super();
    this.html = "";
    this.onGoToChambre = onGoToChambre;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecrans/Rentrer/Rentrer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("next")
      .addEventListener("click", e => this.onGoToChambre(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
