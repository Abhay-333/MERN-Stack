class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        `;
    customElements.define("Navbar", Navbar);
  }
}
