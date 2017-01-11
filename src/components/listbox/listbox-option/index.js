import {h, Component} from 'preact'
import cx from 'classnames';

class ListboxOption extends Component {
  render ( props ) {
    const classNames = cx('slds-lookup__item-action slds-lookup__item-action--label', {
      'slds-has-focus': props['aria-selected']
    })

    return (
      <li role="presentation">
        <span
          aria-selected={ props['aria-selected'] }
          class={ classNames }
          id={ props.id }
          role="option"
        >
          <span class="slds-truncate">{ props.label }</span>
        </span>
      </li>
    )
  }
}

export default ListboxOption
