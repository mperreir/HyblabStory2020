import Component from "../../../js/Component.js";

export default class S2 extends Component {
  constructor({ onGoToS3 }) {
    super();
    this.html = "";
    this.onGoToS3 = onGoToS3;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S2/S2.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    document.getElementById("flemme-mid-player").elemMusicOn = true;
    document.getElementById("flemme-mid-player").volume = 0.11;
    if (!document.getElementById("flemme-player").isMuted) {
      document.getElementById("flemme-mid-player").play();
      document.getElementById("flemme-player").play();
      document.getElementById("flemme-player").elemMusicOn = true;
      document.getElementById("flemme-player").volume = 0.11;
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
