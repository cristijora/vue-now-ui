<template>
  <div class="n-input form-group" :class="styleClasses">
    <span class="input-group-addon" v-if="hasIcon && iconAlign==='left'">
      <slot>
      </slot>
    </span>
    <input :type="type" class="form-control"
           :placeholder=placeholder
           :value="value"
           @input="$emit('input', $event.target.value)">
    <span class="input-group-addon" v-if="hasIcon && iconAlign==='right'">
      <slot>
      </slot>
    </span>
  </div>
</template>
<script>
  export default{
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      noBorder: Boolean,
      hasIcon: Boolean,
      iconAlign: {
        type: String,
        default: 'right'
      },
      placeholder: String
    },
    computed: {
      styleClasses() {
        let classes = ''
        if (this.noBorder) {
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
