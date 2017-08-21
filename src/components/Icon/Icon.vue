<style>
  .n-icon.now-ui-icons  {
    font-size: 20px
  }
</style>
<template>
  <i v-if="!spin" class="n-icon now-ui-icons" :class="name"></i>
  <i v-else class="spin n-icon now-ui-icons" :class="name"></i>
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
        required: false
      },
      spin: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
    }
  }
</script>
