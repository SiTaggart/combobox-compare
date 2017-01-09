import {h, Component} from 'preact'

import ListboxOption from './listbox-option'
import cx from 'classnames'

class Listbox extends Component {

  constructor () {
    super()

  }

  renderOptions ( options ) {
    return options.map((optionsGroup, index) => {
      return this.renderOptionsGroup( optionsGroup, index )
    })
  }

  renderOptionsGroup ( optionsGroup, index ) {
    const optionsLabel = optionsGroup.optionsLabel
    const ariaRole = (optionsGroup.optionsLabel) ? 'group' : 'presentation'
    const renderOptionsGroupHeader = this.renderOptionsGroupHeader( optionsGroup.optionsLabel )
    const renderOptionsGroupItems = this.renderOptionsGroupItems( optionsGroup.optionItems )
    const groupClassNames = cx(
      'slds-dropdown__list', {
        'slds-has-divider--top-space': (index > 0)
      }
    )

    return(
      <ul id="option-list-01" class={ groupClassNames } role={ ariaRole } aria-label={ optionsLabel }>
        { (optionsGroup.optionsLabel) ? renderOptionsGroupHeader : null }
        { renderOptionsGroupItems }
      </ul>
    )
  }

  renderOptionsGroupHeader ( label ) {
    return(
      <li role="presentation">
        <h3 className="slds-lookup__item--label slds-text-title--caps" role="presentation">{ label }</h3>
      </li>
    )
  }

  renderOptionsGroupItems ( optionItems ) {
    return optionItems.map((option) => {
      return <ListboxOption id={ option.id } label={ option.optionLabel } />
    })
  }

  render( props, state ) {
    const renderOptions = this.renderOptions( props.options )

    return (
      <div class="slds-dropdown slds-dropdown--left slds-dropdown--length-7" role="listbox">
        { renderOptions }
      </div>
    );
  }
}

export default Listbox
