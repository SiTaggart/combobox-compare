import {h, Component} from 'preact'

class ListboxOption extends Component {
  render ({ id, label }) {
    return (
      <li role="presentation">
        <span class="slds-lookup__item-action slds-lookup__item-action--label" role="option" id={ id }>
          <span class="slds-truncate">{ label }</span>
        </span>
      </li>
    )
  }
}

export default ListboxOption
