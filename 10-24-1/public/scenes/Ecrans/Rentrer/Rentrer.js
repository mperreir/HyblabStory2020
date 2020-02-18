import Component from "../../../js/Component.js";

export default class Rentrer extends Component {
  constructor({ goToChambre }) {
    super();
    this.html = "";
    this.goToChambre = goToChambre;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/Rentrer/Rentrer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_next")
      .addEventListener("click", e => this.goToChambre(e));
  }

  render(target) {
    // document.getElementById("ecran-player").pause();
    // document.getElementById("ecran-player").play();
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
