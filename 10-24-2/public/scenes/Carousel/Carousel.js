import Component from "../../js/Component.js";
import Puberte from "../Puberte/Puberte.js";
// import Ecrans from "../Ecrans/Ecrans.js";
import Harcelement from "../Harcelement/Harcelement.js";
// import Flemme from "../Flemme/Flemme.js";

export default class Carousel extends Component {
  constructor() {
    super();

    // html of the component itself
    this.html = "";

    // components
    const ChildrenProps = { onStart: this.startScenario.bind(this) };
    // this.ecransC = new Ecrans(ChildrenProps);
    // this.flemmeC = new Flemme(ChildrenProps);
    this.harcelementC = new Harcelement(ChildrenProps);
    // this.puberteC = new Puberte(ChildrenProps);
    // /!\ Cheat /!\
    this.ecransC = new Puberte(ChildrenProps);
    this.flemmeC = new Puberte(ChildrenProps);
    //this.harcelementC = new Puberte(ChildrenProps);
    this.puberteC = new Puberte(ChildrenProps);

    // state
    this.state = { musicOn: true, currentView: null, isSliding: false };
  }

  handleSocialMediaButtons() {
    document
      .getElementById("facebook-button")
      .addEventListener("click", () =>
        window.open("https://www.facebook.com/1024.media/", "_blank")
      );
    document
      .getElementById("instagram-button")
      .addEventListener("click", () =>
        window.open("https://www.instagram.com/instagram/", "_blank")
      );
  }

  /**
   *
   * @param {Component} scenarioC
   */
  startScenario(scenarioC) {
    this.state.currentView = scenarioC;
    const $slider = $("#carousel");
    $slider.slick("slickSetOption", "accessibility", false);
    $slider.slick("slickSetOption", "draggable", false);
    $slider.slick("slickSetOption", "swipe", false);
    $slider.slick("slickSetOption", "touchMove", false);
    document.getElementById("nextArrow").style.display = "none";
    document.getElementById("previousArrow").style.display = "none";
    document.getElementById("choix-portes").style.display = "block";
  }

  handleCarouselButton() {
    document.getElementById("choix-portes").addEventListener("click", () => {
      this.render(document.getElementById("root"));
    });
  }

  handleMusicSwitch() {
    return;
    const ir = document.getElementById("switch-active-indicator-right");
    const il = document.getElementById("switch-active-indicator-left");
    const i = document.getElementById("switch-active-indicator");
    const on = document.getElementById("music-on");
    const off = document.getElementById("music-off");

    document.getElementById("music-switch").addEventListener("click", () => {
      i.classList.remove("hide");
      if (this.musicOn) {
        i.classList.remove("click-left");
        i.classList.add("click-right");
        ir.classList.remove("showHover");
        off.classList.remove("showHover");
      } else {
        i.classList.remove("click-right");
        i.classList.add("click-left");
        il.classList.remove("showHover");
        on.classList.remove("showHover");
      }
      this.musicOn = !this.musicOn;
    });

    [ir, off].forEach(el =>
      el.addEventListener("mouseover", () => {
        if (this.musicOn) {
          ir.classList.add("showHover");
          off.classList.add("showHover");
          i.classList.add("hide");
        }
      })
    );

    [ir, off].forEach(el =>
      el.addEventListener("mouseout", () => {
        if (this.musicOn) {
          ir.classList.remove("showHover");
          off.classList.remove("showHover");
          i.classList.remove("hide");
        }
      })
    );

    [il, on].forEach(el =>
      el.addEventListener("mouseover", () => {
        if (!this.musicOn) {
          il.classList.add("showHover");
          on.classList.add("showHover");
          i.classList.add("hide");
        }
      })
    );

    [il, on].forEach(el =>
      el.addEventListener("mouseout", () => {
        if (!this.musicOn) {
          il.classList.remove("showHover");
          on.classList.remove("showHover");
          i.classList.remove("hide");
        }
      })
    );
  }

  componentDidMount() {
    // wire social networks buttons
    this.handleSocialMediaButtons();

    // wire music switch
    this.handleMusicSwitch();

    // wire the carousel/root button
    this.handleCarouselButton();
  }

  async load() {
    const promises = await Promise.all([
      this.loadHTML("/10-24-2/scenes/Carousel/Carousel.html"),
      this.ecransC.load(),
      this.flemmeC.load(),
      this.harcelementC.load(),
      this.puberteC.load()
    ]);
    this.html = promises[0];
  }

  /**
   *
   * @param {HTMLElement} target Target dom element in which the component will render
   */
  render(target) {
    // We render the component and get its DOM ref
    this.renderHtmlInTarget(target, this.html);
    const carousel = document.getElementById("carousel");

    // We create the divs that will each contain one scenario
    const divEcransC = document.createElement("div");
    const divFlemmeC = document.createElement("div");
    const divHarcelementC = document.createElement("div");
    const divPuberteC = document.createElement("div");

    // We insert them in each carousel slide and
    carousel.appendChild(divEcransC);
    carousel.appendChild(divFlemmeC);
    carousel.appendChild(divHarcelementC);
    carousel.appendChild(divPuberteC);

    // We render each scenario
    this.ecransC.render(divEcransC);
    this.flemmeC.render(divFlemmeC);
    this.harcelementC.render(divHarcelementC);
    this.puberteC.render(divPuberteC);

    // We activate the slider
    $(carousel).slick({
      // autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplaySpeed: 1000,
      nextArrow: $("#nextArrow"),
      prevArrow: $("#previousArrow")
    });
    this.carousel = carousel;

    this.componentDidMount();
  }
}
