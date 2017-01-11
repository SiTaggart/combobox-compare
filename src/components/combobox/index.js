import {h, Component} from 'preact'
import Listbox from '../listbox'
import cx from 'classnames'

class Combobox extends Component {

  state = {
    currentSelectedOptionIndex: null,
    currentSelectedOptionId: null,
    isExpanded: false,
    searchTerm: null,
    totalNumberOfOptions: null
  }

  componentWillMount = () =>
    this.setState({
      'totalNumberOfOptions': this.getTotalNumberOfOptions(this.props.options)
    })

  collapseCombobox = () =>
    this.setState({
      'isExpanded': false
    })

  decreaseCurrentSelectedOptionIndex = () => {
    if (this.state.currentSelectedOptionIndex === 0 || this.state.currentSelectedOptionIndex === null) return;
    if (!this.state.isExpanded) this.expandCombobox()
    this.setNewSelectedOptionByIndex(this.state.currentSelectedOptionIndex -1)
  }

  expandCombobox = () =>
    this.setState({
      'isExpanded': true
    })

  getOptionIdByIndex = index =>
    this.getUnifiedListOfOptions()[index].id

  getOptionTextByIndex = index =>
    this.getUnifiedListOfOptions()[index].optionLabel

  getTotalNumberOfOptions = options => {
    let total = 0
    options.map(group => {
      total += group.optionItems.length
    })
    return total
  }

  getUnifiedListOfOptions = () =>
    this.props.options.reduce((a, b) => {
      return a.concat(b.optionItems);
    }, []);

  handleBlur = e =>
    this.collapseCombobox()

  handleInput = e => {
    this.setState({
      'currentSelectedOptionIndex': null,
      'currentSelectedOptionId': null,
      'searchTerm': e.target.value,
    });
    this.props.onInput( e.target.value, e );
  }

  handleEnterKey = () => {
    this.setState({
      'searchTerm': this.getOptionTextByIndex(this.state.currentSelectedOptionIndex)
    })
    this.collapseCombobox()
  }

  handleFocus = e =>
    this.expandCombobox()

  handleKeyDown = e => {
    switch(e.which) {
      case 38: // up
        e.preventDefault()
        this.decreaseCurrentSelectedOptionIndex();
      break;
      case 40: // down
        e.preventDefault()
        this.increaseCurrentSelectedOptionIndex();
      break;
      case 13: // enter
        e.preventDefault();
        this.handleEnterKey();
      break;
      default: return;
    }
  }

  increaseCurrentSelectedOptionIndex = () => {
    if (this.state.currentSelectedOptionIndex === (this.state.totalNumberOfOptions - 1)) return
    const newIndex = (this.state.currentSelectedOptionIndex === null) ? 0 : this.state.currentSelectedOptionIndex + 1
    if (!this.state.isExpanded) this.expandCombobox()
    this.setNewSelectedOptionByIndex(newIndex)
  }

  setNewSelectedOptionByIndex = index =>
    this.setState({
      'currentSelectedOptionIndex': index,
      'currentSelectedOptionId': this.getOptionIdByIndex(index),
      'searchTerm': (this.props.autoUpdateValue) ? this.getOptionTextByIndex(index) : this.state.searchTerm || null
    })

  render(props, state) {
    const comboboxClasses = cx('slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click', {
        'slds-is-open' : state.isExpanded
    });

    return (
      <div class={ comboboxClasses }>
        <div class="slds-form-element">

          <label class="slds-form-element__label" for={ props.id }>
            { props.label }
          </label>

          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right slds-picklist__input">

            <input
              aria-activedescendant={ state.currentSelectedOptionId }
              aria-expanded={ state.isExpanded || 'false' }
              aria-owns="option-list-01"
              autocomplete={ (props.autocomplete) ? props.autocomplete : null }
              class="slds-lookup__search-input slds-input"
              id={ props.id }
              onBlur={ this.handleBlur }
              onInput={ this.handleInput }
              onFocus={ this.handleFocus }
              onKeyDown={ this.handleKeyDown }
              placeholder="Select an Option"
              readonly={ (!props.autocomplete) ? '' : null }
              role="combobox"
              type={ (props.autocomplete) ? 'search' : 'text' }
              value={ state.searchTerm }
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

        <Listbox
          options={ props.options }
          selectedOptionId={ this.state.currentSelectedOptionId }
        />

      </div>
    );
  }
}

export default Combobox
