<script>
  import {propsToClasses} from './../utils/index'

  export default {
    functional: true,
    name: 'n-label',
    props: {
      color: {
        type: String,
        default: 'gray'
      },
      tag: {
        type: String,
        default: 'span'
      }
    },
    render(h, {data, props, children}) {
      let staticClass = `n-badge`
      const boolClasses = propsToClasses('badge', props)
      staticClass += ` ${boolClasses}`
      data.staticClass = data.staticClass
        ? `${data.staticClass} ${staticClass}`
        : staticClass
      return h(props.tag, data, children)
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_badges.scss">
</style>
