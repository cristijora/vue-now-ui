export default{
  name: 'n-navbar',
  props:{
    color:{
      type:String,
      default:'gray'
    }
  },
  data() {
    return {
      currentActiveIndex: 1,
      currentActiveLink: ''
    }
  },
  render() {
    return (<nav class="navbar navbar-toggleable-md bg-warning">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                aria-controls="navigation-index" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
        <a class="navbar-brand" href="#pablo">
          {this.$slots.title}
          <slot name="title"></slot>
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            {this.$slots.default}
          </ul>
        </div>
      </div>
    </nav>)
  }
}
