import Component from "../../js/Component.js";
import Puberte from "../Puberte/Puberte.js";
import Ecrans from "../Ecrans/Ecrans.js";
import Harcelement from "../Harcelement/Harcelement.js";
import Flemme from "../Flemme/Flemme.js";

export default class Carousel extends Component {
  constructor() {
    super();

    // html of the component itself
    this.html = "";

    // components
    const ChildrenProps = { onStart: this.startScenario.bind(this) };
    this.ecransC = new Ecrans(ChildrenProps);
    this.flemmeC = new Flemme(ChildrenProps);
    this.harcelementC = new Harcelement(ChildrenProps);
    this.puberteC = new Puberte(ChildrenProps);

    // state
    this.state = { musicOn: true, currentView: null, isSliding: false };

    // list of playing elements
    // this.listMusicOn = [];
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
    // Disable slider
    const $slider = $("#carousel");
    $slider.slick("slickPause");
    $slider.slick("slickSetOption", "accessibility", false);
    $slider.slick("slickSetOption", "draggable", false);
    $slider.slick("slickSetOption", "swipe", false);
    $slider.slick("slickSetOption", "touchMove", false);
    document.getElementById("nextArrow").style.display = "none";
    document.getElementById("previousArrow").style.display = "none";
    document.getElementById("choix-portes").style.display = "block";
    document.getElementById("auto-carousel").style.display = "none";
    document.getElementById("carousel-player").pause();
    document.getElementById("carousel-player").elemMusicOn = false;
  }

  handleCarouselButton() {
    document.getElementById("choix-portes").addEventListener("click", () => {
      this.render(document.getElementById("root"));
    });
  }

  handleAutoCarousel() {
    document.getElementById("auto-carousel").addEventListener("click", () => {
      if (document.getElementById("auto-carousel").value == 0) {
        document.getElementById("auto-carousel").innerHTML = 'Activer le d&eacute;filement automatique';
        document.getElementById("auto-carousel").value = 1;
        $(carousel).slick("slickPause");
      }
      else {
        document.getElementById("auto-carousel").innerHTML = 'D&eacute;sactiver le d&eacute;filement automatique';
        document.getElementById("auto-carousel").value = 0;
        $(carousel).slick("slickPlay");
      }
    });
  }

  handleMusicSwitch() {

    function muteMe(elem) {
      elem.isMuted = true;
      if (elem.elemMusicOn) {
        elem.pause();
      }
      else {
        elem.elemMusicOn = false;
      }
    }

    function unmuteMe(elem) {
      elem.isMuted = false;
      if (elem.elemMusicOn) {
        elem.play();
      }
    }

    document.getElementById("disable-music").addEventListener("click", () => {
      if (this.state.musicOn) {
        this.state.musicOn = !this.state.musicOn;
        document.getElementById("disabled").style.display = "block";
        document.getElementById("enabled").style.display = "none";
        var elems = document.querySelectorAll("audio");
        [].forEach.call(elems, function(elem) { muteMe(elem); });
      }
    });

    document.getElementById("enable-music").addEventListener("click", () => {
      if (!this.state.musicOn) {
        this.state.musicOn = !this.state.musicOn;
        document.getElementById("disabled").style.display = "none";
        document.getElementById("enabled").style.display = "block";
        var elems = document.querySelectorAll("audio");
        [].forEach.call(elems, function(elem) { unmuteMe(elem); });
      }
    });
  }

  componentDidMount() {
    // wire social networks buttons
    this.handleSocialMediaButtons();

    // wire music switch
    this.handleMusicSwitch();

    // wire the carousel/root button
    this.handleCarouselButton();

    //wire the auto Carousel
    this.handleAutoCarousel();

    document.getElementById("carousel-player").volume = 0.1;
    document.getElementById("carousel-player").elemMusicOn = true;
    document.getElementById("ecran-player").pause();
    document.getElementById("ecran-player").elemMusicOn = false;
  }

  async load() {
    const promises = await Promise.all([
      this.loadHTML("scenes/Carousel/Carousel.html"),
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
    carousel.appendChild(divPuberteC);
    carousel.appendChild(divFlemmeC);
    carousel.appendChild(divHarcelementC);
    carousel.appendChild(divEcransC);

    // We render each scenario
    this.ecransC.render(divEcransC);
    this.flemmeC.render(divFlemmeC);
    this.harcelementC.render(divHarcelementC);
    this.puberteC.render(divPuberteC);

    $("#carousel").on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if (nextSlide == 3) {
        document.getElementById("carousel-player").pause();
        document.getElementById("carousel-player").elemMusicOn = false;

        document.getElementById("ecran-player").elemMusicOn = true;
        document.getElementById("ecran-player").volume = 0.03;
        if (!document.getElementById("ecran-player").isMuted) {
          document.getElementById("ecran-player").play();
        }
      }
      else {
        document.getElementById("ecran-player").pause();
        document.getElementById("ecran-player").elemMusicOn = false;

        document.getElementById("carousel-player").elemMusicOn = true;
        document.getElementById("carousel-player").volume = 0.1;
        if (!document.getElementById("carousel-player").isMuted) {
          document.getElementById("carousel-player").play();
        }
      }
    });


    // We activate the slider
    $(carousel).slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplaySpeed: 4000,
      nextArrow: $("#nextArrow"),
      prevArrow: $("#previousArrow"),
    });
    this.carousel = carousel;

    this.componentDidMount();
  }
}
