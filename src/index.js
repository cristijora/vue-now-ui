import NButton from './components/Button.vue'
import NCheckbox from './components/Checkbox.vue'
import NRadio from './components/Radio.vue'
import NToggle from './components/Toggle.vue'
import NInput from './components/Input.vue'

const NowUI = {
  install(Vue) {
    Vue.component('n-button', NButton)
    Vue.component('n-checkbox', NCheckbox)
    Vue.component('n-radio', NRadio)
    Vue.component('n-toggle', NToggle)
    Vue.component('n-input', NInput)
  }
}

export default NowUI
