import './App.css'

import {h, Component} from 'preact'
import throttle from 'lodash/throttle';

import getRepos from './utils/getRepos'
import formatReposData from './utils/formatReposData'

import Combobox from './components/combobox'

export default class App extends Component {

  state = {
    options1 : [],
    options2 : [],
    options3 : [],
    options4 : []
  }

  componentWillMount = () => {
    this.setComboBoxState( 'test', 'go', 'options1' )
    this.setComboBoxState( 'test', 'node', 'options2' )
    this.setComboBoxState( 'test', 'ruby', 'options3' )
    this.setComboBoxState( 'test', 'javascript', 'options4' )
  }

  handleCombobox1Input = throttle(( term, e ) => {
    this.setComboBoxState( term, 'go', 'options1' )
  }, 200)

  handleCombobox2Input = throttle(( term, e ) => {
    this.setComboBoxState( term, 'node', 'options2' )
  }, 200)

  handleCombobox3Input = throttle(( term, e ) => {
    this.setComboBoxState( term, 'ruby', 'options3' )
  }, 200)

  handleCombobox4Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'javascript', 'options4' )
  }, 1500)

  setComboBoxState = ( term, language, stateKey ) => {
    let stateObject = {}
    getRepos( term, language )
      .then(response =>
        response.json()
      ).then(json => {
        stateObject[stateKey] = [formatReposData(language, json)]
        this.setState( stateObject )
      }).catch(ex => {
        console.log( 'parsing failed', ex )
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
          <div class="slds-p-bottom--x-large">
            <Combobox
              autoUpdateValue
              label="Github Go Repos"
              id="combobox-01"
              onInput={ this.handleCombobox1Input }
              options={ this.state.options1 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              autoUpdateValue
              label="Github Ruby Repos"
              id="combobox-03"
              onInput={ this.handleCombobox3Input }
              options={ this.state.options3 }
            />
          </div>
        </div>
        <div class="slds-col slds-p-horizontal--medium">
          <div class="slds-p-bottom--x-large">
            <Combobox
              label="Github Node Repos"
              id="combobox-02"
              onInput={ this.handleCombobox2Input }
              options={ this.state.options2 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              label="Github JavaScript Repos"
              id="combobox-04"
              onInput={ this.handleCombobox4Input }
              options={ this.state.options4 }
            />
          </div>
        </div>
      </form>
    </main>
}
