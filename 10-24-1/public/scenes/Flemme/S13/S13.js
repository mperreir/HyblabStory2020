import Component from "../../../js/Component.js";

export default class S13 extends Component {
  constructor({ onGoToS14 }) {
    super();
    this.html = "";
    this.onGoToS14 = onGoToS14;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Flemme/S13/S13.html"
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
