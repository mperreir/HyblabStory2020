import Component from "../../../js/Component.js";

export default class Buzzer9 extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/9_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("buzzer9")
      .addEventListener("click", e => this.goToChoix(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
