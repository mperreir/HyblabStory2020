import Component from "../../../js/Component.js";

export default class FewHoursBefore extends Component {
  constructor({ goToFlashBack }) {
    super();
    this.html = "";
    this.goToFlashBack = goToFlashBack;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Harcelement/5_FewHoursBefore/5_FewHoursBefore.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToFlashBack(), 4000);
  }

  render(target) {
    document.getElementById("harcelement-player").elemMusicOn = true;
    document.getElementById("harcelement-player").volume = 0.15;
    if (!document.getElementById("harcelement-player").isMuted) {
      document.getElementById("harcelement-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
