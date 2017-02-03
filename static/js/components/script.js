const html = require('choo/html');
const find = require('lodash/find');
const scriptLine = require('./scriptLine.js');

module.exports = (state, prev, send) => {
    const issue = find(state.issues, ['id', state.location.params.issueid]);
    const currentContact = issue.contacts[state.contactIndex];

    function personalizeScript(script) {
      const personalizationRegionRegex =  /\[([\s\S]+?)\]/g;
      var personalized = script;
      var match;
      // Only personalize regions delimited by square brackets
      while (match = personalizationRegionRegex.exec(personalized)) {
        const region = match[0];
        var interpolation = match[1];
        for (key in state.personalInfo) {
          interpolation = interpolation.replace(key, state.personalInfo[key]);
        }
        personalized = personalized.replace(region, interpolation);
      }
      return personalized;
    }

    const script = personalizeScript(issue.script);
    if (currentContact != null) {
      return html`
      <div class="call__script">
        <h3 class="call__script__header">Your script:</h3>
        <div class="call__script__body">${script.split('\n').map((line) => scriptLine(line, state, prev, send))}</div>
      </div>`
    } else {
      return html``
    }
}
