class Model extends Observable {

  // Model value
  value;

  constructor() {
    super();
    this.value;
  }

  setValue(value) {
    if (value != this.value) {
      this.value = value;
      console.log("Model value has been changed");
      this.setChanged();
      this.notifyObservers();
    }
  }
}
