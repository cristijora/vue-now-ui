import NButton from './components/Button.vue'
import NCheckbox from './components/Checkbox.vue'
import NInput from './components/Input.vue'

var NowUI = {
  install (Vue) {
    Vue.component('n-button', NButton)
    Vue.component('n-checkbox', NCheckbox)
    Vue.component('n-input', NInput)
  }
}

export default NowUI
