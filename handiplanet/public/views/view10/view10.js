class View10 extends View {
  constructor(el) {
    super('view10', el || document.getElementById('view-container'));
    this.load()
      .then(() => {
        this.view = document.getElementById(this.viewName);
        this.linkElements();
      });
  }

  linkElements() {
  }
}