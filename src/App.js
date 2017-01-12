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
    options8 : []
  }

  componentWillMount = () => {
    this.setComboBoxState( 'test', 'go', 'options1' )
    this.setComboBoxState( 'test', 'node', 'options2' )
    this.setComboBoxState( 'test', 'ruby', 'options3' )
    this.setComboBoxState( 'test', 'javascript', 'options4' )
    this.setComboBoxState( 'test', 'phython', 'options5' )
    this.setComboBoxState( 'test', 'java', 'options6' )
    this.setComboBoxState( 'test', 'C#', 'options7' )
    this.setComboBoxState( 'test', 'swift', 'options8' )
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
              onInput={ this.handleComboboxInput }
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
      </form>
    </main>
}
