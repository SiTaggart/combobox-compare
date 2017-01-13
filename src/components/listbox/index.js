import {h, Component} from 'preact'

import ListboxOption from './listbox-option'
import cx from 'classnames'

class Listbox extends Component {

  renderOptions =  options =>
    options.map((optionsGroup, index) => {
      return this.renderOptionsGroup( optionsGroup, index )
    })


  renderOptionsGroup = ( optionsGroup, index ) => {
    const renderOptionsGroupHeader = this.renderOptionsGroupHeader( optionsGroup.optionsLabel )
    const renderOptionsGroupItems = this.renderOptionsGroupItems( optionsGroup.optionItems )
    const groupClassNames = cx(
      'slds-dropdown__list', {
        'slds-has-divider--top-space': (index > 0)
      }
    )

    return(
      <ul
        id={ `${this.props.id}-option-list-01` }
        class={ groupClassNames }
        role={ (optionsGroup.optionsLabel && !this.props.noGrouping) ? 'group' : 'presentation' }
        aria-label={ ( !this.props.noGrouping ) ? optionsGroup.optionsLabel : null }
      >
        { (optionsGroup.optionsLabel && !this.props.noGrouping) ? renderOptionsGroupHeader : null }
        { renderOptionsGroupItems }
      </ul>
    )
  }

  renderOptionsGroupHeader = ( label ) =>
    <li role="presentation">
      <h3 className="slds-lookup__item--label slds-text-title--caps" role="presentation">{ label }</h3>
    </li>

  renderOptionsGroupItems = optionItems =>
    optionItems.map((option) =>
      <ListboxOption
        aria-selected={ (this.props.selectedOptionId === `${this.props.id}-${option.id}`) }
        label={ option.optionLabel }
        id={ `${this.props.id}-${option.id}` }
      />
    )

  render( props, state ) {
    const renderOptions = this.renderOptions( props.options )

    return (
      <div
        class="slds-dropdown slds-dropdown--left slds-dropdown--length-7"
        id={ props.id }
        role="listbox"
      >
        { renderOptions }
      </div>
    );
  }
}

export default Listbox
