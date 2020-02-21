import Component from "../../../js/Component.js";

export default class S4 extends Component {
  constructor({ onGoToS5 }) {
    super();
    this.html = "";
    this.onGoToS5 = onGoToS5;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S4/S4.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
