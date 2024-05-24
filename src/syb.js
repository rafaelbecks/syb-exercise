import { LitElement, html } from 'lit'
import { Styles } from './styles'
import './scrobble-api'
const DEFAULT_ZONE_ID =
  'U291bmRab25lLCwxaHM2bnI2cW9lOC9Mb2NhdGlvbiwsMW9oZXI5OTh5eW8vQWNjb3VudCwsMWd3dWtvcm1icjQv'

export class NowPlaying extends LitElement {
  static properties = {
    scrobbles: []
  }

  static get styles () {
    return Styles
  }

  apiInstance = null
  zoneId = null

  constructor () {
    super()
    this.zoneId = location.hash || DEFAULT_ZONE_ID
    this.apiInstance = new ScrobbleApi(this.zoneId.replace(/^[ #]+|\s+$/, ''))
  }

  connectedCallback () {
    super.connectedCallback()
    this.getScrobblesData()
    window.addEventListener('hashchange', () => {
      this.getScrobblesData()
    })
  }

  getScrobblesData () {
    if (this.apiInstance) {
      this.apiInstance.unsubscribe()
    }

    this.apiInstance.fetchHistory().then(scrobbles => {
      this.scrobbles = scrobbles
      this.apiInstance.subscribe(scrobble => {
        this.scrobbles.push(scrobble)
        this.requestUpdate()
      })
    })
  }

  addMockedScrobble () {
    this.scrobbles.push(ScrobbleApi.mockScrobble())
    this.requestUpdate()
  }

  renderScrobbleCard () {
    return this.scrobbles
      .slice()
      .reverse()
      .map(
        scrobble => html`
           <div class="played__row-template">
             <div><img class="played__cover" alt="" src="${
               scrobble.image_url
             }"></div>
             <div class="played__title__artists">
              <h2>${scrobble.song_name}<h2>
              <h3>${scrobble.artists.map(artist => artist.name).join(', ')}</h3>
              <span>${new Date(scrobble.created_at).toLocaleString()}</span>
             </div>
           </div>
        `
      )
  }

  renderCurrentPlaying () {
    const lastScrobble = this.scrobbles[this.scrobbles.length - 1]

    return html`
      <section id="playing">
        <header>
          <h2>Now Playing</h2>
        </header>
        <div class="song__info">
          <img class="played__cover" alt="" src="${lastScrobble.image_url}">
          <h2>${lastScrobble.song_name}</h2>
          <h3>${lastScrobble.artists.map(artist => artist.name).join(', ')}</h3>
        <div>
      </section>
    `
  }

  render () {
    if (!this.scrobbles)
      return html`
        <div class="main-area">
          <div class="loader"></div>
        </div>
      `

    return html`
      <div class="main-area">
        ${this.renderCurrentPlaying()}
        <section id="history">
          <header>
            <h2>History</h2>
            <button
              @click=${() => {
                this.addMockedScrobble()
              }}
            >
              +
            </button>
          </header>
          <div class="list">
            ${this.renderScrobbleCard()}
          </div>
        </section>
      </div>
    `
  }
}

window.customElements.define('syb-now-playing', NowPlaying)
