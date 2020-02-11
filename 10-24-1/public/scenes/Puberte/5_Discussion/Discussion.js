import Component from "../../../js/Component.js";

export default class Discussion extends Component {
  constructor({ goToSuperPapa }) {
    super();
    this.html = "";
    this.goToSuperPapa = goToSuperPapa;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/5_Discussion/Discussion.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("go-to-super-papa")
      .addEventListener("click", e => this.goToSuperPapa(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
