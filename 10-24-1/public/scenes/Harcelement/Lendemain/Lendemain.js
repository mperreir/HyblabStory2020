import Component from "../../../js/Component.js";

export default class Lendemain extends Component {
  constructor({ goToArriveeEnfant }) {
    super();
    this.html = "";
    this.goToArriveeEnfant = goToArriveeEnfant;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/Lendemain/Lendemain.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToArriveeEnfant(), 3000);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
