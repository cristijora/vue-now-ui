import NAlert from './Alert.vue'

NAlert.install = function(Vue) {
  Vue.component(NAlert.name, NAlert)
}

export default NAlert
