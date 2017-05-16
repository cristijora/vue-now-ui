<template>
  <div class="checkbox">
    <input id="checkbox2" type="checkbox" checked="" :disabled="disabled" v-model="model">
    <label for="checkbox2">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default{
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      label: String,
      checked: [Array, Boolean],
      disabled: [Boolean, String]
    },
    computed: {
      model: {
        get() {
          return this.checked
        },
        set(check) {
          this.$emit('change', check)
        }
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_checkboxes-radio.scss">
</style>
