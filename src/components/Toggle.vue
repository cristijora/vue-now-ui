<template>
  <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate" :class="switchClass">
    <div class="bootstrap-switch-container" @click="triggerToggle()">
      <span class="bootstrap-switch-handle-on bootstrap-switch-primary">
      {{onText}}
      </span>
      <span class="bootstrap-switch-label"></span>
      <span class="bootstrap-switch-handle-off bootstrap-switch-primary">{{offText}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      label: String,
      value: [Array, Boolean],
      disabled: [Boolean, String],
      onText: String,
      offText: String
    },
    computed: {
      switchClass() {
        let base = 'bootstrap-switch-'
        let state = this.model ? 'on' : 'off'
        return base + state
      },
      model: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      }
    },
    methods: {
      triggerToggle() {
        this.model = !this.model
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/plugins/_plugin-bootstrap-switch.scss">
</style>
