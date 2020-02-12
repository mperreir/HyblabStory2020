import Component from "../../../js/Component.js";

export default class S2 extends Component {
  constructor({ onGoToS3 }) {
    super();
    this.html = "";
    this.onGoToS3 = onGoToS3;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S2/S2.html"
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
