const html = require('choo/html');

module.exports = (state, prev, send) => {
  return html`
    <main role="main" class="layout__main">
    <section class="info">
      <h2 class="info__header">Personalize your scripts</h2>

      <form>
        <label>Name <input type="text"></label>
        <label>City <input type="text"></label>
        <label>State <input type="text"></label>
        <label>Zip <input type="text"></label>
        <button>Save</button>
      </form>

    </section>
    </main>
  `;
}
