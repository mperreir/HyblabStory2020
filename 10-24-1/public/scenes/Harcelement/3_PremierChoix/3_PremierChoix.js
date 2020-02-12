import Component from "../../../js/Component.js";

export default class PremierChoix extends Component {
  constructor({ onGoToLendemain, onGoToDerniereTentative }) {
    super();
    this.html = "";
    this.onGoToDerniereTentative = onGoToDerniereTentative;    
    this.onGoToLendemain = onGoToLendemain;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/3_PremierChoix/3_PremierChoix.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("aller-le-voir")
      .addEventListener("click", e => this.onGoToDerniereTentative(e));
    document
      .getElementById("le-laisser-3")
      .addEventListener("click", e => this.onGoToLendemain(e));
      ;
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
