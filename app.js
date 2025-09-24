import './components/app-header.js';
import './components/music-card.js';
import './components/playlist-panel.js';
import './components/app-footer.js';

const app = document.querySelector('#app');

const layout = `
  <app-header title="My Music App"></app-header>
  <main>
    <section>
      <music-card title="Ocean Eyes" artist="Billie Eilish" img-src="https://upload.wikimedia.org/wikipedia/en/b/ba/Billie_Eilish_-_Ocean_Eyes.png"></music-card>
      <music-card title="Blinding Lights" artist="The Weeknd" img-src="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"></music-card>
      <music-card title="Levitating" artist="Dua Lipa" img-src="https://upload.wikimedia.org/wikipedia/en/3/3d/Dua_Lipa_Levitating_%28DaBaby_Remix%29.png"></music-card>
    </section>
    <playlist-panel songs="Ocean Eyes, Blinding Lights, Levitating"></playlist-panel>
  </main>
  <app-footer></app-footer>
`;

app.innerHTML = layout;
