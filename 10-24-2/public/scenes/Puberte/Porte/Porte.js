import Component from "../../../js/Component.js";

export default class ViewPorte extends Component {
  constructor({ onGoToViewCulotte }) {
    super();
    this.html = "";
    this.onGoToViewCulotte = onGoToViewCulotte;
  }

  async load() {
    this.html = await this.loadHTML("/10-24-2/scenes/Puberte/Porte/Porte.html");
  }

  componentDidMount() {
    document
      .getElementById("puberte")
      .parentElement.addEventListener("click", this.onGoToViewCulotte);
  }

  componentWillUnmount() {
    document
      .getElementById("puberte")
      .parentElement.removeEventListener("click", this.onGoToViewCulotte);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
