import NButton from './components/Button.vue'
import NCheckbox from './components/Checkbox.vue'
import NRadio from './components/Radio.vue'
import NToggle from './components/Toggle.vue'
import NInput from './components/Input.vue'
import NProgress from './components/Progress.vue'
import NLabel from './components/Label.vue'
import NPagination from './components/Pagination.vue'
import NSlider from './components/Slider.vue'
import NDropdown from './components/Dropdown/Dropdown.vue'
import NDropdownItem from './components/Dropdown/DropdownItem.vue'
import NDropDownMenu from './components/Dropdown/DropdownMenu.vue'

const NowUI = {
  install(Vue) {
    Vue.component('n-button', NButton)
    Vue.component('n-checkbox', NCheckbox)
    Vue.component('n-radio', NRadio)
    Vue.component('n-toggle', NToggle)
    Vue.component('n-input', NInput)
    Vue.component('n-progress', NProgress)
    Vue.component('n-label', NLabel)
    Vue.component('n-pagination', NPagination)
    Vue.component('n-slider', NSlider)
    Vue.component('n-dropdown', NDropdown)
    Vue.component('n-dropdown-item', NDropdownItem)
    Vue.component('n-dropdown-menu', NDropDownMenu)
  }
}

export default NowUI
