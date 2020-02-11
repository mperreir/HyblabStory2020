import Component from "../../../js/Component.js";

export default class Buzzer extends Component {
  constructor({ onGoToCulotte }) {
    super();
    this.html = "";
    this.onGoToCulotte = onGoToCulotte;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/4_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("explic-buzzer-4")
      .addEventListener("click", e => this.onGoToCulotte(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
