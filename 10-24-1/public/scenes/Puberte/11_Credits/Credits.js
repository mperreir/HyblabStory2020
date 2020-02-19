import Component from "../../../js/Component.js";

export default class Credits extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/11_Credits/Credits.html"
    );
  }

  componentDidMount() {
    document.getElementById("carousel-player").elemMusicOn = true;
    document.getElementById("carousel-player").volume = 0.1;
    if (!document.getElementById("carousel-player").isMuted) {
      document.getElementById("carousel-player").play();
    }

    // Fin de la musique d'ambiance
    document.getElementById("puberte-global-player").pause();
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
