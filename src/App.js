import './App.css'

import {h, Component} from 'preact'
import Combobox from './components/combobox'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      options : [{
        "optionsLabel": "Recent Repos",
        "optionItems": [{
          "optionLabel": "Salesforce - 1,000 Licenses",
          "id": "123456a",
        },
        {
          "optionLabel": "Art Vandelay",
          "id": "123456b",
        },
        {
          "optionLabel": "Vandelary Industries",
          "id": "123456c",
        },
        {
          "optionLabel": "Salesforce UK 2016 Events",
          "id": "123456d",
        },
        {
          "optionLabel": "H.E. Pennypacker",
          "id": "123456w",
        }]
      }, {
        "optionsLabel": "Recent Repos",
        "optionItems": [{
          "optionLabel": "Salesforce - 1,000 Licenses",
          "id": "123456a",
        },
        {
          "optionLabel": "Art Vandelay",
          "id": "123456b",
        },
        {
          "optionLabel": "Vandelary Industries",
          "id": "123456c",
        },
        {
          "optionLabel": "Salesforce UK 2016 Events",
          "id": "123456d",
        },
        {
          "optionLabel": "H.E. Pennypacker",
          "id": "123456w",
        }]
      }]
    }

  }

  render() {
    return (
      <main class="slds-container--center slds-container--large slds-p-vertical--xx-large">
        <div class="slds-text-longform">
          <h1 class="slds-text-heading--large">WAI-ARIA Combobox Comparison</h1>
          <p>Some combinations of various Combobox options and HTML markup structure.</p>
        </div>
        <form class="slds-grid slds-grid--pull-padded-medium">
          <div class="slds-col slds-p-horizontal--medium">
            <Combobox
              label="Github repos: Option 1"
              id="combobox-01"
              options={ this.state.options }
            />
          </div>
          <div class="slds-col slds-p-horizontal--medium">
            <Combobox
              label="Github repos: Option 2"
              id="combobox-02"
              options={ this.state.options }
            />
          </div>
        </form>
      </main>
    );
  }
}
