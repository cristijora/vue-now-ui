<script>
  export default{
    functional: true,
    props: {
      tag: {
        type: String,
        default: 'a'
      },
      divider: Boolean
    },
    render(h, {data, props, children}) {
      let tag = props.divider ? 'div' : props.tag
      let staticClass = 'dropdown-item'
      if (props.divider) {
        staticClass = 'dropdown-divider'
      }
      data.staticClass = data.staticClass
        ? `${data.staticClass} ${staticClass}`
        : staticClass

      return h(tag, data, children)
    }
  }
</script>
<style>
</style>
