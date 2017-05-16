<template>
  <input type="checkbox" name="checkbox" class="bootstrap-switch" :checked="checked" :data-on-label="onText" :data-off-label="offText"/>
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
      disabled: [Boolean, String],
      onText: String,
      offText: String
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
<style lang="scss" src="@sass/now-ui-kit/_inputs.scss">
</style>
<style lang="scss" src="@sass/now-ui-kit/plugins/_plugin-bootstrap-switch.scss">
</style>
