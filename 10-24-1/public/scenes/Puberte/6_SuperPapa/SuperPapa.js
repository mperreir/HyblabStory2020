import Component from "../../../js/Component.js";

export default class SuperPapa extends Component {
  constructor({ goToRayon }) {
    super();
    this.html = "";
    this.goToRayon = goToRayon;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/6_SuperPapa/SuperPapa.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToRayon(), 1000);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
