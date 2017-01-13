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
    options4 : [],
    options5 : [],
    options6 : [],
    options7 : [],
    options8 : [],
    options9 : [],
    options10 : [],
    options11 : [],
    options12 : []
  }

  componentWillMount = () => {
    this.setComboBoxState( '', 'go', 'options1' )
    this.setComboBoxState( '', 'node', 'options2' )
    this.setComboBoxState( '', 'ruby', 'options3' )
    this.setComboBoxState( '', 'javascript', 'options4' )
    this.setComboBoxState( '', 'python', 'options5' )
    this.setComboBoxState( '', 'java', 'options6' )
    this.setComboBoxState( '', 'C#', 'options7' )
    this.setComboBoxState( '', 'swift', 'options8' )
    this.setComboBoxState( '', 'php', 'options9' )
    this.setComboBoxState( '', 'css', 'options10' )
    this.setComboBoxState( '', 'c++', 'options11' )
    this.setComboBoxState( '', 'objective-c', 'options12' )
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

  handleCombobox5Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'python', 'options5' )
  }, 1500)

  handleCombobox6Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'java', 'options6' )
  }, 1500)

  handleCombobox7Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'c#', 'options7' )
  }, 1500)

  handleCombobox8Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'swift', 'options8' )
  }, 1500)

  handleCombobox9Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'php', 'options9' )
  }, 1500)

  handleCombobox10Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'css', 'options10' )
  }, 1500)

  handleCombobox11Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'c++', 'options11' )
  }, 1500)

  handleCombobox12Input = throttle(( term, e ) => {
      this.setComboBoxState( term, 'objective-c', 'options12' )
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
              listboxId="listbox-01"
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
              listboxId="listbox-03"
              onInput={ this.handleCombobox3Input }
              options={ this.state.options3 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autoUpdateValue
              label="Github Python Repos"
              id="combobox-05"
              listboxId="listbox-05"
              newLayout
              onInput={ this.handleCombobox5Input }
              options={ this.state.options5 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              autoUpdateValue
              label="Github C# Repos"
              id="combobox-07"
              listboxId="listbox-07"
              newLayout
              onInput={ this.handleCombobox7Input }
              options={ this.state.options7 }
            />
          </div>
        </div>
        <div class="slds-col slds-p-horizontal--medium">
          <div class="slds-p-bottom--x-large">
            <Combobox
              label="Github Node Repos"
              id="combobox-02"
              listboxId="listbox-02"
              onInput={ this.handleCombobox2Input }
              options={ this.state.options2 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              label="Github JavaScript Repos"
              id="combobox-04"
              listboxId="listbox-04"
              onInput={ this.handleCombobox4Input }
              options={ this.state.options4 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              label="Github Java Repos"
              id="combobox-06"
              listboxId="listbox-06"
              newLayout
              onInput={ this.handleCombobox6Input }
              options={ this.state.options6 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              label="Github Swift Repos"
              id="combobox-08"
              listboxId="listbox-08"
              newLayout
              onInput={ this.handleCombobox8Input }
              options={ this.state.options8 }
            />
          </div>
        </div>
        <div class="slds-col slds-p-horizontal--medium">
          <div class="slds-p-bottom--x-large">
            <Combobox
              label="Github PHP Repos"
              id="combobox-09"
              listboxId="listbox-09"
              noGrouping
              onInput={ this.handleCombobox9Input }
              options={ this.state.options9 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              label="Github CSS Repos"
              id="combobox-10"
              listboxId="listbox-10"
              noGrouping
              onInput={ this.handleCombobox10Input }
              options={ this.state.options10 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              label="Github C++ Repos"
              id="combobox-11"
              listboxId="listbox-11"
              noGrouping
              newLayout
              onInput={ this.handleCombobox11Input }
              options={ this.state.options11 }
            />
          </div>
          <div class="slds-p-bottom--x-large">
            <Combobox
              autocomplete="list"
              label="Github Objective-C Repos"
              id="combobox-12"
              listboxId="listbox-12"
              noGrouping
              newLayout
              onInput={ this.handleCombobox12Input }
              options={ this.state.options12 }
            />
          </div>
        </div>
      </form>
    </main>
}
