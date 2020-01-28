class Controler {

  constructor(model) {

    // View
    var view = new View();

    // Listener of view
    

    // Observer of model
    var update = new Update(model, view);
    model.addObservers(update);
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
