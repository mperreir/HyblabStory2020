import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor({ onGoToDiscussion, onGoToBuzzer4 }) {
    super();
    this.html = "";
    this.onGoToDiscussion = onGoToDiscussion;
    this.onGoToBuzzer4 = onGoToBuzzer4;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/3_Culotte/Culotte.html"
    );
  }

  componentDidMount() {
    console.log("culotte mount");
    document
      .getElementById("achat-protection")
      .addEventListener("click", e => this.onGoToBuzzer4(e));
    document
      .getElementById("explication-menstruations")
      .addEventListener("click", e => this.onGoToDiscussion(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
