import Navbar from './Navbar'
import NavMenuItem from './NavMenuItem'

Navbar.install = function(Vue) {
  Vue.component(Navbar.name, Navbar)
  Vue.component(NavMenuItem.name, NavMenuItem)
}

export default Navbar
