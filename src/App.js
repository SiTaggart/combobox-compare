import './App.css'

import {h, Component} from 'preact'
import Combobox from './components/combobox'

import getRepos from './utils/getRepos'
import formatReposData from './utils/formatReposData'

export default class App extends Component {

  state = {
    options1 : [],
    options2 : []
  }

  componentWillMount = () => {

    getRepos('test', 'go')
      .then(response =>
        response.json()
      ).then(json =>
        this.setState({
          'options1': [formatReposData('Go', json)]
        })
      ).catch(ex => {
        console.log('parsing failed', ex)
      })

    getRepos('test', 'node')
      .then(response =>
        response.json()
      ).then(json =>
        this.setState({
          'options2': [formatReposData('Node', json)]
        })
      ).catch(ex => {
        console.log('parsing failed', ex)
      })

  }

  render = () =>
    <main class="slds-container--center slds-container--large slds-p-vertical--xx-large">
      <div class="slds-text-longform">
        <h1 class="slds-text-heading--large">WAI-ARIA Combobox Comparison</h1>
        <p>Some combinations of various Combobox options and HTML markup structure.</p>
      </div>
      <form class="slds-grid slds-grid--pull-padded-medium">
        <div class="slds-col slds-p-horizontal--medium">
          <Combobox
            autoUpdateValue
            label="Github Go Repos"
            id="combobox-01"
            options={ this.state.options1 }
          />
        </div>
        <div class="slds-col slds-p-horizontal--medium">
          <Combobox
            label="Github Node Repos"
            id="combobox-02"
            options={ this.state.options2 }
          />
        </div>
      </form>
    </main>
}
