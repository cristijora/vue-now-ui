<template>
  <div class="wrapper">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="fixed-section">
              <ul>
                <li>
                  <a href="#buttons-row">Buttons</a>
                </li>
                <li>
                  <a href="#checkbox-row">Checkbox/Radio/Toggle</a>
                </li>
                <li>
                  <a href="#inputs-row">Inputs</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="tim-container">
              <buttons></buttons>
            </div>
            <div class="tim-container">
              <checkboxes></checkboxes>
            </div>
            <div class="tim-container">
              <inputs></inputs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'prismjs/themes/prism.css'
  import Prism from 'prismjs'
  Prism.highlightAll()

  import Vue from 'vue'
  import NowUI from './../index'
  Vue.use(NowUI)

  import DemoBlock from './helpers/DemoBlock.vue'
  Vue.component('demo-block', DemoBlock)

  import Buttons from './rows/Buttons.vue'
  import Checkboxes from './rows/Checkboxes.vue'
  import Inputs from './rows/Inputs.vue'
  export default{
    components: {
      Buttons,
      Checkboxes,
      Inputs
    }
  }
</script>
<style>
</style>
