<template>
  <div class="dropdown" :class="{show:show}">
    <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="toggleDropdown">
      <slot></slot>
    </a>
    <slot name="dropdown-menu">
    </slot>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        show: false
      }
    },
    methods: {
      toggleDropdown() {
        this.show = !this.show
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_dropdown.scss">
</style>
