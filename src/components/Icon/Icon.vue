<template>
  <i class="n-icon now-ui-icons" :class="[name, {spin: spin}]" :style="iconSize"></i>
</template>
<script>
  export default {
    name: 'n-icon',
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: '25px',
        required: false
      },
      spin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconSize() {
        return { 'font-size': this.size }
      }
    }
  }
</script>
