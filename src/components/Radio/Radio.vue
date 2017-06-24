<template>
  <div class="n-radio radio">
    <input :id="cbId" type="radio" :name="name" :checked="model===true" :disabled="disabled" :value="label" v-model="model">
    <label :for="cbId">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default{
    props: {
      label: String,
      disabled: [Boolean, String],
      value: [String, Boolean],
      name: String,
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
          return this.value
        },
        set(value) {
          this.$emit('input', value)
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
