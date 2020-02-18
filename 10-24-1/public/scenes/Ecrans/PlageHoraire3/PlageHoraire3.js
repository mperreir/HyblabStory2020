import Component from "../../../js/Component.js";

export default class PlageHoraire3 extends Component {
  constructor({ goToPageFin }) {
    super();
    this.html = "";
    this.goToPageFin = goToPageFin;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/PlageHoraire3/PlageHoraire3.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_next")
      .addEventListener("click", e => this.goToPageFin(e));
  }

  render(target) {
    document.getElementById("buzzer-player").pause();
    document.getElementById("buzzer-player").elemMusicOn = false;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
