<template>
  <div class="n-input form-group" :class="styleClasses">
    <span class="input-group-addon" v-if="hasIcon && iconAlign==='left'">
      <slot>
      </slot>
    </span>
    <input class="form-control"
           v-bind="$props"
           @input="$emit('input', $event.target.value)">
    <span class="input-group-addon" v-if="hasIcon && iconAlign==='right'">
      <slot>
      </slot>
    </span>
  </div>
</template>
<script>
  export default{
    name:'n-input',
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      hasBorder: Boolean,
      hasIcon: Boolean,
      disabled: Boolean,
      iconAlign: {
        type: String,
        default: 'right'
      },
      placeholder: String,
      required: Boolean
    },
    computed: {
      styleClasses() {
        let classes = ''
        if (!this.hasBorder) {
          classes += `form-group-no-border`
        }
        if (this.hasIcon) {
          classes += ' input-group'
        }
        return classes
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_inputs.scss">
</style>
