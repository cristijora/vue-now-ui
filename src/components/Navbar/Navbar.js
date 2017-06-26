export default{
  name: 'n-navbar',
  props: {
    type: {
      type: String,
      default: 'white'
    },
    alignRight: Boolean,
    styleClasses: {
      type: String,
      default: ''
    },
    colorOnScroll: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 0
      }
    }
  },
  data() {
    return {
      currentActiveIndex: 1,
      currentActiveLink: '',
      isTransparent: true
    }
  },
  render() {
    let extraClass = this.colorOnScroll > 0 && this.isTransparent ? 'navbar-transparent' : `bg-${this.type}`
    return (<nav class={[`navbar navbar-toggleable-md ${extraClass}`]}>
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                aria-controls="navigation-index" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0)">
          {this.$slots.title}
        </a>
        <div class={[{'justify-content-end': this.alignRight}, 'collapse navbar-collapse']}>
          <ul class="navbar-nav">
            {this.$slots.default}
          </ul>
        </div>
      </div>
    </nav>)
  },
  mounted() {
    function scroll(fn) {
      window.addEventListener('scroll', () => {
        fn()
      }, false)
    }

    scroll(() => {
      if (document.documentElement.scrollTop > this.colorOnScroll || document.body.scrollTop > this.colorOnScroll) {
        this.isTransparent = false
      } else {
        this.isTransparent = true
      }
    })
  }
}
