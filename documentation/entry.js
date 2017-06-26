import Vue from 'vue'
import Element from 'element-ui'
import App from './app'
import VueRouter from 'vue-router'
import routes from './route.config'
import NowUI from 'src/index.js'
import demoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav'

Vue.use(VueRouter)
Vue.use(NowUI)
Vue.use(Element)
Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)

const router = new VueRouter({
  routes:routes
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
