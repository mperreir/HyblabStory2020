window.onload = function(){

  // Model part
  modelSlide = new ModelSlide();

  modelHeader = new ModelHeader();

  modelFooter = new ModelFooter();

  superControler = new SuperControler(modelSlide, modelFooter, modelHeader);

  // Initialization
  modelSlide.setValue(0);
  modelFooter.setValue(false);
  modelHeader.setValue(false);

  // //set the value 0 to initial the page
}
