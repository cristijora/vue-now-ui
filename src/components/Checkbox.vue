<template>
  <div class="n-checkbox checkbox" :class="checkboxType">
    <input :id="cbId" type="checkbox" :checked="model===true" :disabled="disabled" v-model="model">
    <label :for="cbId">
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
      disabled: [Boolean, String],
      type: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        cbId: ''
      }
    },
    computed: {
      model: {
        get() {
          return this.checked
        },
        set(check) {
          this.$emit('change', check)
        }
      },
      checkboxType() {
        if (this.type) {
          return `checkbox-${this.type}`
        }
      }
    },
    created() {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_checkboxes-radio.scss">
</style>
