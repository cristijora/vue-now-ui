export default{
  name: 'n-navbar',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    alignRight: Boolean,
    styleClasses: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentActiveIndex: 1,
      currentActiveLink: ''
    }
  },
  render() {
    return (<nav class={[`navbar navbar-toggleable-md bg-${this.$props.type}`]}>
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                aria-controls="navigation-index" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
        <a class="navbar-brand">
          {this.$slots.title}
        </a>
        <div class={[{'justify-content-end': this.alignRight}, 'collapse navbar-collapse']}>
          <ul class="navbar-nav">
            {this.$slots.default}
          </ul>
        </div>
      </div>
    </nav>)
  }
}
