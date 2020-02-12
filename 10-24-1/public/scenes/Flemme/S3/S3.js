import Component from "../../../js/Component.js";

export default class S3 extends Component {
  constructor({ onGoToS4 }) {
    super();
    this.html = "";
    this.onGoToS4 = onGoToS4;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S3/S3.html"
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
