<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="wrapper">
      <top-navbar></top-navbar>
      <main-content></main-content>
    </div>
  </div>
</template>

<script>
  import NToggle from './components/Toggle.vue'
  import MainContent from './docs/MainContent.vue'
  import NavBar from './docs/NavBar.vue'
  import TopNavbar from './docs/TopNavBar.vue'
  export default {
    name: 'app',
    components: {
      NToggle,
      MainContent,
      NavBar,
      TopNavbar
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

<style>
  @import "/static/css/bootstrap.min.css";
  @import "/static/css/demo.css";
  @import "/static/css/now-ui-kit.css";
</style>

<style lang="scss" src="@sass/now-ui-kit.scss">
</style>

