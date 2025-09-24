class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="background:#222;color:#ccc;text-align:center;padding:1em;font-size:0.9em;">
        © 2025 Music App. All rights reserved.
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
