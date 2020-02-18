import Component from "../../../js/Component.js";

export default class Buzzer9 extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/9_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("buzzer9")
      .addEventListener("click", e => this.goToChoix(e));
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
