import Component from "../../../js/Component.js";

export default class Credits extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/Credits/Credits.html"
    );
  }

  componentDidMount() {
    document.getElementById("carousel-player").play();
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
