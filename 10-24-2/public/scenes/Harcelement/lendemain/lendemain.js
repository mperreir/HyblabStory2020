import Component from "../../../js/Component.js";

export default class ViewLendemain extends Component {
  constructor() {
    super();
    this.gifHtml = "";
  }

  async load() {
    this.gifHtml = await this.loadHTML(
      "/10-24-2/scenes/harcelement/lendemain/lendemain.html"
    );
  }

  render(target) {
    this.renderHtmlInTarget(target, this.gifHtml);
  }
}
