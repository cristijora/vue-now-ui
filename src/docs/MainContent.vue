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
                <li>
                  <a href="#textarea-row">Textarea</a>
                </li>
                <li>
                  <a href="#progress-row">Progress Bars</a>
                </li>
                <li>
                  <a href="#labels-row">Labels</a>
                </li>
                <li>
                  <a href="#paginaton-row">Pagination</a>
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
            <div class="tim-container">
              <textareas></textareas>
            </div>
            <div class="tim-container">
              <progress-bars></progress-bars>
            </div>
            <div class="tim-container">
              <labels></labels>
            </div>
            <div class="tim-container">
              <paginations></paginations>
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
  import Textareas from './rows/Textareas.vue'
  import ProgressBars from './rows/Progress.vue'
  import Labels from './rows/Labels.vue'
  import Paginations from './rows/Paginations.vue'
  export default{
    components: {
      Buttons,
      Checkboxes,
      Inputs,
      Textareas,
      ProgressBars,
      Labels,
      Paginations
    }
  }
</script>
<style>
</style>
