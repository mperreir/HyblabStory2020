window.onload = function(){

  // Model part
  modelSlide = new ModelSlide();

  superControler = new SuperControler(modelSlide);

  // Initialization
  // modelSlide.initialize();
  superControler.loadSlideMediator().then(() => modelSlide.setValue(0)); // Do not remove, important

}
