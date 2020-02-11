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
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
