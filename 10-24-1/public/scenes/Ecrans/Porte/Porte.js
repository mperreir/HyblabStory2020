import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML("scenes/Ecrans/Porte/Porte.html");
  }

  // componentDidMount() {
  //   document.getElementById("choix-portes").style.display = "none";
  // }
  //
  // componentWillUnmount() {
  //   document.getElementById("choix-portes").style.display = "block";
  // }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
