import Component from "../../js/Component.js";

export default class Ecrans extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML("/10-24-2/scenes/Ecrans/Ecrans.html");
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
  }
}
