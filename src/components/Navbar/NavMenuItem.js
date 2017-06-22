export default {
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
      <a class="nav-link" href="#pablo">
        {this.$slots.default}
      </a>
    </li>)
  }
}
