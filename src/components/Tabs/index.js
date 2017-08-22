import NTabs from './Tabs.vue'
import NTabItem from './TabItem.vue'

export default NTabs.install = function(Vue) {
  Vue.component(NTabs.name, NTabs)
  Vue.component(NTabItem.name, NTabItem)
}

export { NTabs, NTabItem }
