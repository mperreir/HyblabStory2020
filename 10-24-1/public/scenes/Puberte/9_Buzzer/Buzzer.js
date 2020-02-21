import Component from "../../../js/Component.js";

export default class Buzzer9 extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Puberte/9_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("buzzer9")
      .addEventListener("click", e => this.goToChoix(e));
    // Pause sur la musique d'ambiance
    document.getElementById("puberte-global-player").pause();
    document.getElementById("buzzer-player").onended = () =>
      document.getElementById("puberte-global-player").play();
  }

  render(target) {
    document.getElementById("buzzer-player").pause();

    document.getElementById("buzzer-player").elemMusicOn = true;
    document.getElementById("buzzer-player").volume = 0.1;
    if (!document.getElementById("buzzer-player").isMuted) {
      document.getElementById("buzzer-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
