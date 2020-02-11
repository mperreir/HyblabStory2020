import Component from "../../../js/Component.js";

export default class ViewPremierChoix extends Component {
  constructor({ onGoToLendemain, onGoToDerniereTentative }) {
    super();
    this.html = "";
    this.onGoToLendemain = onGoToLendemain;
    this.onGoToDerniereTentative = onGoToDerniereTentative;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/3_PremierChoix/3_PremierChoix.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("aller-le-voir")
      .addEventListener("click", this.onGoToDerniereTentative);
    document
      .getElementById("le-laisser")
      .addEventListener("click", this.onGoToLendemain);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
