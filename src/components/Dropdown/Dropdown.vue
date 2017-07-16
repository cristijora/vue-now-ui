<template>
  <div class="dropdown" :class="{show:isOpen}" @click="toggleDropDown">
    <a
       :class="{'n-button n-button-default dropdown-toggle': !$slots.title}"
       data-toggle="dropdown"
       href="javascript:void(0)">
      <slot name="title">
          {{title}}
      </slot>
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'n-dropdown',
    props: {
      title: String,
      icon: String
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen
      },
      closeDropDown() {
        this.isOpen = false
      }
    }
  }
</script>

<style lang="scss" src="@sass/now-ui-kit/_dropdown.scss">
</style>
