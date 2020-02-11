import Component from "../../../js/Component.js";

export default class Rayon extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Puberte/7_Rayon/Rayon.html"
    );
  }

  componentDidMount() {
    setTimeout(() => this.goToChoix(), 2000);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
