import Component from "../../../js/Component.js";

export default class ViewDiscussion extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/Discussion/Discussion.html"
    );
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
  }
}
