
class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav>
      <div class="left">
        <h1>Logo</h1>
      </div>

      <div class="right">
        <a>Home</a>
        <a>Practice</a>
        <a>About</a>
      </div>
     
    </nav>
        `;
  }
}
customElements.define("custom-nav", Navbar);
