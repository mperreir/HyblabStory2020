import Component from "../../../js/Component.js";

export default class FewHoursBefore extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/5_FewHoursBefore/5_FewHoursBefore.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToFlashBack(), 1000);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
