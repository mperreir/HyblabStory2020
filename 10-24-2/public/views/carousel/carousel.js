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
    this.viewEcrans = viewEcrans;
    this.viewFlemme = viewFlemme;
    this.viewHarcelement = viewHarcelement;
    this.viewPuberte = viewPuberte;
    this.leftArrow = null;
    this.rightArrow = null;
  }

  linkElements () {
    super.linkElements();
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
      autoplay: false,
      arrows: true,
      autoplaySpeed: 2000,
      // eslint-disable-next-line no-undef
      nextArrow: $(this.nextArrow),
      // eslint-disable-next-line no-undef
      prevArrow: $(this.prevArrow)
    });
  }
}
