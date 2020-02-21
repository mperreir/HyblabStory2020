import Component from "../../../js/Component.js";

export default class Discussion extends Component {
  constructor({ goToSuperPapa }) {
    super();
    this.html = "";
    this.goToSuperPapa = goToSuperPapa;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Puberte/5_Discussion/Discussion.html"
    );
  }

  componentDidMount() {
    document.getElementById("go-to-super-papa").addEventListener("click", e => {
      this.goToSuperPapa(e);
    });
    // Pause sur la musique d'ambiance jusqu'à la scene des choix
    document.getElementById("puberte-global-player").pause();
  }

  render(target) {
    document.getElementById("buzzer-player").pause();
    document.getElementById("buzzer-player").elemMusicOn = false;

    document.getElementById("papa-player").elemMusicOn = true;
    document.getElementById("papa-player").volume = 0.1;
    if (!document.getElementById("papa-player").isMuted) {
      document.getElementById("papa-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
