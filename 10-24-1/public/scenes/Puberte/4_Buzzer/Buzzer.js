import Component from "../../../js/Component.js";

export default class Buzzer extends Component {
  constructor({ goToDiscussion }) {
    super();
    this.html = "";
    this.goToDiscussion = goToDiscussion;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/4_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("explic-buzzer-4")
      .addEventListener("click", e => this.goToDiscussion(e));
  }

  render(target) {
    document.getElementById("buzzer-player").elemMusicOn = true;
    document.getElementById("buzzer-player").volume = 0.1;
    if (!document.getElementById("buzzer-player").isMuted) {
      document.getElementById("buzzer-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
