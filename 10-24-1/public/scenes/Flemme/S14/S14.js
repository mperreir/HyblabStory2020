import Component from "../../../js/Component.js";

export default class PageFin extends Component {
  constructor({ goToCredits }) {
    super();
    this.html = "";
    this.goToCredits = goToCredits;
  }

  async load() {
    this.html = await this.loadHTML("/10-24-1/scenes/Flemme/S14/S14.html");
  }

  componentDidMount() {
    // social networks
    document
      .getElementById("fs14_fb")
      .addEventListener("click", () =>
        window.open("https://www.facebook.com/1024.media/", "_blank")
      );
    document
      .getElementById("fs14_ig")
      .addEventListener("click", () =>
        window.open("https://www.instagram.com/instagram/", "_blank")
      );
    // Hide social network from carousel and show credits button
    document.getElementById("facebook-button").style.display = "none";
    document.getElementById("instagram-button").style.display = "none";
    const credits = document.getElementById("fs14_credits_bouton");
    credits.style.display = "block";
    credits.addEventListener("click", () => {
      this.componentWillUnmount();
      this.goToCredits();
    });
  }

  componentWillUnmount() {
    document.getElementById("facebook-button").style.display = "block";
    document.getElementById("instagram-button").style.display = "block";
    const credits = document.getElementById("credits-button");
    credits.style.display = "none";
  }

  render(target) {
    document.getElementById("choix-portes").style.display = "block";
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
