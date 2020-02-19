import Component from "../../../js/Component.js";

export default class S5 extends Component {
  constructor({ onGoToS6 }) {
    super();
    this.html = "";
    this.onGoToS6 = onGoToS6;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S5/S5.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("fs5_bouton")
      .addEventListener("click", e => this.onGoToS6(e));
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
