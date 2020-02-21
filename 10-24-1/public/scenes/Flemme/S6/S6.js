import Component from "../../../js/Component.js";

export default class S6 extends Component {
  constructor({ onGoToS7 }) {
    super();
    this.html = "";
    this.onGoToS7 = onGoToS7;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S6/S6.html"
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
