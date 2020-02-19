import { fetch } from "./3rdParty/fetch.min.js";

export default class Component {
  /**
     *
     * @param {string} url
     */
  async loadHTML (url) {
    const res = await fetch(url);
    const html = await res.text();
    return html;
  }

  componentDidMount () { }

  componentWillUnmount () { }

  /**
     *
     * @param {HTMLElement} target
     * @param {HTMLElement | string} html
     */
  renderHtmlInTarget (target, html) {
    if (typeof html === "string") {
      target.innerHTML = html;
    } else if (typeof html === "object") {
      target.innerHTML = "";
      target.appendChild(html);
    } else {
      console.error("Invalid parameters for `renderHtmlInTarget` : ", { target, html });
    }
  }

  /**
     *
     * @param {HTMLElement} target
     * @param {string} htmlText
     */
  render (target, htmlText) {
    target.innerHTML = htmlText;
  }
}
