class PlaylistPanel extends HTMLElement {
  connectedCallback() {
    const songsAttr = this.getAttribute('songs') || '';
    
    const songs = songsAttr.split(',').map(song => song.trim()).filter(Boolean);

    const listItems = songs.map(song => `<li>• ${song}</li>`).join('');

    this.innerHTML = `
      <h3>Your Playlist</h3>
      <ul style="list-style:none;padding:0;">
        ${listItems}
      </ul>
    `;
  }
}

customElements.define('playlist-panel', PlaylistPanel);
