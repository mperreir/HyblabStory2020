import Component from "../../../js/Component.js";

export default class Rayon extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/7_Rayon/Rayon.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToChoix(), 7000);
  }

  render(target) {
    document.getElementById("super-papa-player").pause();
    document.getElementById("super-papa-player").elemMusicOn = false;

    document.getElementById("rayon-player").elemMusicOn = true;
    document.getElementById("rayon-player").volume = 0.1;
    if (!document.getElementById("rayon-player").isMuted) {
      document.getElementById("rayon-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
