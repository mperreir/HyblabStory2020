class Controler {

  constructor(model) {

    // View
    var viewHeader = new ViewHeader();
    var viewFooter = new ViewFooter();
    var viewLeft   = new ViewLeft();
    var viewCenter = new ViewCenter();
    var viewRight  = new ViewRight();

    // Listener of view


    // Observer of model
    // var update1 = new Update(model, viewHeader);
    // var update2 = new Update(model, viewFooter);
    // model.addObservers(update1);
    // model.addObservers(update2);
  }
}

class Update extends Observer {

    constructor(model, composant) {
      super();
      this.model = model;
      this.composant = composant;
    }

    update(observable, object) {
    }
}
