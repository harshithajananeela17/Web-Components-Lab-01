class MusicCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Unknown Title';
    const artist = this.getAttribute('artist') || 'Unknown Artist';
    const imgSrc = this.getAttribute('img-src') || 'https://via.placeholder.com/150';

    this.innerHTML = `
      <div style="display:flex;align-items:center;gap:15px;background:#fff;padding:10px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1);">
        <img src="${imgSrc}" alt="${title}" style="width:60px;height:60px;border-radius:8px;">
        <div>
          <strong>${title}</strong><br/>
          <small>${artist}</small>
        </div>
      </div>
    `;
  }
}
customElements.define('music-card', MusicCard);
