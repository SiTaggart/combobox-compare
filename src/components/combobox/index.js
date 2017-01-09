import {h, Component} from 'preact'
import Listbox from '../listbox'
import cx from 'classnames'

class Combobox extends Component {

  constructor () {
    super()
    this.state = {
      isExpanded: true
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus (e) {
    this.setState({
      'isExpanded' : true
    })
  }

  handleBlur () {
    this.setState({
      'isExpanded' : false
    })
  }

  render(props, state) {
    const picklistClasses = cx(
      'slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click',
      {
        'slds-is-open' : state.isExpanded
      }
    );

    return (
      <div class={ picklistClasses }>
        <div class="slds-form-element">

          <label class="slds-form-element__label" for={ props.id }>
            { props.label }
          </label>

          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right slds-picklist__input">

            <input
              aria-activedescendant=""
              aria-expanded={ state.isExpanded || 'false' }
              aria-owns="option-list-01"
              class="slds-lookup__search-input slds-input"
              id={ props.id }
              onBlur={ this.handleBlur }
              onFocus={ this.handleFocus }
              placeholder="Select an Option"
              readonly=""
              role="combobox"
              type="search"
            />

            <button
              aria-expanded={ state.isExpanded || 'false' }
              class="slds-button slds-input__icon slds-text-color--default"
              tabindex="-1"
              title="Expand category options"
            >
              &#x25bc;
              <span class="slds-assistive-text">Expand category options</span>
            </button>

          </div>
        </div>

        <Listbox options={ props.options } />

      </div>
    );
  }
}

export default Combobox
