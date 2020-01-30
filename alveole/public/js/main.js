window.onload = function(){

  // Model part
  // model = new Model();      // Create
  modelSlide = new ModelSlide();
  modelSlide.setValue(0);        // init
  console.log(modelSlide.getFooterValues());



  controler = new Controler(modelSlide);
  // //set the value 0 to initial the page
}
