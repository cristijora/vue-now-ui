import NButton from './components/Button.vue'
import NCheckbox from './components/Checkbox.vue'
import NRadio from './components/Radio.vue'
import NToggle from './components/Toggle.vue'
import NInput from './components/Input.vue'
import NProgress from './components/Progress.vue'
import NLabel from './components/Label.vue'
import NPagination from './components/Pagination.vue'

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
  }
}

export default NowUI
