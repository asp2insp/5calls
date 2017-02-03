const html = require('choo/html');

const sidebar = require('../components/sidebar.js');
const personalInfo = require('../components/personalInfo.js');

module.exports = (state, prev, send) => {
  return html`
    <div id="root" class="layout">
      ${sidebar(state, prev, send)}
      ${personalInfo(state, prev, send)}
    </div>
  `;
}
