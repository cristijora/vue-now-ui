<template>
  <div id="app">
    <n-button type="primary">Test</n-button>
    <n-checkbox v-model="cbValue">Hello</n-checkbox>
  </div>
</template>

<script>
  import NButton from './components/Button'
  import NCheckbox from './components/Checkbox.vue'
  import NToggle from './components/Toggle.vue'

  export default {
    name: 'app',
    components: {
      NButton,
      NCheckbox,
      NToggle
    },
    data() {
      return {
        cbValue: true,
        toggleValue:true
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<style lang="scss" src="@sass/now-ui-kit/_nucleo-outline.scss">
</style>

