class AppHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Music App';
    this.innerHTML = `
      <header style="background:#1db954;color:white;padding:1em;text-align:center;font-size:1.5em;">
        🎵 ${title}
      </header>
    `;
  }
}
customElements.define('app-header', AppHeader);
