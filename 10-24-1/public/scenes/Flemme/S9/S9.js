import Component from "../../../js/Component.js";

export default class S9 extends Component {
  constructor({ onGoToS10 }) {
    super();
    this.html = "";
    this.onGoToS10 = onGoToS10;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S9/S9.html"
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
