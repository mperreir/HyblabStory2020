import Component from "../../../js/Component.js";

export default class ATable extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Harcelement/1_ArriveeEnfant/1_ArriveeEnfant.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
