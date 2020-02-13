import Component from "../../../js/Component.js";

export default class S8 extends Component {
  constructor({ onGoToS9 }) {
    super();
    this.html = "";
    this.onGoToS9 = onGoToS9;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S8/S8.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("fs8_bouton")
      .addEventListener("click", e => this.onGoToS9(e));
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
