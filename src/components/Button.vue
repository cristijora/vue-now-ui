<script>
  /* eslint-disable no-param-reassign */

  import {propsToClasses} from './utils/index'

  export default {
    functional: true,
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String
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
      return h('button', {
        ...data
      }, children)
    }
  }
</script>

<style lang="scss" src="@sass/now-ui-kit/_buttons.scss">
</style>
