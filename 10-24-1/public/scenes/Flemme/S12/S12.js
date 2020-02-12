import Component from "../../../js/Component.js";

export default class S12 extends Component {
  constructor({ onGoToS13 }) {
    super();
    this.html = "";
    this.onGoToS13 = onGoToS13;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S12/S12.html"
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
