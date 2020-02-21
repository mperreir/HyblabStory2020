import Component from "../../../js/Component.js";

export default class PremierChoix extends Component {
  constructor({ goToDerniereTentative, onGoToLendemain }) {
    super();
    this.html = "";
    this.goToDerniereTentative = goToDerniereTentative;
    this.onGoToLendemain = onGoToLendemain;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Harcelement/3_PremierChoix/3_PremierChoix.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "block";
    document
      .getElementById("aller-le-voir")
      .addEventListener("click", e => this.goToDerniereTentative(e));
    document
      .getElementById("le-laisser-3")
      .addEventListener("click", e => this.onGoToLendemain(e));
  }

  render(target) {
    document.getElementById("porte-claque-player").pause();
    document.getElementById("porte-claque-player").elemMusicOn = false;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
