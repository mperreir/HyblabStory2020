import Component from "../../../js/Component.js";

export default class S11 extends Component {
  constructor({ onGoToS12 }) {
    super();
    this.html = "";
    this.onGoToS12 = onGoToS12;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S11/S11.html"
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
