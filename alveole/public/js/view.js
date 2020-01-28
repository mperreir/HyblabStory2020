class View {
    constructor() {
      this.header = document.querySelector("header");
      this.footer = document.querySelector("footer");
      this.main = document.querySelector("main");

      let title = document.createElement('h2');
      title.setAttribute('class', 'title');
      title.innerHTML = 'Podcast';
      this.header.appendChild(title);
    }
}
