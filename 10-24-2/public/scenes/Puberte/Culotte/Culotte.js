import Component from "../../../js/Component.js";

export default class ViewCulotte extends Component {
  constructor({ onGoToViewDiscussion }) {
    super();
    this.html = "";
    this.onGoToViewDiscussion = onGoToViewDiscussion;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/Culotte/Culotte.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("puberte")
      .addEventListener("click", this.onGoToViewDiscussion);
  }

  comonentWillUnmount() {
    document
      .getElementById("puberte")
      .removeEventListener("click", this.onGoToViewDiscussion);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
