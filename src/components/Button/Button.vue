<script>
  /* eslint-disable no-param-reassign */

  import {propsToClasses} from './../utils/index'

  export default {
    functional: true,
    name:'n-button',
    props: {
      color: {
        type: String,
        default: 'gray'
      },
      size: {
        type: String
      },
      tag: {
        type: String,
        default: 'button'
      },
      simple: Boolean,
      round: Boolean,
      icon: Boolean,
      iconMini: Boolean
    },
    render(h, {data, props, children}) {
      let staticClass = `n-button btn`
      const boolClasses = propsToClasses('btn', props)
      staticClass += ` ${boolClasses}`
      data.staticClass = data.staticClass
        ? `${data.staticClass} ${staticClass}`
        : staticClass
      return h(props.tag, data, children)
    }
  }
</script>

<style lang="scss" src="@sass/now-ui-kit/_buttons.scss">
</style>
