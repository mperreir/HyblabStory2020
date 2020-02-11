import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/1_Porte_stereolux/Porte.html"
    );
  }

  componentDidMount() {}

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
