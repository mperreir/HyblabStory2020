import Component from "../../../js/Component.js";

export default class SuperPapa extends Component {
  constructor({ goToRayon }) {
    super();
    this.html = "";
    this.goToRayon = goToRayon;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/6_SuperPapa/SuperPapa.html"
    );
  }

  componentDidMount() {
    setTimeout(() => this.goToRayon(), 1000);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
