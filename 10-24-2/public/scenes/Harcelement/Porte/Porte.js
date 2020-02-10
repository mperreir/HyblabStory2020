import Component from "../../../js/Component.js";

export default class ViewPorte extends Component {
  constructor({ beginBullying }) {
    super();
    this.html = "";
    this.beginBullying = beginBullying;
  }

  async load() {
    this.html = await this.loadHTML("/10-24-2/scenes/Harcelement/Porte/Porte.html");
  }

  componentDidMount() {
    document
      .getElementById("harcelement")
      .parentElement.addEventListener("click", this.beginBullying);
  }

  componentWillUnmount() {
    document
      .getElementById("harcelement")
      .parentElement.removeEventListener("click", this.beginBullying);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
