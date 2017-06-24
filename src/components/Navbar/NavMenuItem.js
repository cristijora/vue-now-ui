export default {
  name:'n-menu-item',
  data() {
    return {
      active: false
    }
  },
  methods: {
    makeLinkActive() {
      this.active = !this.active
    }
  },
  render() {
    return (<li class={{'nav-item': true}}>
      <a class="nav-link">
        {this.$slots.default}
      </a>
    </li>)
  }
}
