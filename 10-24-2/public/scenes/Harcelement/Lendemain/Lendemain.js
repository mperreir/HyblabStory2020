import Component from "../../../js/Component.js";

export default class Lendemain extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Harcelement/Lendemain/Lendemain.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToArriveeEnfant(), 1000);
  }


  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
