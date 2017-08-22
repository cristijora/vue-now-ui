import NModal from './Modal.vue'

NModal.install = function(Vue) {
  Vue.component(NModal.name, NModal)
}

export default NModal
