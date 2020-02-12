import Component from "../../../js/Component.js";

export default class S7 extends Component {
  constructor({ onGoToS8 }) {
    super();
    this.html = "";
    this.onGoToS8 = onGoToS8;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S7/S7.html"
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
