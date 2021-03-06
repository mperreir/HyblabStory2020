import Component from "../../../js/Component.js";

export default class FlashBack extends Component {
  constructor({ goToFinHistoire }) {
    super();
    this.html = "";
    this.goToFinHistoire = goToFinHistoire;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Harcelement/6_FlashBack/6_FlashBack.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToFinHistoire(), 19500);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
