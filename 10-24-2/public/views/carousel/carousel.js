import View from "../../js/View.js";

export default class ViewEcrans extends View {
  /**
   *
   * @param {view} viewEcrans Loaded view, ready to be rendered
   * @param {view} viewFlemme Loaded view, ready to be rendered
   * @param {view} viewHarcelment Loaded view, ready to be rendered
   * @param {view} viewPuberte Loaded view, ready to be rendered
   */
  constructor (viewEcrans, viewFlemme, viewHarcelement, viewPuberte) {
    super("carousel", document.getElementById("root"));
    // views
    this.viewEcrans = viewEcrans;
    this.viewFlemme = viewFlemme;
    this.viewHarcelement = viewHarcelement;
    this.viewPuberte = viewPuberte;
    // arrows
    this.leftArrow = null;
    this.rightArrow = null;
    // state
    this.musicOn = true;
  }

  handleMusicSwitch () {
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

    [ir, off].forEach(el => el.addEventListener("mouseover", () => {
      if (this.musicOn) {
        ir.classList.add("showHover");
        off.classList.add("showHover");
        i.classList.add("hide");
      }
    }));

    [ir, off].forEach(el => el.addEventListener("mouseout", () => {
      if (this.musicOn) {
        ir.classList.remove("showHover");
        off.classList.remove("showHover");
        i.classList.remove("hide");
      }
    }));

    [il, on].forEach(el => el.addEventListener("mouseover", () => {
      if (!this.musicOn) {
        il.classList.add("showHover");
        on.classList.add("showHover");
        i.classList.add("hide");
      }
    }));

    [il, on].forEach(el => el.addEventListener("mouseout", () => {
      if (!this.musicOn) {
        il.classList.remove("showHover");
        on.classList.remove("showHover");
        i.classList.remove("hide");
      }
    }));
  }

  linkElements () {
    super.linkElements();
    this.handleMusicSwitch();
    // handle back to carousel/root button
    document.getElementById("carousel-button").style.display = "none";
    document.getElementById("carousel-button").addEventListener("click", () => {
      this.render(document.getElementById("view-container"));
    });
  }

  async load () {
    this.prevArrow = this.loadHTML("/10-24-2/views/carousel/leftArrow.html");
    this.nextArrow = this.loadHTML("/10-24-2/views/carousel/rightArrow.html");
    return Promise.all([super.load(), this.leftArrow, this.rightArrow]);
  }

  /**
   *
   * @param {HTMLElement} target
   */
  render (target) {
    super.render(target);
    const carousel = document.getElementById("carousel");
    const divEcrans = document.createElement("div");
    const divFlemme = document.createElement("div");
    const divHarcelement = document.createElement("div");
    const divPuberte = document.createElement("div");
    carousel.appendChild(divEcrans);
    carousel.appendChild(divFlemme);
    carousel.appendChild(divHarcelement);
    carousel.appendChild(divPuberte);
    this.viewEcrans.render(divEcrans);
    this.viewFlemme.render(divFlemme);
    this.viewHarcelement.render(divHarcelement);
    this.viewPuberte.render(divPuberte);
    // eslint-disable-next-line no-undef
    $(carousel).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      arrows: true,
      autoplaySpeed: 1000,
      // eslint-disable-next-line no-undef
      nextArrow: $(this.nextArrow),
      // eslint-disable-next-line no-undef
      prevArrow: $(this.prevArrow)
    });
    this.carousel = carousel;
  }
}
