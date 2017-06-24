import DropDown from './Dropdown.vue'
import DropDownItem from './DropdownItem.vue'
import DropDownMenu from './DropdownMenu.vue'

DropDown.install = function(Vue) {
  Vue.component(DropDown.name, DropDown)
  Vue.component(DropDownItem.name, DropDownItem)
  Vue.component(DropDownMenu.name, DropDownMenu)
}

export default DropDown
